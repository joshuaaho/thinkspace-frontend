import { FieldError, Merge } from "react-hook-form";



const transformFieldErrorToString = (error: Merge<FieldError, (FieldError | undefined)[]>): string => {
  
  if (Array.isArray(error)) {
    return error
      .filter((err): err is FieldError => err !== undefined)
      .map(err => err.message)
      .join(", ");
  }
  
  return error.message || "";
};

export default transformFieldErrorToString;