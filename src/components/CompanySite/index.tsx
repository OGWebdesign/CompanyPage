import { EmployeeCard } from "../EmployeeCard";
import { LargeCard } from "../LargeCard";
import { ParagraphOG } from "../ParagraphOG";
import { ParagraphOGLeft } from "../ParagraphOGLeft";

export const CompanySite = () => {
  return (
    <div className="animate-fadeIn">
      <ParagraphOG
        classnamehead="inline-block bg-[#98f144] text-[#151515]"
        text="Willkommen auf unserer Demo-Webseite! Wir sind stolz darauf, Ihnen unsere Dienstleistungen und Produkte vorzustellen, die auf höchsten Standards basieren. Unser Team aus erfahrenen Fachleuten ist stets bestrebt, Ihnen innovative und maßgeschneiderte Lösungen anzubieten.
            Unsere Mission ist es, durch erstklassigen Service und hochwertige Produkte Mehrwert für unsere Kunden zu schaffen. Wir setzen auf modernste Technologien und kontinuierliche Weiterentwicklung, um Ihre Erwartungen nicht nur zu erfüllen, sondern zu übertreffen."
        head="#Transparenz"
        animation={false}
        classname="text-right justify-end"
      />

      <ParagraphOGLeft
        classnamehead="bg-[#98f144] inline-block text-[#151515] mt-[3rem]"
        text="Unsere oberste Priorität ist es, durch erstklassigen Service und hochwertige Produkte echten Mehrwert für unsere Kunden zu schaffen. Mit einem starken Fokus auf modernste Technologien und kontinuierliche Verbesserung, streben wir danach, Ihre Erwartungen nicht nur zu erfüllen, sondern zu übertreffen. Von umfassender Beratung über innovative technologische Lösungen bis hin zu zuverlässigem Support bieten wir Ihnen alles aus einer Hand. Unser Ziel ist es, Ihre Projekte erfolgreich und effizient zu realisieren."
        head="#Motivation"
        animation={false}
      />

      <EmployeeCard />
      <LargeCard
        head1style="text-[#98f144] mt-10"
        head2style="text-[#98f144] mt-10"
        text1Style="text-[#b9b9b9]"
        text2Style="text-[#b9b9b9]"
        head2="Innovativ"
        head1="Since XXYY"
        text2="Seit unserer Gründung im Jahr XXYY setzen wir neue Maßstäbe in der Welt. Mit einer unermüdlichen Leidenschaft für unsere Tätigkeit entwickeln wir maßgeschneiderte Lösungen, die Ihre Visionen Wirklichkeit werden lassen. Für unser Spezialgebiet sind wir Ihr Partner für Innovation. Erleben Sie die Zukunft mit uns."
        text1="Seit XXYY verfolgen wir unsere Vision, die Welt zu revolutionieren. Seit unserer Gründung arbeiten wir daran innovative und maßgeschneiderte Lösungen im unserem Bereich zu bieten. Unser Ziel ist es, Ideen in die Realität umzusetzen und unseren Kunden dabei zu helfen, ihre Ziele zu erreichen."
      ></LargeCard>

      <LargeCard
        classname="bg-slate-200 text-[#151515] mt-[3rem]"
        head1="Neue Möglichkeiten erschaffen."
        head2="Neue Standards setzen."
        text1="Neue Möglichkeiten im Musterbereich sind für uns immer eine Herausforderung. Diese Herausforderungen treiben uns an und motivieren uns, neue Wege zu gehen. Der Mut, das Produkt immer weiter zu entwickeln und neue Benutzererfahrungen zu schaffen, bietet Kunden neue Wege."
        text2="Sind wir mit einer Lösung zufrieden, welche nicht optimal ist? Niemals! Denn wir wollen neue Maßstäbe im Bereich Musterfach setzen. Wir wollen die Welt verändern und neue Standards setzen. Wir wollen, dass unsere Kunden die besten Produkte und Dienstleistungen erhalten."
      ></LargeCard>
    </div>
  );
};
