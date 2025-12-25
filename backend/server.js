import express from "express";
import cors from "cors";
import notificationapi from "notificationapi-node-server-sdk";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Init
notificationapi.init(
  process.env.NOTIFICATIONAPI_CLIENT_ID,
  process.env.NOTIFICATIONAPI_CLIENT_SECRET
);

app.get("/health", (_, res) => res.send("OK"));

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, interest, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const params = { name, email, phone, interest, message };

    // 🔹 Send to Zita (SEPARATE SEND — REQUIRED FOR SMS/CALL)
    await notificationapi.send({
      type: "brn_enquiries",
      to: {
        email: "zitaclement@gmail.com",
        number: "+919168759744"
      },
      parameters: params
    });

    // 🔹 Send to ContactUs
    await notificationapi.send({
      type: "brn_enquiries",
      to: {
        email: "contactus@brn.co.in",
        number: "+919361040506"
      },
      parameters: params
    });

    res.json({ success: true });

  } catch (err) {
    console.error("NotificationAPI error:", err);
    res.status(500).json({ error: "Failed to send enquiry" });
  }
});

app.listen(PORT, () => {
  console.log(`BRN backend running on port ${PORT}`);
});
