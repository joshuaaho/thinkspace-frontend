import { useForm, FormProvider } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCommentContext } from '@common/CommentCard';

const editCommentSchema = z.object({
  content: z.string().min(3, { message: "Comment must be at least 3 characters" }).max(500, {
    message: "Comment must be less than 500 characters",
  }),
});
export type FormData = z.infer<typeof editCommentSchema>;

interface UseCommentFormProps {
  children: React.ReactNode;
}
const UseCommentForm = ({ children }: UseCommentFormProps) => {
    const { comment } = useCommentContext();
  const methods = useForm<FormData>({
      resolver: zodResolver(editCommentSchema),
      defaultValues: {
        content: comment.content,
      },
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};
export default UseCommentForm;
