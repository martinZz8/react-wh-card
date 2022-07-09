import React, {useState, useEffect, useContext} from "react";

// interfaces
import {ISectionMailForm, IErrorSectionMailForm} from "./section-mail.types";

// data
import {initialSectionMailForm, initialErrorSectionMailForm} from "./section-mail.data";

// contexts
import {CurrentLanguageContext} from "../../../../providers/current-language-provider.component";

const useSectionMail = () => {
   const [sectionMailForm, setSectionMailForm] = useState<ISectionMailForm>(initialSectionMailForm);
   const [errorSectionMailForm, setErrorSectionMailForm] = useState<IErrorSectionMailForm>(initialErrorSectionMailForm);
   const [isLiveValidation, setIsLiveValidation] = useState<boolean>(false);
   const emailRgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   const [isLoadingSend, setIsLoadingSend] = useState<boolean>(false);
   const [isSuccessSend, setIsSuccessSend] = useState<boolean>(false);
   const [isErrorSend, setIsErrorSend] = useState<boolean>(false);

   const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState<boolean>(false);

   const {selectedLanguage} = useContext(CurrentLanguageContext);

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

   const handleOnChange = (name: string, value: string) => {
      setSectionMailForm(prev => ({
         ...prev,
         [name]: value
      }));
      setIsSuccessSend(false);
      setIsErrorSend(false);
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

      if (sectionMailForm.firstName.length === 0) {
         isError = true;
         setErrorSectionMailForm(prev => ({
            ...prev,
            firstNameErrorMessage: getEmptyFieldMessage()
         }));
      }
      else {
         setErrorSectionMailForm(prev => ({
            ...prev,
            firstNameErrorMessage: ""
         }));
      }

      if (sectionMailForm.lastName.length === 0) {
         isError = true;
         setErrorSectionMailForm(prev => ({
            ...prev,
            lastNameErrorMessage: getEmptyFieldMessage()
         }));
      }
      else {
         setErrorSectionMailForm(prev => ({
            ...prev,
            lastNameErrorMessage: ""
         }));
      }

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

      if (!emailRgx.test(sectionMailForm.emailAddress)) {
         isError = true;
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

      // checking phone only if contains letters
      if (sectionMailForm.phoneNumber.length > 0) {
         if (/[a-zA-Z]/.test(sectionMailForm.phoneNumber)) {
            isError = true;
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

      return !isError;
   };

   const handleSubmitForm = (e: React.FormEvent) => {
      e.preventDefault();
      setIsLiveValidation(true);

      if (validateData()) {
         setIsSuccessSend(false);
         setIsErrorSend(false);
         setIsLoadingSend(true);

         // to the local: "http://localhost:3001/send-email"
         // to the deployed api: `${process.env.REACT_APP_SMTP_NODEMAILER_API_URL}/send-mail`
         fetch(`${process.env.REACT_APP_SMTP_NODEMAILER_API_URL}/send-email`, {
            method: "POST",
            mode: 'cors',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               firstName: sectionMailForm.firstName,
               lastName: sectionMailForm.lastName,
               emailAddress: sectionMailForm.emailAddress,
               phoneNumber: sectionMailForm.phoneNumber,
               subject: sectionMailForm.subject,
               message: sectionMailForm.message
            })
         }).then(async response => {
            setIsLoadingSend(false);
            let data = await response.json();

            if(response.ok) {
               console.log(data);
               setIsSuccessSend(true);
               setIsSubmitButtonDisabled(true);
            }
            else {
               console.log(data);
               setIsErrorSend(true);
            }
         }).catch(error => {
            setIsLoadingSend(false);
            setIsErrorSend(true);
            console.log(error);
         });

         //console.log("to:", process.env.REACT_APP_SMTP_RECEIVER_EMAIL);
         // usage of smtp.js
         // SMTPService.send({
         //    SecureToken: "34fcff7b-0d64-4fcc-ac1a-116b36d80e6d",
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
         /*
         const nodemailer = require("nodemailer");

         let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_SECURE, // true for 465, false for other ports
            auth: {
               user: process.env.SMTP_USER_EMAIL, // generated ethereal user
               pass: process.env.SMTP_USER_PASSWORD, // generated ethereal password
            },
         });

         transporter.sendMail({
            from: sectionMailForm.emailAddress, // sender address
            to: process.env.SMTP_RECEIVER_EMAIL, // list of receivers
            subject: sectionMailForm.subject, // Subject line
            //text: ...,
            html: `
               <p>
                  <b>Od: </b>${sectionMailForm.firstName} ${sectionMailForm.lastName}
               </p>
               <p><b>Email: </b>${sectionMailForm.emailAddress}</p>
               <p><b>Telefon: </b>${sectionMailForm.phoneNumber.length > 0 ? sectionMailForm.phoneNumber : "-"}</p>
               <p><b>Temat: </b>${sectionMailForm.subject}</p>
               <br/>
               <p><b>Wiadomość: </b>${sectionMailForm.message}</p>
            `, // html body
         }, (error: any, info: any) => {
            if (error) {
               console.log('Error occurred'); //error.message
               setIsErrorSend(true);
            }

            console.log('Message sent successfully!');
            setIsSuccessSend(true);
            setIsSubmitButtonDisabled(true);
            setIsLoadingSend(false);
            //console.log(nodemailer.getTestMessageUrl(info));

         });
          */
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
      handleSubmitForm,
      isLoadingSend,
      isSuccessSend,
      isErrorSend,
      isSubmitButtonDisabled,
      closePrompts
   };
};

export default useSectionMail;