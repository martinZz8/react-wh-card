import React from "react";

// styles
import styles from "./section-mail.module.scss";

// data
import {availableSections} from "../../../../data/available-sections/available-sections";
import {acceptedFileFormats} from "../../../../data/acceptedFileFormats";

// templates
import SectionTemplate from "../../../../templates/section/section.template";

// hooks
import useSectionMail from "./section-mail.hook";

// components
import Button from "../../../../components/ui/button/button.compont";
import InputField from "../../../../components/ui/input-field/input-field.component";
import TextArea from "../../../../components/ui/text-area/text-area.component";
import LoadingModal from "../../../../modals/loading-modal/loading-modal.component";
import MessageBox from "../../../../components/message-box/message-box.component";
import Checkbox from "../../../../components/ui/checkbox/checkbox.component";
import InputFile from "../../../../components/ui/input-file/input-file.component";

// interfaces
import { IMainPageContent } from "../../../../types/main-page-content.types";

interface ISectionMail {
   pageContent: IMainPageContent;
};

const SectionMail: React.FC<ISectionMail> = ({pageContent}) => {
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
      isNotGivenPhoneOrEmail,
      inputFilesKey,
      setInputFilesKey
   } = useSectionMail();

   return (
      <SectionTemplate
         id={sectionInfo?.sectionId}
         headerMess={pageContent.section_available_sections[sectionInfo?.file_field_name as keyof typeof pageContent.section_available_sections]}
         iconName={"icon-mail-alt"}
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
                        label={pageContent.section_mail.first_name}
                        placeholder={pageContent.section_mail.first_name}
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
                        label={pageContent.section_mail.last_name}
                        placeholder={pageContent.section_mail.last_name}
                        handleOnChange={handleOnChange}
                        isError={errorSectionMailForm.lastNameErrorMessage.length > 0}
                        errorMessage={errorSectionMailForm.lastNameErrorMessage}
                        disabled={isSubmitButtonDisabled}
                     />
                  </div>
               </div>
               <div className={`${styles.row} ${styles.inline}`}>
                  <div className={`${styles.inputWrapper} ${styles.shortVersion}`}>
                     <InputField
                        type={"text"}
                        name={"phoneNumber"}
                        value={sectionMailForm.phoneNumber}
                        label={pageContent.section_mail.phone_number}
                        placeholder={pageContent.section_mail.phone_number}
                        handleOnChange={handleOnChange}
                        isError={errorSectionMailForm.phoneNumberErrorMessage.length > 0}
                        errorMessage={errorSectionMailForm.phoneNumberErrorMessage}
                        disabled={isSubmitButtonDisabled}
                     />
                  </div>
                  <div className={`${styles.inputWrapper} ${styles.shortVersion}`}>
                     <InputField
                        type={"text"}
                        name={"emailAddress"}
                        value={sectionMailForm.emailAddress}
                        label={pageContent.section_mail.email}
                        placeholder={pageContent.section_mail.email}
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
                        label={pageContent.section_mail.topic}
                        placeholder={pageContent.section_mail.topic}
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
                        label={pageContent.section_mail.message}
                        placeholder={pageContent.section_mail.message}
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
                     <InputFile
                        name={"files"}
                        keyVal={inputFilesKey}
                        onDeleteClick={() => {
                           setInputFilesKey(Date.now().toString());
                           handleOnChange("files", null);
                        }}
                        handleOnChange={handleOnChange}
                        label={pageContent.section_mail.select_files}
                        acceptedFileFormats={acceptedFileFormats}
                        multiple
                        isError={errorSectionMailForm.filesErrorMessage.length > 0}
                        errorMessage={errorSectionMailForm.filesErrorMessage}
                        disabled={isSubmitButtonDisabled}
                     />
                  </div>
               </div>
               <div className={styles.row}>
                  <div className={styles.conditionsInfoCheckboxWrapper}>
                     <Checkbox
                        name={"acceptedConditions"}
                        value={"acceptedConditions"}
                        checked={sectionMailForm.acceptedConditions}
                        label={
                           <>
                              {pageContent.section_mail.consent_to_data_processing.desc1}
                              <br/>
                              {pageContent.section_mail.consent_to_data_processing.desc2}
                              <br/>
                              {pageContent.section_mail.consent_to_data_processing.desc3}
                              <br/>
                              {pageContent.section_mail.consent_to_data_processing.desc4_1}<b>{pageContent.section_mail.consent_to_data_processing.desc4_2}</b>{pageContent.section_mail.consent_to_data_processing.desc4_3}
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
                        title={pageContent.section_mail.send}
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
                                    pageContent.section_mail.successfull_send_message
                                 : isErrorSend ?
                                    pageContent.section_mail.error_send_message
                                 ://isNotGivenPhoneOrEmail
                                    pageContent.section_mail.needed_phone_number_or_email_message
                              }
                              isError={isErrorSend || isNotGivenPhoneOrEmail}
                              onCloseClick={
                                 (isSuccessSend || isErrorSend) ? closePrompts : undefined
                              }
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
                        message={pageContent.section_mail.sending_message}
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