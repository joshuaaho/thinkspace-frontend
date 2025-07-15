//Prior to TSOA support
// import { axiosPrivate } from "@api/axios";
import axios from "axios";
// import { S3UploadUrl, S3UploadRequest } from "@api/files/types";
import { S3UploadRequest } from "@api/files/types";
// export const createS3Url = async (): Promise<S3UploadUrl> => {
//   const response = await axiosPrivate.post("/files/upload-url");
//   return response.data.uploadUrl;
// };

export const uploadToS3 = async ({
  s3Url,
  file,
}: S3UploadRequest): Promise<string> => {
  const response = await axios.put(s3Url, file, {
    withCredentials: true,
  });
  return response.data;
};
