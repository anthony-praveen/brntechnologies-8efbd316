import express from "express";
import cors from "cors";
import notificationapi from "notificationapi-node-server-sdk";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Correct initialization
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
      return res.status(400).json({
        error: "Name, email, and message are required"
      });
    }

    // ✅ Identify the person who submitted the enquiry (optional but clean)
    await notificationapi.identifyUser({
      id: email,
      email,
      number: phone
    });

    // ✅ Send notification to BOTH admins
    await notificationapi.send({
      type: "brn_enquiries",
      to: [
        {
          id: "contactus@brn.co.in",
          email: "contactus@brn.co.in",
          number: "+919361040506"
        },
        {
          id: "zitaclement@gmail.com",
          email: "zitaclement@gmail.com",
          number: "+919168759744"
        }
      ],
      parameters: {
        name,
        email,
        phone,
        interest,
        message
      }
    });

    res.json({ success: true });

  } catch (error) {
    console.error("NotificationAPI error:", error);
    res.status(500).json({ error: "Failed to send enquiry" });
  }
});

app.listen(PORT, () => {
  console.log(`BRN backend running on port ${PORT}`);
});
