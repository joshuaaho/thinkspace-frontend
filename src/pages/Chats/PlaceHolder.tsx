import { FaComments } from "react-icons/fa";

const PlaceHolder = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-base-100">
      <div className="text-center space-y-4">
        <FaComments className="w-16 h-16 text-base-content/50 mx-auto" />
        <h3 className="text-xl font-medium text-base-content">No chat selected</h3>
        <p className="text-base-content/70 max-w-sm">
          Select a conversation from the list to start chatting
        </p>
      </div>
    </div>
  );
};

export default PlaceHolder;
