import Button from "../components/Button";
import Input from "../components/Input";

const SignIn = () => {
  return (
    <div className="h-screen w-full bg-gray-200 flex justify-center  items-center ">
      <div className="bg-white border min-w-48 flex justify-center px-12 rounded-xl gap-4 py-8 flex-col items-center">
        <Input placeHolder="username" />
        <Input placeHolder="password" />
        <Button text="SignIn" variant="primary" fullWidth={true} />
      </div>
    </div>
  );
};

export default SignIn;
