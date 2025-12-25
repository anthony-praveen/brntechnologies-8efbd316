app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, interest, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const params = { name, email, phone, interest, message };

    // 🔴 HARD PROOF LOG
    console.log("API /api/contact called. Will notify:", {
      contactus: {
        email: "contactus@brn.co.in",
        number: "+919361040506"
      },
      zita: {
        email: "zitaclement@gmail.com",
        number: "+919168759744"
      }
    });

    await notificationapi.send({
      type: "brn_enquiries",
      to: {
        email: "contactus@brn.co.in",
        number: "+919361040506"
      },
      parameters: params
    });

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
