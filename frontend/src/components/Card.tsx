import ShareIcon from "../icons/ShareIcon";

const Card = () => {
  return (
    <div>
      <div className=" p-4 bg-white rounded-md border  border-gray-200   max-w-72">
        <div className="flex justify-between">
          <div className="flex items-center text-md">
            <div className="text-gray-500 pr-2">
              <ShareIcon />
            </div>
            Project ideas
          </div>
          <div className="flex items-center">
            <div className="text-gray-500 pr-2">
              <ShareIcon />
            </div>
            <div className="text-gray-500">
              <ShareIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
