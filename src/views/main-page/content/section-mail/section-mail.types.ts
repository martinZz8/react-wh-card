export interface ISectionMailForm {
   firstName: string;
   lastName: string;
   phoneNumber: string;
   emailAddress: string;
   message: string;
   subject: string;
   acceptedConditions: boolean;
}

export interface IErrorSectionMailForm {
   firstNameErrorMessage: string;
   lastNameErrorMessage: string;
   phoneNumberErrorMessage: string;
   emailAddressErrorMessage: string;
   messageErrorMessage: string;
   subjectErrorMessage: string;
   acceptedConditionsError: boolean;
}
