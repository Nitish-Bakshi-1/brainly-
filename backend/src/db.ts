import mongoose, { model, Schema } from "mongoose";

mongoose
  .connect(
    "mongodb+srv://admin:yX6EbhfQXdv9ueZk@cluster0.j7jusce.mongodb.net/second-brain"
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
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

const User = model("User", userSchema);
const Content = model("Content", contentSchema);

export { User, Content };
