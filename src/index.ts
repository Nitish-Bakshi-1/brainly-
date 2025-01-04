import express from "express";
import jwt from "jsonwebtoken";
import { User, Content } from "./db";
import auth from "./middleware";

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
  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      username,
      password,
    });

    if (user) {
      const token = jwt.sign({ id: user._id }, "JWT_SECRET");
      res.json({
        token: token,
      });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ msg: "Internal server error" });
  }
});

app.post("/api/v1/content", auth, async function (req, res) {
  const { link, tags, userId, title } = req.body;
  await Content.create({
    link,
    title,
    userId,
    tags,
  });
});

app.get("/api/v1/content", function (req, res) {});

app.delete("/api/v1/content", function (req, res) {});

app.post("/api/v1/brain/share", function (req, res) {});

app.post("/api/v1/brain/:shareLink", function (req, res) {});

app.listen(3000, () => {
  console.log("server connected ");
});
