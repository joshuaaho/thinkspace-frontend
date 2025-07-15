import EditFormProvider from "@pages/PostDetails/Details/Comments/Action/Edit/EditFormProvider";
import Edit from "@pages/PostDetails/Details/Comments/Action/Edit/Edit";
import Cancel from "@pages/PostDetails/Details/Comments/Action/Edit/Cancel";
import CommentInput from "@pages/PostDetails/Details/CommentInput";


const EditForm = () => {
  return (
    <EditFormProvider>
      <div className="flex flex-col gap-2 max-w-5xl mx-auto mb-4 w-full">
        <CommentInput placeholder="Edit to comment..." />
        <div className="flex justify-end gap-2">
          <Cancel />
          <Edit />
        </div>
      </div>
    </EditFormProvider>
  );
};

export default EditForm;
