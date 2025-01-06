import CrossIcon from "../icons/CrossIcon";

const CreateContentModal = ({ open, onClose }) => {
  return (
    <div className="">
      {open && (
        <div className="w-screen fixed h-screen bg-slate-500 top-0 left-0 bg-opacity-60 flex justify-center items-center">
          <div className=" flex-col flex justify-center bg-white rounded">
            <span className="bg-white rounded opacity-100  p-4">
              <div className="flex justify-end">
                <CrossIcon />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateContentModal;
