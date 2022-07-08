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
import TextArea from "../../../../components/ui/text-area/text-are.component";
import LoadingModal from "../../../../modals/loading-modal/loading-modal.component";
import MessageBox from "../../../../components/message-box/message-box.component";

const SectionMail: React.FC = () => {
   const {selectedLanguage} = useContext(CurrentLanguageContext);
   const sectionInfo = availableSections.find(item => item.sectionId === "section-mail");
   const {
      sectionMailForm,
      errorSectionMailForm,
      handleOnChange,
      handleSubmitForm,
      isLoadingSend,
      isSuccessSend,
      isErrorSend,
      isSubmitButtonDisabled
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
                     isSuccessSend || isErrorSend ?
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
                                 :// error while sending
                                    selectedLanguage === "PL" ?
                                       "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później albo wyślij wiadomość ze swojej poczty internetowej."
                                    : selectedLanguage === "GB" ?
                                       "An error occurred while sending the message. Try again later or send the message from your webmail."
                                    : selectedLanguage === "DE" ?
                                       "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal oder senden Sie die Nachricht über Ihr Webmail."
                                    ://UA
                                       "Під час надсилання повідомлення сталася помилка. Повторіть спробу пізніше або надішліть повідомлення зі своєї інтернет-пошти."
                              }
                              isError={isErrorSend}
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