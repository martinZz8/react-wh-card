// interface
import {ISectionMailForm, IErrorSectionMailForm} from "./section-mail.types";

export const initialSectionMailForm: ISectionMailForm = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  emailAddress: "",
  message: "",
  subject: "",
  files: null,
  acceptedConditions: false
};

export const initialErrorSectionMailForm: IErrorSectionMailForm = {
  firstNameErrorMessage: "",
  lastNameErrorMessage: "",
  phoneNumberErrorMessage: "",
  emailAddressErrorMessage: "",
  messageErrorMessage: "",
  subjectErrorMessage: "",
  filesErrorMessage: "",
  acceptedConditionsError: false
};
