
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/ask", (req, res) => {
  const userMessage = req.body.message;

  res.json({
    reply: "You said: " + userMessage
  });
});

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "." });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running...");
});
