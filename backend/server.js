import express from "express";
import cors from "cors";
import notificationapi from "notificationapi-node-server-sdk";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

/* -------------------- Middleware -------------------- */
app.use(cors());
app.use(express.json());

/* -------------------- Init NotificationAPI -------------------- */
if (!process.env.NOTIFICATIONAPI_CLIENT_ID || !process.env.NOTIFICATIONAPI_CLIENT_SECRET) {
  throw new Error("❌ NotificationAPI credentials missing");
}

notificationapi.init(
  process.env.NOTIFICATIONAPI_CLIENT_ID,
  process.env.NOTIFICATIONAPI_CLIENT_SECRET
);

console.log("✅ NotificationAPI initialized");

/* -------------------- Health Check -------------------- */
app.get("/health", (_, res) => res.send("OK"));

/* -------------------- Contact Form API -------------------- */
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, interest, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const parameters = {
      name,
      email,
      phone: phone || "Not provided",
      interest: interest || "General",
      message
    };

    console.log("📩 Incoming enquiry:", parameters);

    /* 🔹 Send to ContactUs */
    await notificationapi.send({
      type: "brn_enquiries",
      to: {
        email: "contactus@brn.co.in",
        number: "+919361040506"
      },
      parameters
    });

    /* 🔹 Send to Zita (SEPARATE SEND — REQUIRED) */
    await notificationapi.send({
      type: "brn_enquiries",
      to: {
        email: "zitaclement@gmail.com",
        number: "+919168759744"
      },
      parameters
    });

    console.log("✅ Notifications sent to both recipients");

    res.json({ success: true });

  } catch (error) {
    console.error("❌ NotificationAPI error:", error);
    res.status(500).json({ error: "Failed to send enquiry" });
  }
});

/* -------------------- Start Server -------------------- */
app.listen(PORT, () => {
  console.log(`🚀 BRN backend running on port ${PORT}`);
});
