import mongoose, { Model, Schema } from "mongoose";

mongoose.connect(
  "mongodb+srv://admin:yX6EbhfQXdv9ueZk@cluster0.j7jusce.mongodb.net/second-brain"
);

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = new Model("User", userSchema);

export { User };
