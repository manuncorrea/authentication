import * as Yup from "yup";
import { SignInFormData } from "..";

import {
  EMAIL_MESSAGE_ERROR,
  REQUIRED_EMAIL_MESSAGE_ERROR,
  REQUIRED_PASSWORD_MESSAGE_ERROR,
} from "../constants";

async function schemeValidationUser(data: SignInFormData) {
  const schema = Yup.object().shape({
    email: Yup.string()
      .required(REQUIRED_EMAIL_MESSAGE_ERROR)
      .email(EMAIL_MESSAGE_ERROR),
    password: Yup.string().required(REQUIRED_PASSWORD_MESSAGE_ERROR),
  });
  await schema.validate(data, {
    abortEarly: false,
  });
}

export default schemeValidationUser;
