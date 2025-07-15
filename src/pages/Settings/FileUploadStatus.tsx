import { useEffect } from "react";
import { useCreateS3UrlMutation, useUploadToS3Mutation } from "@api/files/mutation";
import { useFormContext } from "react-hook-form";
import { FormData } from "@pages/Settings/Form";
import ApiErrorModal from "@common/Modals/ApiErrorModal";

const FileUploadStatus = ({
  file,
  removeStatus,
}: {
  file: File;
  removeStatus: () => void;
}) => {
  const { setValue} = useFormContext<FormData>();
  const { isPending: isCreatingS3Url, mutateAsync: createS3Url,error:createS3UrlError } =
    useCreateS3UrlMutation();
  const { isPending: isUploadingImage, mutateAsync: uploadToS3,error:uploadToS3Error } =
    useUploadToS3Mutation();

  useEffect(() => {
    const upload = async () => {
      const response = await createS3Url({});
      const uploadUrl = response.data.uploadUrl;
      await uploadToS3({
        s3Url: uploadUrl,
        file,
      });
      console.log("uploadUrl",uploadUrl);
      setValue(
        "profileImgUrl",
        (uploadUrl.split("?")[0] as string)
      );

      removeStatus();
    };
    upload();
  }, []);

  return (
    <>
      {createS3UrlError && (
        <ApiErrorModal
          statusCode={(createS3UrlError as any).response.status}
          message={(createS3UrlError as any).response.data.error}
        />
      )}
      {uploadToS3Error && (
        <ApiErrorModal
          statusCode={(uploadToS3Error as any).response.status}
          message="Something went wrong while uploading the image to s3 (External Problem)"
        />
      )}
    <div className="flex items-center gap-2">
      {file.name}
      {(isCreatingS3Url || isUploadingImage) && (
        <span className="loading loading-spinner loading-md"></span>
        )}
      </div>
    </>
  );
};

export default FileUploadStatus;
