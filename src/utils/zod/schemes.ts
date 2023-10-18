import { z } from "zod";
import "../../i18n";
import i18n from "../../i18n";

const isRequired = i18n.t("zod.required");

export const EmailSchema = z.object({
  email: z.string().email(`Email ${isRequired}.`),
  password: z
    .string({ required_error: `Password ${isRequired}.` })
    .nonempty(`Password ${isRequired}.`)
    .min(6, `Password ${i18n.t("zod.min", { qty: 6 })}`)
    .max(15, `Password ${i18n.t("zod.max", { qty: 15 })}`),
});

export type Email = z.infer<typeof EmailSchema>;
