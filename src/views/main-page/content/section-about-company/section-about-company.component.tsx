import React, {useContext} from "react";

// styles
import styles from "./section-about-company.module.scss";

// data
import {availableSections} from "../../../../data/available-sections/available-sections";

// templates
import SectionTemplate from "../../../../templates/section/section.template";

// contexts
import {CurrentLanguageContext} from "../../../../providers/current-language-provider.component";

const SectionAboutCompany: React.FC = () => {
   const {selectedLanguage} = useContext(CurrentLanguageContext);
   const sectionInfo = availableSections.find(item => item.sectionId === "section-about-company");

   return (
      <SectionTemplate
         id={sectionInfo?.sectionId}
         headerMess={
            selectedLanguage === "PL" ?
               sectionInfo?.PLName
            : selectedLanguage === "GB" ?
               sectionInfo?.GBName
            ://DE
               sectionInfo?.DEName
         }
         iconName={"icon-doc-inv"}
      >
        <div className={styles.wrapper}>
            <div className={styles.item}>
               {
                  selectedLanguage === "PL" ?
                     <>
                        <p>Biuro rachunkowe Wiesław Harbuz już od kilku lat istnieje na rynku.</p>
                        <br/>
                        <p>Nasze doświadczenie oraz konkurencyjne ceny świadczonych usług sprawiają, że mamy wielu stałych oraz zadowolonych klientów.</p>
                        <br/>
                        <p>Posiadam wiedzę popartą wieloletnim doświadczeniem zawodowym w pracy w urzędzie skarbowym.</p>
                     </>
                  : selectedLanguage === "GB" ?
                     <>
                        <p>Accounting Office Wiesław Harbuz has been on the market for several years.</p>
                        <br/>
                        <p>Our experience and competitive prices of our services make us have many regular and satisfied customers.</p>
                        <br/>
                        <p>I have knowledge supported by many years of work experience in the tax office.</p>
                     </>
                  ://DE
                     <>
                        <p>Das Buchhaltungsbüro Wiesław Harbuz ist bereits seit mehreren Jahren auf dem Markt.</p>
                        <br/>
                        <p>Dank unserer Erfahrung und der wettbewerbsfähigen Preise unserer Dienstleistungen haben wir viele zufriedene Stammkunden.</p>
                        <br/>
                        <p>Ich verfüge über Kenntnisse, die durch meine langjährige Berufserfahrung in einem Steuerbüro gestützt werden.</p>
                     </>
               }
            </div>
            <div className={styles.item}>
               {
                  selectedLanguage === "PL" ?
                     <>
                        <p className={styles.underline}>Świadczymy następujące usługi:</p>
                        <ul>
                           <li>wypełnianianie deklaracji podatkowych</li>
                           <li>prowadzenie rachunkowości podatkowej</li>
                           <li>pomoc w uzyskaniu zwrotu podatku z tytułu pracy za granicą (w następujących krajach: Niemcy, Belgia, Austria, USA, Holandia, Wielka Brytania, Irlandia, Australia, Dania, Norwegia czy Szwecja)</li>
                           <li>proawdzenie ksiąg przychodów i rozchodów (KPIR)</li>
                           <li>prowadzenie ewidencji ryczałtowych</li>
                           <li>rozliczanie VAT</li>
                           <li>PIT roczny</li>
                           <li>usługi kadrowo-płacowe, ZUS</li>
                           <li>pomoc przy pismach urzędowych i pismach do sądów</li>
                           <li>pomoc przy zakładaniu własnej firmy</li>
                           <li>inne usługi z zakresu rachunkowości i prawa, które można omówić indywidualnie z klientem</li>
                        </ul>
                     </>
                  : selectedLanguage === "GB" ?
                     <>
                        <p>We provide the following services:</p>
                        <ul>
                           <li>filling out tax returns</li>
                           <li>tax accounting</li>
                           <li>assistance in obtaining tax refunds for work abroad (in the following countries: Germany, Belgium, Austria, USA, Netherlands, UK, Ireland, Australia, Denmark, Norway or Sweden)</li>
                           <li>proaward of income and expense books (KPIR)</li>
                           <li>keeping lump sum records</li>
                           <li>VAT accounting</li>
                           <li>annual PIT</li>
                           <li>HR and payroll services, Social Security</li>
                           <li>assistance with official letters and letters to the courts</li>
                           <li>assistance in setting up your own business</li>
                           <li>other accounting and legal services that can be discussed individually with the client</li>
                        </ul>
                     </>
                  ://DE
                     <>
                        <p>Wir bieten die folgenden Dienstleistungen an:</p>
                        <ul>
                           <li>Einreichung von Steuererklärungen</li>
                           <li>Steuerbuchhaltung</li>
                           <li>Unterstützung bei der Erlangung von Steuererstattungen für Arbeit im Ausland (in den folgenden Ländern: Deutschland, Belgien, Österreich, USA, Niederlande, UK, Irland, Australien, Dänemark, Norwegen oder Schweden)</li>
                           <li>Führung eines Einnahmen- und Ausgabenbuchs (KPIR)</li>
                           <li>Führung von Pauschalaufzeichnungen</li>
                           <li>Mehrwertsteuerabrechnung</li>
                           <li>Jährliche PIT</li>
                           <li>Personal- und Gehaltsabrechnungsdienste, Sozialversicherung</li>
                           <li>Unterstützung bei administrativen und gerichtlichen Dokumenten</li>
                           <li>Unterstützung bei der Gründung eines eigenen Unternehmens</li>
                           <li>andere Buchhaltungs- und Rechtsdienstleistungen, die individuell mit dem Kunden besprochen werden können</li>
                        </ul>
                     </>
               }
            </div>
            <div className={styles.item}>
               {
                  selectedLanguage === "PL" ?
                     <>
                        <p>Na terenie miasta Tomaszów Lubelski istnieje mozliwość wykonania usług w domu klienta.</p>
                        <br/>
                        <div className={styles.center}>
                           <p className={styles.italic}>Skorzystaj z usług Biura Rachunkowego Wiesław Harbuz już dziś!</p>
                           <p className={styles.italic}>Pomożemy rzetelnie, fachowo i w przystępnej cenie.</p>
                        </div>
                     </>
                  : selectedLanguage === "GB" ?
                     <>
                        <p>On the territory of the city of Tomaszóww Lubelski it is possible to perform services at the customer's home.</p>
                        <br/>
                        <div className={styles.center}>
                           <p className={styles.italic}>Use the services of Wiesław Harbuz Accounting Office today!</p>
                           <p className={styles.italic}>We will help reliably, professionally and at an affordable price.</p>
                        </div>
                     </>
                  ://DE
                     <>
                        <p>Im Gebiet von Tomaszów Lubelski ist es möglich, die Dienstleistungen in der Wohnung des Kunden zu erbringen.</p>
                        <br/>
                        <div className={styles.center}>
                           <p className={styles.italic}>Nutzen Sie noch heute die Dienstleistungen des Buchhaltungsbüros Wiesław Harbuz!</p>
                           <p className={styles.italic}>Wir helfen Ihnen zuverlässig, professionell und zu einem günstigen Preis.</p>
                        </div>
                     </>
               }
            </div>
        </div>
      </SectionTemplate>
   );
};

export default SectionAboutCompany;