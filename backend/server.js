const express = require("express");
const cors = require("cors");
const notificationapi = require("notificationapi-node-server-sdk").default;

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// 🔐 Initialize NotificationAPI securely (Render ENV vars)
notificationapi.init(
  process.env.NOTIFICATION_CLIENT_ID,
  process.env.NOTIFICATION_CLIENT_SECRET
);

// 🔎 Health check (Render / monitoring)
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// 📩 Contact form endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, interest, message } = req.body;

    // Basic validation
    if (!name || !email || !interest) {
      return res.status(400).json({
        error: "Name, email, and interest are required",
      });
    }

    await notificationapi.send({
      type: "brn_enquiries",

      // Recipients are configured in NotificationAPI templates
      to: {
        email: "contactus@brn.co.in",
        number: "+919361040506",
      },

      // 🔁 Parameters injected into templates
      parameters: {
        name,
        email,
        phone: phone || "Not provided",
        interest,
        message: message || "No message provided",
      },
    });

    res.json({
      success: true,
      message: "Enquiry submitted successfully",
    });
  } catch (error) {
    console.error("NotificationAPI error:", error);

    res.status(500).json({
      error: "Failed to send enquiry",
    });
  }
});

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`BRN backend running on port ${PORT}`);
});
