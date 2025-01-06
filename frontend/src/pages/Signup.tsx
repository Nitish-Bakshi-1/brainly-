import { useRef } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

const Signup = () => {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  async function signUp() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    await axios.post(`${BACKEND_URL}/api/v1/signup`, {
      username,
      password,
    });
    alert("Signup successful");
  }

  return (
    <div className="h-screen w-full bg-gray-200 flex justify-center  items-center ">
      <div className="bg-white border min-w-48 flex justify-center px-12 rounded-xl gap-4 py-8 flex-col items-center">
        <Input reference={usernameRef} placeHolder="username" />
        <Input reference={passwordRef} placeHolder="password" />
        <Button
          text="Signup"
          variant="primary"
          onClick={signUp}
          fullWidth={true}
        />
      </div>
    </div>
  );
};

export default Signup;
