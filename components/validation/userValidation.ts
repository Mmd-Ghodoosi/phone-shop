import * as Yup from "yup";

export const userSignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("آدرس ایمیل معتبر نیست")
    .required("آدرس ایمیل الزامی می باشد"),
  password: Yup.string()
    .min(4, "رمز عبور حداقل باید چهار کاراکتر باشد")
    .max(8, "رمز عبور حداکثر باید هشت کاراکتر باشد")
    .required(" رمز عبور الزامی می باشد"),
});
export const userSigninSchema = Yup.object().shape({
  email: Yup.string()
    .email("آدرس ایمیل معتبر نیست")
    .required("آدرس ایمیل الزامی می باشد"),
  password: Yup.string()
    .min(4, "رمز عبور حداقل باید چهار کاراکتر باشد")
    .max(8, "رمز عبور حداکثر باید هشت کاراکتر باشد")
    .required(" رمز عبور الزامی می باشد"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "رمز عبور باید یکسان باشد")
    .required("تکرار رمز عبور الزامیست"),
});
