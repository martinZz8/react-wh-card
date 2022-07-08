// interface
import {ISectionMailForm, IErrorSectionMailForm} from "./section-mail.types";

export const initialSectionMailForm: ISectionMailForm = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  emailAddress: "",
  message: "",
  subject: ""
};

export const initialErrorSectionMailForm: IErrorSectionMailForm = {
  firstNameErrorMessage: "",
  lastNameErrorMessage: "",
  phoneNumberErrorMessage: "",
  emailAddressErrorMessage: "",
  messageErrorMessage: "",
  subjectErrorMessage: ""
};
