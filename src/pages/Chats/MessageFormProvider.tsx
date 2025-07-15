import { useForm, FormProvider } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const createMessageSchema = z.object({
  text: z
    .string()
    .min(1, { message: "Message must be at least 1 character" })
    .max(300, {
      message: "Message must be less than 300 characters",
    }),
});
export type FormData = z.infer<typeof createMessageSchema>;

interface UseMessageFormProps {
  children: React.ReactNode;
}
const UseMessageForm = ({ children }: UseMessageFormProps) => {
  const methods = useForm<FormData>({
    resolver: zodResolver(createMessageSchema),
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};
export default UseMessageForm;
