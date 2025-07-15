import { FormEvent, useRef } from "react";
import Button from "@common/Button";
import { useFormContext } from "react-hook-form";
import { FormData } from "@pages/CreatePost/Form";

export function TagInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
  
    setValue,
    getValues,
    } = useFormContext<FormData>();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setValue("tags", [...(getValues("tags") || []), inputRef.current?.value || ""]);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex gap-2">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add a tag"
          className="input input-bordered"
        />
        <Button variant="primary" size="sm" type="submit">
          Add
        </Button>
      </div>
    </form>
  );
}
