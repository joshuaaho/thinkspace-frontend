export { EditorToolbar } from "./Toolbar";

import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useFormContext } from "react-hook-form";
import { EditorToolbar } from "./Toolbar";
import Placeholder from "@tiptap/extension-placeholder";
import "./placeholder.css";
const Editor = () => {
  const { setValue, getValues } = useFormContext();

  return (
    <EditorProvider
      slotBefore={<EditorToolbar />}
      content={getValues("content")}
      extensions={[
        StarterKit,
        Placeholder.configure({
          placeholder: "Start writing your post here...",
        }),
      ]}
      editorProps={{
        attributes: {
          class:
            "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none w-full h-[600px] mx-auto border border-base-300 rounded-lg overflow-hidden shadow-lg bg-base-100 hover:border-neutral transition-colors p-6",
        },
      }}
      onUpdate={({ editor }) => {
        setValue("content", editor.getHTML(), { shouldValidate: true });
      }}
    ></EditorProvider>
  );
};

export default Editor;
