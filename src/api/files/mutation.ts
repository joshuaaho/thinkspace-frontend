import { useMutation } from "@tanstack/react-query";
// import { createS3Url, uploadToS3 } from "@api/files/request";
import { axiosPrivate } from "@api/axios";
import { uploadToS3 } from "@api/files/request";


function useCreateS3UrlMutation() {
  const result = useMutation({
    mutationFn: axiosPrivate.files.handleCreateFileUploadUrl,
  });
  return result;
}

function useUploadToS3Mutation() {
  const result = useMutation({
    mutationFn: uploadToS3,
  });
  return result;
}

export { useCreateS3UrlMutation, useUploadToS3Mutation };
