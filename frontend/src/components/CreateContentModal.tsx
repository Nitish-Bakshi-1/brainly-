import CrossIcon from "../icons/CrossIcon";
import Button from "./Button";

const CreateContentModal = ({ open, onClose }) => {
  return (
    <div className="">
      {open && (
        <div className="w-screen fixed h-screen bg-slate-500 top-0 left-0 bg-opacity-60 flex justify-center items-center">
          <div className=" flex-col flex justify-center bg-white rounded">
            <span className="bg-white rounded opacity-100  p-4 ">
              <div className="flex justify-end cursor-pointer">
                <div onClick={onClose}>
                  <CrossIcon />
                </div>
              </div>
              <div className="flex flex-col">
                <Input placeHolder={"Title"} />
                <Input placeHolder={"Link"} />
              </div>
              <div className="flex justify-center">
                <Button text="Submit" variant="primary" />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

function Input({ onChange, placeHolder }: { onChange: () => void }) {
  return (
    <input
      className="px-4 py-2 border rounded m-2"
      placeholder={placeHolder}
      onChange={onChange}
      type="text"
    />
  );
}

export default CreateContentModal;
