import express from "express";
import { User } from "./db";

const app = express();
app.use(express.json());

app.post("/api/v1/signup", async function (req, res) {
  try {
    const { username, password } = req.body;
    await User.create({
      username,
      password,
    });
    res.json({
      msg: "user signed up successfully",
    });
  } catch (e) {
    console.log(e);
  }
});

app.post("/api/v1/signin", async function (req, res) {
  const { username, password } = req.body;
  const user = await User.findOne({
    username,
    password,
  });
  if (!user) {
    res.json({
      msg: "user doesnot exists",
    });
  }
});

app.post("/api/v1/content", function (req, res) {});

app.get("/api/v1/content", function (req, res) {});

app.delete("/api/v1/content", function (req, res) {});

app.post("/api/v1/brain/share", function (req, res) {});

app.post("/api/v1/brain/:shareLink", function (req, res) {});

app.listen(3000, () => {
  console.log("server connected ");
});
