app.post("/ask", (req, res) => {
  const msg = req.body.message.toLowerCase();

  let reply = "";

  if (msg.includes("hello")) {
    reply = "Hi! How can I help you?";
  } else if (msg.includes("study")) {
    reply = "Make a timetable and study daily!";
  } else if (msg.includes("math")) {
    reply = "Practice daily and understand concepts.";
  } else {
    reply = "I am still learning 🤖";
  }

  res.json({ reply });
});
