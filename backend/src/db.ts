import mongoose, { model, Schema } from "mongoose";

mongoose
  .connect(
    "mongodb+srv://admin:Z0cxTqSYU6AHP0FZ@cluster0.j7jusce.mongodb.net/second-brain"
  )
  .then(() => {
    console.log("database connected");
  });

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const contentSchema = new Schema({
  title: String,
  link: String,
  type: String,
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

const linkSchema = new Schema({
  hash: { type: String },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
});

const User = model("User", userSchema);
const Content = model("Content", contentSchema);
const Link = model("Link", linkSchema);

export { User, Content, Link };
