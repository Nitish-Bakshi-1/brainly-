import express from "express";
import jwt from "jsonwebtoken";
import { User, Content, Link } from "./db";
import auth from "./middleware";
import { random } from "./utils";

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
  const { link, tags, title } = req.body;
  await Content.create({
    link,
    title,
    //@ts-ignore
    userId: req.userId,
    tags: [],
  });
  res.json({
    msg: "content created",
  });
});

app.get("/api/v1/content", auth, async function (req, res) {
  // @ts-ignore
  const userId = req.userId;
  const content = await Content.find({
    userId: userId,
  }).populate("userId", "username");
  res.json({
    content: content,
  });
});

app.delete("/api/v1/content", async function (req, res) {
  const contentId = req.body.contentId;

  await Content.deleteMany({
    contentId,
    //@ts-ignore
    userId: req.userId,
  });
  res.json({
    message: "Deleted",
  });
});

app.post("/api/v1/brain/share", auth, async function (req, res) {
  const { share } = req.body;

  if (share) {
    const existingLink = await Link.findOne({
      //@ts-ignore
      userId: req.userId,
    });

    if (existingLink) {
      res.json({
        hash: existingLink.hash,
      });
      return;
    }

    const hash = random(10);
    await Link.create({
      //@ts-ignore
      userId: req.userId,
      hash: hash,
    });
    res.json({
      msg: "updated sharable link",
      link: `share/${hash}`,
    });
  } else {
    await Link.deleteOne({
      //@ts-ignore
      userId: req.userId,
    });
    res.json({
      msg: "REMOVED sharable link",
    });
  }
});

app.get("/api/v1/brain/:shareLink", async function (req, res) {
  const hash = req.params.shareLink;

  const link = await Link.findOne({
    hash,
  });

  if (!link) {
    res.status(404).json({
      msg: "sorry incorrect input",
    });
    return;
  }

  const content = await Content.find({
    userId: link.userId,
  });

  const user = await User.findOne({
    _id: link.userId,
  });

  if (!user) {
    res.json({
      msg: "user not found error should ideally not happen",
    });
    return;
  }

  res.json({
    username: user.username,
    content: content,
  });
});

app.listen(3000, () => {
  console.log("server connected ");
});
