import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/ask", async (req, res) => {
  const userMessage = req.body.message;

  res.json({
    reply: "This is your AI response (we will connect real AI next)"
  });
});

app.listen(3000, () => console.log("Server running"));
