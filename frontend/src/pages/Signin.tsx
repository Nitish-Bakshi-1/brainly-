import { useRef } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  async function signIn() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
      username,
      password,
    });
    const jwt = response.data.token;
    localStorage.setItem("token", jwt);
    navigate("/dashboard");
  }

  return (
    <div className="h-screen w-full bg-gray-200 flex justify-center  items-center ">
      <div className="bg-white border min-w-48 flex justify-center px-12 rounded-xl gap-4 py-8 flex-col items-center">
        <Input reference={usernameRef} placeHolder="username" />
        <Input reference={passwordRef} placeHolder="password" />
        <Button
          text="SignIn"
          onClick={signIn}
          variant="primary"
          fullWidth={true}
        />
      </div>
    </div>
  );
};

export default SignIn;
