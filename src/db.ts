import mongoose, { model, Schema } from "mongoose";

try {
  mongoose
    .connect(
      "mongodb+srv://admin:yX6EbhfQXdv9ueZk@cluster0.j7jusce.mongodb.net/second-brain"
    )
    .then(() => {
      console.log("database connected");
    });
} catch (e) {
  console.log(e);
}

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = model("User", userSchema);

export { User };
