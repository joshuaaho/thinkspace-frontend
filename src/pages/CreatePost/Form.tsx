import { useState, useCallback } from "react";
import { z } from "zod";
import { useDropzone } from "react-dropzone";

import Editor from "@pages/CreatePost/Components/Editor";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Slider from "@pages/CreatePost/Components/Slider";
import SliderPlaceholder from "@pages/CreatePost/Components/SliderPlaceholder";
import { TagInput } from "@pages/CreatePost/Components/TagInput";
import FileUploadStatus from "@pages/CreatePost/Components/FileUploadStatus";
import TitleInput from "@pages/CreatePost/Components/TitleInput";
import SubmitButton from "@pages/CreatePost/Components/SubmitButton";
import TitleError from "@pages/CreatePost/Errors/Title";
import ContentError from "@pages/CreatePost/Errors/Content";
import TagsError from "@pages/CreatePost/Errors/Tags";
import TagList from "@pages/CreatePost/Components/TagList";

const createPostSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters" })
    .max(30, { message: "Title must be at most 30 characters" }),
  tags: z
    .array(
      z
        .string()
        .min(3, { message: "Tag must be at least 3 characters" })
        .max(20, { message: "Tag must be at most 20 characters" })
    )
    .max(5, { message: "You can only add up to 5 tags" })
    .optional(),
  imgUrls: z.array(z.string()).optional(),
  content: z.string(),
});
export type FormData = z.infer<typeof createPostSchema>;

function Form() {
  const [filesToBeUploaded, setFilesToBeUploaded] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFilesToBeUploaded((prev) => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    noClick: false,
    accept: {
      "image/*": [],
    },
  });

  // Form setup
  const methods = useForm<FormData>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      content: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <div className="max-w-3xl mx-auto space-y-10">
        <div>
          <TitleInput />
          <TitleError />
        </div>
        <Editor />
        <ContentError />
        <div
          {...getRootProps()}
          className="relative border-2 border-dashed border-gray-300 rounded-lg min-h-[400px] hover:border-primary transition-colors overflow-visible w-full"
        >
          <input {...getInputProps()} />
          <Slider />
          <SliderPlaceholder />
        </div>
        {filesToBeUploaded.map((file, index) => (
          <FileUploadStatus
            file={file}
            removeStatus={() => {
              setFilesToBeUploaded((prev) =>
                prev.filter((currFile) => currFile.name !== file.name)
              );
            }}
            key={index}
          />
        ))}
        <TagInput />
        <TagsError />
        <TagList />
        <SubmitButton />
      </div>
    </FormProvider>
  );
}
export default Form;
