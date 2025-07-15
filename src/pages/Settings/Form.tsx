import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FormProvider } from "react-hook-form";
import ProfileImg from "@common/ProfileImage";
import { useState } from "react";
import Button from "@common/Button";
import FileUploadStatus from "@pages/Settings/FileUploadStatus";
import BioInput from "@pages/Settings/Inputs/Bio";
import BioError from "@pages/Settings/Errors/Bio";
import WorkInput from "@pages/Settings/Inputs/Work";
import WorkError from "@pages/Settings/Errors/Work";
import EducationInput from "@pages/Settings/Inputs/Education";
import EducationError from "@pages/Settings/Errors/Education";
import InterestInput from "@pages/Settings/Inputs/Interest";
import InterestError from "@pages/Settings/Errors/Interest";
import LocationInput from "@pages/Settings/Inputs/Location";
import LocationError from "@pages/Settings/Errors/Location";

import Username from "@pages/Settings/Info/Username";
import Email from "@pages/Settings/Info/Email";
import UpdateButton from "@pages/Settings/UpdateButton";
import ThemeInput from "@pages/Settings/Inputs/Theme";
import { User } from "@api/user/types";
import { ThemePreference } from "@api/apiClient";

// Default values may be empty string i.e. "" and empty strings shouldnt be validated against the schema.
// So transform the value to undefined if it is an empty string
const editUserSchema = z.object({
  work: z.preprocess(
    (val) => val || undefined,
    z
      .string()
      .min(3, "Work must be at least 3 characters")
      .max(100, "Work must be at most 100 characters")
      .optional()
  ),
  bio: z.preprocess(
    (val) => val || undefined,
    z
      .string()
      .min(3, "Bio must be at least 3 characters")
      .max(100, "Bio must be at most 100 characters")
      .optional()
  ),
  education: z.preprocess(
    (val) => val || undefined,
    z
      .string()
      .min(3, "Education must be at least 3 characters")
      .max(100, "Education must be at most 100 characters")
      .optional()
  ),
  interest: z.preprocess(
    (val) => val || undefined,
    z
      .string()
      .min(3, "Interest must be at least 3 characters")
      .max(100, "Interest must be at most 100 characters")
      .optional()
  ),
  location: z.preprocess(
    (val) => val || undefined,
    z
      .string()
      .min(3, "Location must be at least 3 characters")
      .max(100, "Location must be at most 100 characters")
      .optional()
  ),
  profileImgUrl: z.string().optional(),
  themePreference: z.nativeEnum(ThemePreference).optional(),
  
});
export type FormData = z.infer<typeof editUserSchema>;

type FormProps = {
  user: User;
};

const Form = ({ user }: FormProps) => {

  const methods = useForm<FormData>({
    resolver: zodResolver(editUserSchema),
    defaultValues: {
      work: user.work,
      bio: user.bio,
      education: user.education,
      interest: user.interest,
      location: user.location,
      profileImgUrl: user.profileImgUrl,
      themePreference: user.themePreference as ThemePreference,
    },
  });

  const [fileToBeUploaded, setFileToBeUploaded] = useState<File>();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFileToBeUploaded(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    noClick: false,
    accept: {
      "image/*": [],
    },
  });

  const profileImgUrl = methods.watch("profileImgUrl");


  return (
    <FormProvider {...methods}>
      <div className="container mx-auto px-2 py-8">
        <div className="flex flex-col gap-20 lg:flex-row lg:gap-0 justify-center ">
          <div className="w-full lg:w-1/5">
            <div className="flex flex-col items-start">
              <div {...getRootProps()} className="cursor-pointer">
                <input {...getInputProps()} />
                <ProfileImg
                  src={profileImgUrl as string}
                  size="2xl"
                  showRing
                />
                <Button className="mt-10">Change Profile Picture</Button>
                {fileToBeUploaded && (
                  <FileUploadStatus
                    file={fileToBeUploaded}
                    removeStatus={() => setFileToBeUploaded(undefined)}
                  />
                )}
              </div>
              <Username username={user.username} />
              <Email email={user.email} />
            </div>
          </div>

          <div className="w-full lg:w-4/5 pl-0 max-w-xl space-y-10">
            <BioInput />
            <BioError />

            <WorkInput />
            <WorkError />

            <EducationInput />
            <EducationError />

            <InterestInput />
            <InterestError />

            <LocationInput />
            <LocationError />
            <ThemeInput />
            <div className="flex justify-end">
              <UpdateButton />
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default Form;
