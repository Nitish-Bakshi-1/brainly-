import { useRef, useState } from "react";
import CrossIcon from "../icons/CrossIcon";
import Button from "./Button";
import Input from "./Input";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

const CreateContentModal = ({ open, onClose }) => {
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.Youtube);
  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
  }
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
                <Input reference={titleRef} placeHolder={"Title"} />
                <Input reference={linkRef} placeHolder={"Link"} />
              </div>
              <div className="flex justify-center">
                <Button onClick={addContent} text="Submit" variant="primary" />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateContentModal;
