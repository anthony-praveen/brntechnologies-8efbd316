import express from "express";
import cors from "cors";
import NotificationAPI from "notificationapi-node-server-sdk";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize NotificationAPI securely
NotificationAPI.init(
  process.env.NOTIFICATION_CLIENT_ID,
  process.env.NOTIFICATION_CLIENT_SECRET
);

// Health check (Render-friendly)
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, interest, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Name, email, and message are required'
      });
    }
    // Identify / upsert end users (VERY IMPORTANT)
    await notificationapi.identify([
      {
        id: 'contactus@brn.co.in',
        email: 'contactus@brn.co.in',
        number: '+919361040506'
      },
      {
        id: 'zitaclement@gmail.com',
        email: 'zitaclement@gmail.com',
        number: '+919168759744'
      }
    ]);


    await notificationapi.send({
      type: 'brn_enquiries',

      // MULTIPLE recipients (this is correct)
      to: [
        {
          id: 'contactus@brn.co.in',
          email: 'contactus@brn.co.in',
          number: '+919361040506'
        },
        {
          id: 'zitaclement@gmail.com',
          email: 'zitaclement@gmail.com',
          number: '+919168759744'
        }
      ],

      // These map directly to your templates
      parameters: {
        name,
        email,
        phone: phone || 'Not provided',
        interest: interest || 'General',
        message
      }
    });

    res.json({
      success: true,
      message: 'Enquiry sent successfully'
    });

  } catch (error) {
    console.error('NotificationAPI error:', error);
    res.status(500).json({
      error: 'Failed to send enquiry'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`BRN backend running on port ${PORT}`);
});
