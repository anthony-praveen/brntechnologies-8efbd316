const express = require('express');
const cors = require('cors');
const notificationapi = require('notificationapi-node-server-sdk').default;

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize NotificationAPI
notificationapi.init(
  '42mptymudh1pblhcnz8do1r70f',
  'uh8jv9uoafnk59ycnch3t1w25wire89d1g1qjucbhf8lo2wciiztso8vpq'
);

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, interest, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    const interestType = interest || 'General Inquiry';

    // Send notification via NotificationAPI
    await notificationapi.send({
      type: 'brn_enquiries',
      to: {
        id: 'contactus@brn.co.in',
        email: 'contactus@brn.co.in',
        number: '+919361040506'
      },
      email: {
        subject: `New Enquiry from ${name} - ${interestType}`,
        html: `
          <h2>New Contact Form Enquiry</h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Interest Type</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${interestType}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Message</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${message}</td>
            </tr>
          </table>
        `
      },
      sms: {
        message: `New BRN Enquiry: ${name} (${phone || 'No phone'}) - ${interestType}. Check your email (Zita's Gmail or Contact Us) for full details.`
      },
      call: {
        message: `You have a new enquiry from ${name}. Their interest is ${interestType}. ${message}. For the detailed enquiry form, please check your emails, Zita's Gmail or the Contact Us official ID.`
      }
    });

    // Also send to Zita's Gmail
    await notificationapi.send({
      type: 'brn_enquiries',
      to: {
        id: 'zita@gmail.com',
        email: 'zita@gmail.com'
      },
      email: {
        subject: `New Enquiry from ${name} - ${interestType}`,
        html: `
          <h2>New Contact Form Enquiry</h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Interest Type</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${interestType}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Message</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${message}</td>
            </tr>
          </table>
        `
      }
    });

    res.json({ success: true, message: 'Notifications sent successfully' });
  } catch (error) {
    console.error('Error sending notifications:', error);
    res.status(500).json({ error: 'Failed to send notifications' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
