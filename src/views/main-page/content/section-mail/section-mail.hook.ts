import React, {useState, useEffect, useContext} from "react";

// interfaces
import {ISectionMailForm, IErrorSectionMailForm} from "./section-mail.types";

// data
import {initialSectionMailForm, initialErrorSectionMailForm} from "./section-mail.data";

// contexts
import {CurrentLanguageContext} from "../../../../providers/current-language/current-language-provider.component";

const useSectionMail = () => {
   const [sectionMailForm, setSectionMailForm] = useState<ISectionMailForm>(initialSectionMailForm);
   const [inputFilesKey, setInputFilesKey] = useState<string>(Date.now().toString());
   const [errorSectionMailForm, setErrorSectionMailForm] = useState<IErrorSectionMailForm>(initialErrorSectionMailForm);
   const [isLiveValidation, setIsLiveValidation] = useState<boolean>(false);
   const emailRgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   const [isLoadingSend, setIsLoadingSend] = useState<boolean>(false);
   const [isSuccessSend, setIsSuccessSend] = useState<boolean>(false);
   const [isErrorSend, setIsErrorSend] = useState<boolean>(false);
   const [isNotGivenPhoneOrEmail, setIsNotGivenPhoneOrEmail] = useState<boolean>(false);

   const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState<boolean>(false);

   const {selectedLanguage} = useContext(CurrentLanguageContext);

   // Validate data, when the live validation is on (after first attempt to send email)
   useEffect(() => {
      if (isLiveValidation) {
         validateData();
      }
      //console.log(sectionMailForm);
   },[sectionMailForm]);

   // Reset form to initial values after changing the language (it is not required because it is done automatically - don't know why)
   useEffect(() => {
      setSectionMailForm(initialSectionMailForm);
   },[selectedLanguage]);

   const handleOnChange = (name: string, value: string | FileList | null) => {
      setSectionMailForm(prev => ({
         ...prev,
         [name]: value
      }));
      setIsSuccessSend(false);
      setIsErrorSend(false);
      setIsNotGivenPhoneOrEmail(false);
   };

   const handleCheckboxOnChange = (name: string, value: string, checked: boolean) => {
      setSectionMailForm(prev => ({
         ...prev,
         [name]: checked
      }));
   };

   const getEmptyFieldMessage = (): string => {
      let messToRet = "";

      if (selectedLanguage === "PL") {
         messToRet = "Pole jest puste";
      }
      else if (selectedLanguage === "GB") {
         messToRet = "Field is empty";
      }
      else if (selectedLanguage === "DE") {
         messToRet = "Das Feld ist leer";
      }
      else {//UA
         messToRet = "Поле порожнє";
      }

      return messToRet;
   };

   const getTooLongFieldMessage = (): string => {
      let messToRet = "";

      if (selectedLanguage === "PL") {
         messToRet = "Wiadomość jest za długa";
      }
      else if (selectedLanguage === "GB") {
         messToRet = "The message is too long";
      }
      else if (selectedLanguage === "DE") {
         messToRet = "Die Nachricht ist zu lang";
      }
      else {//UA
         messToRet = "Повідомлення занадто довге";
      }

      return messToRet;
   };

   const getTooLongFieldSubject = (): string => {
      let messToRet = "";

      if (selectedLanguage === "PL") {
         messToRet = "Temat jest za długi";
      }
      else if (selectedLanguage === "GB") {
         messToRet = "The topic is too long";
      }
      else if (selectedLanguage === "DE") {
         messToRet = "Das Thema ist zu lang";
      }
      else {//UA
         messToRet = "Тема надто довга";
      }

      return messToRet;
   };

   const getWrongEmailAddress = () => {
      let messToRet = "";

      if (selectedLanguage === "PL") {
         messToRet = "Zły format adresu email";
      }
      else if (selectedLanguage === "GB") {
         messToRet = "Wrong email address format";
      }
      else if (selectedLanguage === "DE") {
         messToRet = "Falsches E-Mail-Adressformat";
      }
      else {//UA
         messToRet = "Неправильний формат електронної адреси";
      }

      return messToRet;
   };

   const getWrongPhoneNumber = () => {
      let messToRet = "";

      if (selectedLanguage === "PL") {
         messToRet = "Numer telefonu zawiera litery";
      }
      else if (selectedLanguage === "GB") {
         messToRet = "The phone number contains the letters";
      }
      else if (selectedLanguage === "DE") {
         messToRet = "Die Rufnummer enthält die Buchstaben";
      }
      else {//UA
         messToRet = "Номер телефону містить букви";
      }

      return messToRet;
   };

   const validateData = ():boolean => {
      let isError = false;
      let isPhoneNumberWrong = false;
      let isEmailAddressWrong = false;

      // The firstName is not required!
      // if (sectionMailForm.firstName.length === 0) {
      //    isError = true;
      //    setErrorSectionMailForm(prev => ({
      //       ...prev,
      //       firstNameErrorMessage: getEmptyFieldMessage()
      //    }));
      // }
      // else {
      //    setErrorSectionMailForm(prev => ({
      //       ...prev,
      //       firstNameErrorMessage: ""
      //    }));
      // }

      // The lastName is not required!
      // if (sectionMailForm.lastName.length === 0) {
      //    isError = true;
      //    setErrorSectionMailForm(prev => ({
      //       ...prev,
      //       lastNameErrorMessage: getEmptyFieldMessage()
      //    }));
      // }
      // else {
      //    setErrorSectionMailForm(prev => ({
      //       ...prev,
      //       lastNameErrorMessage: ""
      //    }));
      // }

      // Check message (min_length=1, max_length=300)
      if (sectionMailForm.message.length === 0) {
         isError = true;
         setErrorSectionMailForm(prev => ({
            ...prev,
            messageErrorMessage: getEmptyFieldMessage()
         }));
      }
      else if (sectionMailForm.message.length > 300) {
         isError = true;
         setErrorSectionMailForm(prev => ({
            ...prev,
            messageErrorMessage: getTooLongFieldMessage()
         }));
      }
      else {
         setErrorSectionMailForm(prev => ({
            ...prev,
            messageErrorMessage: ""
         }));
      }

      // Check subject (min_length=1, max_length=100)
      if (sectionMailForm.subject.length === 0) {
         isError = true;
         setErrorSectionMailForm(prev => ({
            ...prev,
            subjectErrorMessage: getEmptyFieldMessage()
         }));
      }
      else if (sectionMailForm.subject.length > 100) {
         isError = true;
         setErrorSectionMailForm(prev => ({
            ...prev,
            subjectErrorMessage: getTooLongFieldSubject()
         }));
      }
      else {
         setErrorSectionMailForm(prev => ({
            ...prev,
            subjectErrorMessage: ""
         }));
      }

      // Check emailAddress - it isn't required, but when given it has to be proper
      if (sectionMailForm.emailAddress.length > 0) {
         if (!emailRgx.test(sectionMailForm.emailAddress)) {
            isError = true;
            isEmailAddressWrong = true;
            setErrorSectionMailForm(prev => ({
               ...prev,
               emailAddressErrorMessage: getWrongEmailAddress()
            }));
         }
         else {
            setErrorSectionMailForm(prev => ({
               ...prev,
               emailAddressErrorMessage: ""
            }));
         }
      }
      else {
         setErrorSectionMailForm(prev => ({
            ...prev,
            emailAddressErrorMessage: ""
         }));
      }

      // Checking phoneNumber - it isn't required, but when given it can't contain letters
      if (sectionMailForm.phoneNumber.length > 0) {
         if (/[a-zA-Z]/.test(sectionMailForm.phoneNumber)) {
            isError = true;
            isPhoneNumberWrong = true;
            setErrorSectionMailForm(prev => ({
               ...prev,
               phoneNumberErrorMessage: getWrongPhoneNumber()
            }));
         }
         else {
            setErrorSectionMailForm(prev => ({
               ...prev,
               phoneNumberErrorMessage: ""
            }));
         }
      }
      else {
         setErrorSectionMailForm(prev => ({
            ...prev,
            phoneNumberErrorMessage: ""
         }));
      }

      // Check if phoneNumber or emailAddress are blank or aren't valid - one of them has to be given properly
      if (
         (sectionMailForm.phoneNumber.length === 0 && sectionMailForm.emailAddress.length === 0)
         || isEmailAddressWrong
         || isPhoneNumberWrong
      ) {
         isError = true;
         setIsNotGivenPhoneOrEmail(true);
      }

      // Check if 'acceptedConditions' checkbox is checked
      if (!sectionMailForm.acceptedConditions) {
         isError = true;
         setErrorSectionMailForm(prev => ({
            ...prev,
            acceptedConditionsError: true
         }));
      }
      else {
         setErrorSectionMailForm(prev => ({
            ...prev,
            acceptedConditionsError: false
         }));
      }

      return !isError;
   };

   const handleSubmitForm = (e: React.FormEvent) => {
      e.preventDefault();
      setIsLiveValidation(true);

      // Validate data and previous send status
      if (validateData() && !isSubmitButtonDisabled) {
         setIsSuccessSend(false);
         setIsErrorSend(false);
         setIsLoadingSend(true);

         // Fill the "FormData" class object
         const fd = new FormData();
         fd.append("firstName", sectionMailForm.firstName);
         fd.append("lastName", sectionMailForm.lastName);
         fd.append("emailAddress", sectionMailForm.emailAddress);
         fd.append("phoneNumber", sectionMailForm.phoneNumber);
         fd.append("subject", sectionMailForm.subject);
         fd.append("message", sectionMailForm.message);

         // Appending files
         if (sectionMailForm.files) {// !== null
            for (let i=0; i < sectionMailForm.files.length; i++) {
               fd.append("files", sectionMailForm.files[i]);
            }
         }

         // Send email via dedicated API
         // to the local: "http://localhost:3001/send-email"
         // to the deployed api: `${process.env.REACT_APP_SMTP_NODEMAILER_API_URL}/send-email`
         // from: https://stackoverflow.com/questions/47630163/axios-post-request-to-send-form-data
         // Note: Let the browser set "Content-Type" header for itself, since request uses "FormData" class object in body.
         //       Here it sets the "multipart/form-data" with it's boundary, but can be also "application/x-www-form-urlencoded".
         //       If the form has files, better use "multipart/form-data" - then it's better transmission performance.
         fetch(`${process.env.REACT_APP_SMTP_NODEMAILER_API_URL}/send-email`, {
            method: "POST",
            mode: 'cors',
            body: fd
         }).then(async response => {
            //const data = await response.json();

            if(response.ok) {
               //console.log(data);
               setIsSuccessSend(true);
               setIsSubmitButtonDisabled(true);
            }
            else {
               throw new Error();
            }
         }).catch(error => {
            setIsErrorSend(true);
         }).finally(() => {
              setIsLoadingSend(false);
         });

         //console.log("to:", process.env.REACT_APP_SMTP_RECEIVER_EMAIL);
         // usage of smtp.js
         // SMTPService.send({
         //    SecureToken: "x",
         //    To: process.env.SMTP_RECEIVER_EMAIL,
         //    From: sectionMailForm.emailAddress,
         //    Subject: sectionMailForm.subject,
         //    Body: `
         //       <p>
         //          <b>Od: </b>${sectionMailForm.firstName} ${sectionMailForm.lastName}
         //       </p>
         //       <p><b>Email: </b>${sectionMailForm.emailAddress}</p>
         //       <p><b>Telefon: </b>${sectionMailForm.phoneNumber.length > 0 ? sectionMailForm.phoneNumber : "-"}</p>
         //       <p><b>Temat: </b>${sectionMailForm.subject}</p>
         //       <br/>
         //       <p><b>Wiadomość: </b>${sectionMailForm.message}</p>
         //    `
         // }).then(response => {
         //    setIsLoadingSend(false);
         //    if (response.ok) {
         //       console.log('Message sent successfully!');
         //       setIsSuccessSend(true);
         //       setIsSubmitButtonDisabled(true);
         //    }
         //    else {
         //       console.log('Error occurred'); //error.message
         //       setIsErrorSend(true);
         //    }
         // });
      }
   };

   const closePrompts = () => {
      setIsSuccessSend(false);
      setIsErrorSend(false);
   };

   return {
      sectionMailForm,
      errorSectionMailForm,
      handleOnChange,
      handleCheckboxOnChange,
      handleSubmitForm,
      isLoadingSend,
      isSuccessSend,
      isErrorSend,
      isSubmitButtonDisabled,
      closePrompts,
      isNotGivenPhoneOrEmail,
      inputFilesKey,
      setInputFilesKey
   };
};

export default useSectionMail;