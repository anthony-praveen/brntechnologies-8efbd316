import express from "express";
import cors from "cors";
import notificationapi from "notificationapi-node-server-sdk";
import "dotenv/config";

const app = express(); // 🔴 THIS WAS MISSING
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Init NotificationAPI
notificationapi.init(
  process.env.NOTIFICATIONAPI_CLIENT_ID,
  process.env.NOTIFICATIONAPI_CLIENT_SECRET
);

// Health check
app.get("/health", (_, res) => res.send("OK"));

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, interest, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const params = { name, email, phone, interest, message };

    // 🔍 HARD LOG — YOU WILL SEE THIS IN RENDER
    console.log("Sending enquiry to BOTH recipients", {
      contactus: "+919361040506",
      zita: "+919168759744"
    });

    // ContactUs
    await notificationapi.send({
      type: "brn_enquiries",
      to: {
        email: "contactus@brn.co.in",
        number: "+919361040506"
      },
      parameters: params
    });

    // Zita
    await notificationapi.send({
      type: "brn_enquiries",
      to: {
        email: "zitaclement@gmail.com",
        number: "+919168759744"
      },
      parameters: params
    });

    res.json({ success: true });
  } catch (err) {
    console.error("NotificationAPI error:", err);
    res.status(500).json({ error: "Failed to send enquiry" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`BRN backend running on port ${PORT}`);
});
