import React, {useContext} from "react";

// styles
import styles from "./section-mail.module.scss";

// data
import {availableSections} from "../../../../data/available-sections/available-sections";

// templates
import SectionTemplate from "../../../../templates/section/section.template";

// contexts
import {CurrentLanguageContext} from "../../../../providers/current-language-provider.component";

// hooks
import useSectionMail from "./section-mail.hook";

// components
import Button from "../../../../components/ui/button/button.compont";
import InputField from "../../../../components/ui/input-field/input-field.component";
import TextArea from "../../../../components/ui/text-area/text-area.component";
import LoadingModal from "../../../../modals/loading-modal/loading-modal.component";
import MessageBox from "../../../../components/message-box/message-box.component";
import Checkbox from "../../../../components/ui/checkbox/checkbox.component";

const SectionMail: React.FC = () => {
   const {selectedLanguage} = useContext(CurrentLanguageContext);
   const sectionInfo = availableSections.find(item => item.sectionId === "section-mail");
   const {
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
      isNotGivenPhoneOrEmail
   } = useSectionMail();

   return (
      <SectionTemplate
         id={sectionInfo?.sectionId}
         headerMess={
            selectedLanguage === "PL" ?
               sectionInfo?.PLName
            : selectedLanguage === "GB" ?
               sectionInfo?.GBName
            : selectedLanguage === "DE" ?
               sectionInfo?.DEName
            ://UA
               sectionInfo?.UAName
         }
         iconName={"icon-mail"}
      >
         <div className={styles.wrapper}>
            <form
               className={styles.formWrapper}
               onSubmit={handleSubmitForm}
            >
               <div className={`${styles.row} ${styles.inline}`}>
                  <div className={`${styles.inputWrapper} ${styles.shortVersion}`}>
                     <InputField
                        type={"text"}
                        name={"firstName"}
                        value={sectionMailForm.firstName}
                        label={
                           selectedLanguage === "PL" ?
                              "Imię"
                           : selectedLanguage === "GB" ?
                              "First name"
                           : selectedLanguage === "DE" ?
                              "Name"
                           ://UA
                              "назва"
                        }
                        placeholder={
                           selectedLanguage === "PL" ?
                              "Imię"
                           : selectedLanguage === "GB" ?
                              "First name"
                           : selectedLanguage === "DE" ?
                              "Vorname"
                           ://UA
                              "назва"
                        }
                        handleOnChange={handleOnChange}
                        isError={errorSectionMailForm.firstNameErrorMessage.length > 0}
                        errorMessage={errorSectionMailForm.firstNameErrorMessage}
                        disabled={isSubmitButtonDisabled}
                     />
                  </div>
                  <div className={`${styles.inputWrapper} ${styles.shortVersion}`}>
                     <InputField
                        type={"text"}
                        name={"lastName"}
                        value={sectionMailForm.lastName}
                        label={
                           selectedLanguage === "PL" ?
                              "Nazwisko"
                           : selectedLanguage === "GB" ?
                              "Last name"
                           : selectedLanguage === "DE" ?
                              "Zuname"
                           ://UA
                              "прізвище"
                        }
                        placeholder={
                           selectedLanguage === "PL" ?
                              "Nazwisko"
                           : selectedLanguage === "GB" ?
                              "Last name"
                           : selectedLanguage === "DE" ?
                              "Zuname"
                           ://UA
                              "прізвище"
                        }
                        handleOnChange={handleOnChange}
                        isError={errorSectionMailForm.lastNameErrorMessage.length > 0}
                        errorMessage={errorSectionMailForm.lastNameErrorMessage}
                        disabled={isSubmitButtonDisabled}
                     />
                  </div>
               </div>
               <div className={styles.row}>
                  <div className={styles.inputWrapper}>
                     <InputField
                        type={"text"}
                        name={"phoneNumber"}
                        value={sectionMailForm.phoneNumber}
                        label={
                           selectedLanguage === "PL" ?
                              "Numer telefonu"
                           : selectedLanguage === "GB" ?
                              "Phone number"
                           : selectedLanguage === "DE" ?
                              "Rufnummer"
                           ://UA
                              "Телефонний номер"
                        }
                        placeholder={
                           selectedLanguage === "PL" ?
                              "Numer telefonu"
                           : selectedLanguage === "GB" ?
                              "Phone number"
                           : selectedLanguage === "DE" ?
                              "Rufnummer"
                           ://UA
                              "Телефонний номер"
                        }
                        handleOnChange={handleOnChange}
                        isError={errorSectionMailForm.phoneNumberErrorMessage.length > 0}
                        errorMessage={errorSectionMailForm.phoneNumberErrorMessage}
                        disabled={isSubmitButtonDisabled}
                     />
                  </div>
               </div>
               <div className={styles.row}>
                  <div className={styles.inputWrapper}>
                     <InputField
                        type={"text"}
                        name={"emailAddress"}
                        value={sectionMailForm.emailAddress}
                        label={
                           selectedLanguage === "PL" ?
                              "Adres email"
                           : selectedLanguage === "GB" ?
                              "Email address"
                           : selectedLanguage === "DE" ?
                              "E-Mail Adresse"
                           ://UA
                              "електронна пошта"
                        }
                        placeholder={
                           selectedLanguage === "PL" ?
                              "Adres email"
                           : selectedLanguage === "GB" ?
                              "Email address"
                           : selectedLanguage === "DE" ?
                              "E-Mail Adresse"
                           ://UA
                              "електронна пошта"
                        }
                        handleOnChange={handleOnChange}
                        isError={errorSectionMailForm.emailAddressErrorMessage.length > 0}
                        errorMessage={errorSectionMailForm.emailAddressErrorMessage}
                        disabled={isSubmitButtonDisabled}
                     />
                  </div>
               </div>
               <div className={styles.row}>
                  <div className={styles.inputWrapper}>
                     <InputField
                        type={"text"}
                        name={"subject"}
                        value={sectionMailForm.subject}
                        label={
                           selectedLanguage === "PL" ?
                              "Temat"
                           : selectedLanguage === "GB" ?
                              "Topic"
                           : selectedLanguage === "DE" ?
                              "Thema"
                           ://UA
                              "тема"
                        }
                        placeholder={
                           selectedLanguage === "PL" ?
                              "Temat"
                           : selectedLanguage === "GB" ?
                              "Topic"
                           : selectedLanguage === "DE" ?
                              "Thema"
                           ://UA
                              "тема"
                        }
                        handleOnChange={handleOnChange}
                        isError={errorSectionMailForm.subjectErrorMessage.length > 0}
                        errorMessage={errorSectionMailForm.subjectErrorMessage}
                        disabled={isSubmitButtonDisabled}
                        isMandatory
                     />
                  </div>
               </div>
               <div className={styles.row}>
                  <div className={`${styles.inputWrapper} ${styles.textArea}`}>
                     <TextArea
                        name={"message"}
                        value={sectionMailForm.message}
                        label={
                           selectedLanguage === "PL" ?
                              "Wiadomość"
                           : selectedLanguage === "GB" ?
                              "Message"
                           : selectedLanguage === "DE" ?
                              "Nachricht"
                           ://UA
                              "повідомлення"
                        }
                        placeholder={
                           selectedLanguage === "PL" ?
                              "Wiadomość"
                           : selectedLanguage === "GB" ?
                              "Message"
                           : selectedLanguage === "DE" ?
                              "Nachricht"
                           ://UA
                              "повідомлення"
                        }
                        handleOnChange={handleOnChange}
                        isError={errorSectionMailForm.messageErrorMessage.length > 0}
                        errorMessage={errorSectionMailForm.messageErrorMessage}
                        disabled={isSubmitButtonDisabled}
                        isMandatory
                     />
                  </div>
               </div>
               {/*File upload*/}
               <div className={styles.row}>
                  <div className={styles.inputFileWrapper}>
                     {/*   <InputFile*/}
                     {/*      name={"files"}*/}
                     {/*      handleOnChange={handleOnChangeFiles}*/}
                     {/*      label={"testowo"}*/}
                     {/*   />*/}
                  </div>
               </div>
               <div className={styles.row}>
                  <div className={styles.conditionsInfoCheckboxWrapper}>
                     <Checkbox
                        name={"acceptedConditions"}
                        value={"acceptedConditions"}
                        checked={sectionMailForm.acceptedConditions}
                        label={
                           selectedLanguage === "PL" ?
                              <>
                                 Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustawą o ochronie danych osobowych w związku z wysłaniem zapytania przez formularz kontaktowy.
                                 <br/>
                                 Podanie danych jest dobrowolne, ale niezbędne do przetworzenia zapytania.
                                 <br/>
                                 Zostałem poinformowany, że przysługuje mi prawo dostępu do swoich danych, możliwości ich poprawienia, żądania zaprzestania ich przetwarzania.
                                 <br/>
                                 Administratorem danych osobowych jest <b>Biuro rachunkowe Wiesław Harbuz, Polska 22-600 Tomaszów Lubelski ul. Rolicza 10</b>.
                              </>
                           : selectedLanguage === "GB" ?
                              <>
                                 I consent to the processing of personal data in accordance with the Law on Personal Data Protection in connection with sending an inquiry via the contact form.
                                 <br/>
                                 Provision of data is voluntary, but necessary to process the request.
                                 <br/>
                                 I have been informed that I have the right to access my data, the opportunity to correct them, to request the cessation of their processing.
                                 <br/>
                                 The administrator of the personal data is <b>Accounting office Wiesław Harbuz, Poland 22-600 Tomaszów Lubelski Rolicza 10 St</b>.
                              </>
                           : selectedLanguage === "DE" ?
                              <>
                                 Ich stimme der Verarbeitung meiner personenbezogenen Daten im Sinne des Datenschutzgesetzes im Zusammenhang mit dem Absenden einer Anfrage über das Kontaktformular zu.
                                 <br/>
                                 Die Angabe der Daten ist freiwillig, aber für die Bearbeitung der Anfrage erforderlich.
                                 <br/>
                                 Ich wurde darüber informiert, dass ich das Recht habe, auf meine Daten zuzugreifen, sie zu berichtigen und die Beendigung ihrer Verarbeitung zu verlangen.
                                 <br/>
                                 Der für die Verarbeitung der personenbezogenen Daten Verantwortliche ist <b>Rechnungsstelle Wiesław Harbuz, Polen 22-600 Tomaszów Lubelski Rolicza 10 Str</b>.
                              </>
                           ://UA
                              <>
                                 Я даю згоду на обробку персональних даних відповідно до Закону про захист персональних даних у зв'язку з відправленням запиту через контактну форму.
                                 <br/>
                                 Надання даних є добровільним, але необхідним для обробки запиту.
                                 <br/>
                                 Мене повідомили, що я маю право на доступ до своїх даних, можливість їх виправлення та вимагати припинення їх обробки.
                                 <br/>
                                 Розпорядником персональних даних є <b>бухгалтерія Wiesław Harbuz, Польща 22-600 Tomaszów Lubelski вул. Rolicza 10</b>.
                              </>
                        }
                        isError={errorSectionMailForm.acceptedConditionsError}
                        handleOnChange={handleCheckboxOnChange}
                        disabled={isSubmitButtonDisabled}
                     />
                  </div>
               </div>
               <div className={styles.row}>
                  <div className={styles.buttonWrapper}>
                     <Button
                        type={"submit"}
                        title={
                           selectedLanguage === "PL" ?
                              "Wyślij"
                           : selectedLanguage === "GB" ?
                              "Send"
                           : selectedLanguage === "DE" ?
                              "Senden"
                           ://UA
                              "відправити"
                        }
                        fontColor={"black"}
                        backgroundColor={"lemonGreen"}
                        disabled={isSubmitButtonDisabled}
                     />
                  </div>
               </div>
               {/*Return message*/}
               <div className={styles.row}>
                  {
                     isSuccessSend || isErrorSend || isNotGivenPhoneOrEmail ?
                        <div className={styles.messageBoxWrapper}>
                           <MessageBox
                              message={
                                 isSuccessSend ?
                                    selectedLanguage === "PL" ?
                                       "Poprawnie wysłano wiadomość."
                                    : selectedLanguage === "GB" ?
                                       "The message has been sent correctly."
                                    : selectedLanguage === "DE" ?
                                       "Nachricht korrekt gesendet."
                                    ://UA
                                       "Повідомлення надіслано правильно."
                                 : isErrorSend ?
                                    selectedLanguage === "PL" ?
                                       "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później albo wyślij wiadomość ze swojej poczty internetowej."
                                    : selectedLanguage === "GB" ?
                                       "An error occurred while sending the message. Try again later or send the message from your webmail."
                                    : selectedLanguage === "DE" ?
                                       "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal oder senden Sie die Nachricht über Ihr Webmail."
                                    ://UA
                                       "Під час надсилання повідомлення сталася помилка. Повторіть спробу пізніше або надішліть повідомлення зі своєї інтернет-пошти."
                                 ://isNotGivenPhoneOrEmail
                                    selectedLanguage === "PL" ?
                                       "Należy podać numer telefonu bądź adres email w celu dalszego kontaktu."
                                    : selectedLanguage === "GB" ?
                                       "Provide either a phone number or email address for further contact."
                                    : selectedLanguage === "DE" ?
                                       "Bitte geben Sie eine Telefonnummer oder eine E-Mail-Adresse für die weitere Kontaktaufnahme an."
                                    ://UA
                                       "Будь ласка, вкажіть номер телефону або електронну адресу для подальшого зв’язку."
                              }
                              isError={isErrorSend || isNotGivenPhoneOrEmail}
                              onCloseClick={closePrompts}
                              wide
                           />
                        </div>
                     :
                        null
                  }
               </div>
               {/*Loading modal*/}
               {
                  isLoadingSend ?
                     <LoadingModal
                        message={
                           selectedLanguage === "PL" ?
                              "Wysyłanie"
                           : selectedLanguage === "GB" ?
                              "Sending"
                           : selectedLanguage === "DE" ?
                              "Senden"
                           ://UA
                              "відправлення"
                        }
                     />
                  :
                     null
               }
            </form>
         </div>
      </SectionTemplate>
   );
};

export default SectionMail;