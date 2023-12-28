import * as Yup from "yup";

export const schema = Yup.object().shape({
  value: Yup.string()
    .min(3, "* Too Short!")
    .max(350, "* Too Long!")
    .required("* Required"),
});
