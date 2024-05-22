import React, {useContext} from "react";

// styles
import styles from "./section-about-company.module.scss";

// data
import {availableSections} from "../../../../data/available-sections/available-sections";

// templates
import SectionTemplate from "../../../../templates/section/section.template";

// contexts
import {CurrentLanguageContext} from "../../../../providers/current-language/current-language-provider.component";

const SectionAboutCompany: React.FC = () => {
   const {selectedLanguage} = useContext(CurrentLanguageContext);
   const sectionInfo = availableSections.find(item => item.sectionId === "section-about-company");

   return (
      <SectionTemplate
         id={sectionInfo?.sectionId}
         headerMess={
            selectedLanguage === "PL" ?
               sectionInfo?.PLName
            : selectedLanguage === "EN" ?
               sectionInfo?.ENName
            : selectedLanguage === "DE" ?
               sectionInfo?.DEName
            ://UA
               sectionInfo?.UAName
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
                  : selectedLanguage === "EN" ?
                     <>
                        <p>Accounting Office Wiesław Harbuz has been on the market for several years.</p>
                        <br/>
                        <p>Our experience and competitive prices of our services make us have many regular and satisfied customers.</p>
                        <br/>
                        <p>I have knowledge supported by many years of work experience in the tax office.</p>
                     </>
                  : selectedLanguage === "DE" ?
                     <>
                        <p>Das Buchhaltungsbüro Wiesław Harbuz ist bereits seit mehreren Jahren auf dem Markt.</p>
                        <br/>
                        <p>Dank unserer Erfahrung und der wettbewerbsfähigen Preise unserer Dienstleistungen haben wir viele zufriedene Stammkunden.</p>
                        <br/>
                        <p>Ich verfüge über Kenntnisse, die durch meine langjährige Berufserfahrung in einem Steuerbüro gestützt werden.</p>
                     </>
                  ://UA
                     <>
                        <p>Бухгалтерська контора Wiesław Harbuz існує на ринку вже кілька років.</p>
                        <br/>
                        <p>Наш досвід і конкурентоспроможні ціни на наші послуги дозволяють нам мати багато постійних і задоволених клієнтів.</p>
                        <br/>
                        <p>Маю знання, підкріплені багаторічним досвідом роботи в податковій інспекції.</p>
                     </>
               }
            </div>
            <div className={styles.item}>
               {
                  selectedLanguage === "PL" ?
                     <>
                        <p className={styles.underline}>Świadczymy następujące usługi:</p>
                        <ul>
                           <li>wypełnianie deklaracji podatkowych</li>
                           <li>prowadzenie rachunkowości podatkowej</li>
                           <li>pomoc w uzyskaniu zwrotu podatku z tytułu pracy za granicą (w następujących krajach: Niemcy, Belgia, Austria, USA, Holandia, Wielka Brytania, Irlandia, Australia, Dania, Norwegia czy Szwecja)</li>
                           <li>prowadzenie ksiąg przychodów i rozchodów (KPIR)</li>
                           <li>prowadzenie ewidencji ryczałtowych</li>
                           <li>rozliczanie VAT</li>
                           <li>PIT roczny</li>
                           <li>usługi kadrowo-płacowe, ZUS</li>
                           <li>pomoc przy pismach urzędowych i pismach do sądów</li>
                           <li>pomoc przy zakładaniu własnej firmy</li>
                           <li>inne usługi z zakresu rachunkowości i prawa, które można omówić indywidualnie z klientem</li>
                        </ul>
                     </>
                  : selectedLanguage === "EN" ?
                     <>
                        <p>We provide the following services:</p>
                        <ul>
                           <li>filling out tax returns</li>
                           <li>tax accounting</li>
                           <li>assistance in obtaining tax refunds for work abroad (in the following countries: Germany, Belgium, Austria, USA, Netherlands, UK, Ireland, Australia, Denmark, Norway or Sweden)</li>
                           <li>management of income and expense books (KPIR)</li>
                           <li>keeping lump sum records</li>
                           <li>VAT accounting</li>
                           <li>annual PIT</li>
                           <li>HR and payroll services, Social Security</li>
                           <li>assistance with official letters and letters to the courts</li>
                           <li>assistance in setting up your own business</li>
                           <li>other accounting and legal services that can be discussed individually with the client</li>
                        </ul>
                     </>
                  : selectedLanguage === "DE" ?
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
                  ://UA
                     <>
                        <p>Ми надаємо наступні послуги:</p>
                        <ul>
                           <li>заповнення податкової звітності</li>
                           <li>податковий облік</li>
                           <li>допомога в отриманні відшкодування податку за роботу за кордоном (в наступних країнах: Німеччина, Бельгія, Австрія, США, Нідерланди, Великобританія, Ірландія, Австралія, Данія, Норвегія або Швеція)</li>
                           <li>ведення книг доходів і витрат (КПІР)</li>
                           <li>ведення обліку одноразових платежів</li>
                           <li>Облік ПДВ</li>
                           <li>річний ПДФО</li>
                           <li>Кадрові та зарплатні послуги, Соціальне забезпечення</li>
                           <li>допомога з офіційними листами та листами до судів</li>
                           <li>допомога у створенні власного бізнесу</li>
                           <li>інші бухгалтерські та юридичні послуги, які обговорюються індивідуально з клієнтом</li>
                        </ul>
                     </>
               }
            </div>
            <div className={styles.item}>
               {
                  selectedLanguage === "PL" ?
                     <>
                        <p>Na terenie miasta Tomaszów Lubelski istnieje możliwość wykonania usług w domu klienta.</p>
                        <br/>
                        <div className={styles.center}>
                           <p className={styles.italic}>Skorzystaj z usług Biura Rachunkowego Wiesław Harbuz już dziś!</p>
                           <p className={styles.italic}>Pomożemy rzetelnie, fachowo i w przystępnej cenie.</p>
                        </div>
                     </>
                  : selectedLanguage === "EN" ?
                     <>
                        <p>On the territory of the city of Tomaszów Lubelski it is possible to perform services at the customer's home.</p>
                        <br/>
                        <div className={styles.center}>
                           <p className={styles.italic}>Use the services of Wiesław Harbuz Accounting Office today!</p>
                           <p className={styles.italic}>We will help reliably, professionally and at an affordable price.</p>
                        </div>
                     </>
                  : selectedLanguage === "DE" ?
                     <>
                        <p>Im Gebiet von Tomaszów Lubelski ist es möglich, die Dienstleistungen in der Wohnung des Kunden zu erbringen.</p>
                        <br/>
                        <div className={styles.center}>
                           <p className={styles.italic}>Nutzen Sie noch heute die Dienstleistungen des Buchhaltungsbüros Wiesław Harbuz!</p>
                           <p className={styles.italic}>Wir helfen Ihnen zuverlässig, professionell und zu einem günstigen Preis.</p>
                        </div>
                     </>
                  ://UA
                     <>
                        <p>У місті Tomaszów Lubelski можливе надання послуг вдома у замовника.</p>
                        <br/>
                        <div className={styles.center}>
                           <p className={styles.italic}>Скористайтеся послугами бухгалтерії Wiesław Harbuz вже сьогодні!</p>
                           <p className={styles.italic}>Ми допоможемо надійно, професійно та за доступною ціною.</p>
                        </div>
                     </>
               }
            </div>
        </div>
      </SectionTemplate>
   );
};

export default SectionAboutCompany;