import { Heading } from "../Heading"
import { PrivacyParagraph } from "../PrivacyParagraph"

export const Privacy = () => {
    return (


        <div className="w-full flex flex-col justify-center items-center mt-[10%] max-w-[100rem]">
            <div className="w-3/4">
            <Heading heading="Datenschutzrichtlinie" headstyle="text-[#151515] bg-[#98f144]" />
            <PrivacyParagraph
                headline="Allgemeine Informationen"
                text="Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. 
            Ausführliche Informationen zum Thema Datenschutz finden Sie in unserer unter diesem Text aufgeführten Datenschutzerklärung. Symbol „Von der Community überprüft“"
                withHead={true}
            ></PrivacyParagraph>







            <p className="font-mono text-[#98f144]  font-semibold p-10 text-[1.5rem]">Datenerfassung auf unserer Website</p>
            <PrivacyParagraph
                headline="Wer ist für die Datenerfassung auf dieser Website verantwortlich?"
                text="Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen."
                withHead={true}
            ></PrivacyParagraph>


            <PrivacyParagraph
                headline="Wie erfassen wir Ihre Daten?"
                text="Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich beispielsweise um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. 
                Dabei handelt es sich vor allem um technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten."
                withHead={true}
            ></PrivacyParagraph>



            <PrivacyParagraph
                headline="Welche Rechte haben Sie bezüglich Ihrer Daten?"
                text="Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens genutzt werden."
                withHead={true}
            ></PrivacyParagraph>


            <PrivacyParagraph
                headline=""
                text="Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. 
                Sie haben außerdem das Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. 
                Sie haben außerdem das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen."
                withHead={true}
            ></PrivacyParagraph>



            <p className="font-mono text-[#98f144]  font-semibold p-10 text-[1.5rem]">Allgemeine und verpflichtende Informationen</p>
            <PrivacyParagraph
                headline="Privatsphäre"
                text="Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                Bei der Nutzung dieser Website werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Diese Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie verwenden. Außerdem wird erläutert, wie und zu welchem ​​Zweck dies geschieht.
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein vollständiger Schutz der Daten vor dem Zugriff Dritter ist nicht möglich."
                withHead={true}
            ></PrivacyParagraph>


            <PrivacyParagraph
                headline="Hinweis zur verantwortlichen Stelle"
                text="Verantwortlicher für die Datenverarbeitung auf dieser Website ist: Maximilian Gorn und Nils Ole Otto mit der Firma OG Webdesign. Alle wichtigen Kontaktdaten finden Sie im Impressum. Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet."
                withHead={true}
            ></PrivacyParagraph>


            <PrivacyParagraph
                headline="Widerruf Ihrer Einwilligung zur Datenverarbeitung"
                text="Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können Ihre Einwilligung jederzeit widerrufen. Hierzu genügt eine formlose E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt."
                withHead={true}
            ></PrivacyParagraph>

            <PrivacyParagraph
                headline=""
                text="Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder zur Erfüllung eines Vertrags automatisch verarbeiten, in einem gängigen, maschinenlesbaren Format an sich oder an einen Dritten aushändigen zu lassen. Wenn Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist."
                withHead={true}
            ></PrivacyParagraph>


            <PrivacyParagraph
                headline="SSL- oder TLS-Verschlüsselung"
                text="Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, nutzt diese Seite eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                Wenn die SSL- oder TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden."
                withHead={true}
            ></PrivacyParagraph>


            <PrivacyParagraph
                headline="Verschlüsselte Zahlungsabwicklung auf dieser Website"
                text="Wenn Sie nach dem Abschluss eines kostenpflichtigen Vertrags verpflichtet sind, uns Ihre Zahlungsdaten (z. B. Kontonummer für das Lastschriftverfahren) zu übermitteln, werden diese Daten zur Zahlungsabwicklung benötigt.
                Der Zahlungsverkehr über die gängigen Zahlungsmittel (Visa/MasterCard, Lastschrift) erfolgt ausschließlich über eine verschlüsselte SSL- oder TLS-Verbindung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                Bei aktivierter SSL- oder TLS-Verschlüsselung können die Zahlungsdaten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden."
                withHead={true}
            ></PrivacyParagraph>



            <PrivacyParagraph
                headline="Auskunft, Sperrung, Löschung"
                text="Im Rahmen der geltenden gesetzlichen Bestimmungen haben Sie jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden."
                withHead={true}
            ></PrivacyParagraph>

            <PrivacyParagraph
                headline="Widerspruch gegen Werbe-E-Mails"
                text="Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor."
                withHead={true}
            ></PrivacyParagraph>




            <p className="font-mono text-[#98f144]  font-semibold p-10 text-[1.5rem]">Datenerfassung auf unserer Website</p>
            <PrivacyParagraph
                headline="Cookies"
                text="Einige der Internetseiten verwenden sogenannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
                Die meisten der von uns verwendeten Cookies sind sogenannte „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein."
                withHead={true}
            ></PrivacyParagraph>


            <PrivacyParagraph
                headline="Server-Log-Dateien"
                text="Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                Browsertyp und Browserversion,
                Verwendetes Betriebssystem,
                Referrer URL,
                Hostname des zugreifenden Rechners,
                Uhrzeit der Serveranfrage und
                IP-Adresse.Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet."
                withHead={true}
            ></PrivacyParagraph>

<PrivacyParagraph
    headline="Kontaktformular"
    text="Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Wir werden diese Daten nicht ohne Ihre Einwilligung weitergeben.
    Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
    Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt."
    withHead={true}
></PrivacyParagraph>

<p className="font-mono text-[#98f144]  font-semibold p-10 text-[1.5rem]">Soziale Medien</p>
<PrivacyParagraph
    headline="Social-Media-Plugins mit Shariff"
    text="Unsere Seiten enthalten Social-Media-Plugins (z. B. Facebook, Twitter, Instagram). Sie können die Plugins in der Regel an den jeweiligen Social-Media-Logos erkennen. Um den Datenschutz auf unserer Website zu gewährleisten, verwenden wir diese Plugins nur zusammen mit der sogenannten Shariff-Lösung. Diese Anwendung verhindert, dass die auf unseren Seiten integrierten Plugins schon beim Betreten der Seite Daten an den jeweiligen Anbieter übertragen.
    Erst wenn Sie das jeweilige Plugin durch Klicken auf den entsprechenden Button aktivieren, wird eine direkte Verbindung zum Server des Anbieters hergestellt (Einwilligung). Sobald Sie das Plugin aktivieren, erhält der jeweilige Anbieter die Information, dass Sie mit Ihrer IP-Adresse unsere Seite besucht haben. Wenn Sie gleichzeitig in Ihrem jeweiligen Social-Media-Konto (z. B. Facebook) eingeloggt sind, kann der jeweilige Anbieter den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen.
    Das Aktivieren des Plugins stellt eine Einwilligung im Sinne von Art. 6 Abs. 1 lit. a DSGVO dar. Sie können diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen."
    withHead={true}
></PrivacyParagraph>

<p className="font-mono text-[#98f144]  font-semibold p-10 text-[1.5rem]">Analyse-Tools und Werbung</p>
<PrivacyParagraph
    headline="Google Analytics"
    text="Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
    Google Analytics verwendet sogenannte Cookies. Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse Ihrer Nutzung der Website ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Nutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
    Die Speicherung von Google-Analytics-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse daran, das Nutzerverhalten zu analysieren, um sowohl sein Webangebot als auch seine Werbung zu optimieren."
    withHead={true}
></PrivacyParagraph>

<PrivacyParagraph
    headline="IP-Anonymisierung"
    text="Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übertragung in die USA gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Berichte über die Website-Aktivitäten zusammenzustellen und um weitere mit der Website-Nutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt."
    withHead={true}
></PrivacyParagraph>

<PrivacyParagraph
    headline="Browser-Plugin"
    text="Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht alle Funktionen dieser Website vollumfänglich nutzen können. Sie können auch verhindern, dass Google die durch den Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inklusive Ihrer IP-Adresse) erfasst und diese Daten verarbeitet, indem Sie das Browser-Plugin herunterladen und installieren."
    withHead={true}
></PrivacyParagraph>

<PrivacyParagraph
    headline="Widerspruch gegen Datenerfassung"
    text="Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie gesetzt, das die Erfassung Ihrer Daten bei zukünftigen Besuchen dieser Website verhindert: Google Analytics deaktivieren.
    Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google."
    withHead={true}
></PrivacyParagraph>

<PrivacyParagraph
    headline="Auftragsverarbeitung"
    text="Wir haben mit Google einen Vertrag zur Auftragsverarbeitung abgeschlossen und setzen die strengen Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um."
    withHead={true}
></PrivacyParagraph>

<PrivacyParagraph
    headline="Demografische Merkmale bei Google Analytics"
    text="Diese Website nutzt die Funktion 'demografische Merkmale' von Google Analytics. Dadurch können Berichte erstellt werden, die Informationen zu Alter, Geschlecht und Interessen der Seitenbesucher enthalten. Diese Daten stammen aus interessenbezogener Werbung von Google sowie aus Besucherdaten von Drittanbietern. Diese Daten können keiner bestimmten Person zugeordnet werden. Sie können diese Funktion jederzeit über die Anzeigeneinstellungen in Ihrem Google-Konto deaktivieren oder die Erfassung Ihrer Daten durch Google Analytics generell untersagen, wie im Abschnitt 'Widerspruch gegen Datenerfassung' erläutert."
    withHead={true}
></PrivacyParagraph>

<p className="font-mono text-[#98f144]  font-semibold p-10 text-[1.5rem]">Newsletter</p>
<PrivacyParagraph
    headline="Newsletter-Daten"
    text="Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, die uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis erhoben. Wir verwenden diese Daten ausschließlich für den Versand der angeforderten Informationen und geben sie nicht an Dritte weiter.
    Die Verarbeitung der in das Newsletter-Anmeldeformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters jederzeit widerrufen, etwa über den 'Austragen'-Link im Newsletter. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
    Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter gespeichert und nach der Abbestellung des Newsletters gelöscht. Daten, die zu anderen Zwecken bei uns gespeichert wurden (z. B. E-Mail-Adressen für den Mitgliederbereich), bleiben hiervon unberührt."
    withHead={true}
></PrivacyParagraph>

<p className="font-mono text-[#98f144]  font-semibold p-10 text-[1.5rem]">Plugins und Tools</p>
<PrivacyParagraph
    headline="YouTube"
    text="Unsere Website nutzt Plugins der von Google betriebenen Seite YouTube. Betreiber der Seiten ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
    Wenn Sie eine unserer mit einem YouTube-Plugin ausgestatteten Seiten besuchen, wird eine Verbindung zu den YouTube-Servern hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.
    Wenn Sie in Ihrem YouTube-Konto eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-Konto ausloggen.
    Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
    Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von YouTube."
    withHead={true}
></PrivacyParagraph>

<PrivacyParagraph
    headline="Google Web Fonts"
    text="Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in Ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
    Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Dadurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse unsere Website aufgerufen wurde. Die Nutzung von Google Web Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
    Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.
    Weitere Informationen zu Google Web Fonts finden Sie bei Google."
    withHead={true}
></PrivacyParagraph>

<PrivacyParagraph
    headline="Google Maps"
    text="Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
    Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.
    Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
    Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google."
    withHead={true}
></PrivacyParagraph>

<p className="font-mono text-[#98f144]  font-semibold p-10 text-[1.5rem]">E-Commerce und Zahlungsanbieter</p>
<PrivacyParagraph
    headline="Verarbeiten von Daten (Kunden- und Vertragsdaten)"
    text="Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit sie für die Begründung, inhaltliche Ausgestaltung oder Änderung des Rechtsverhältnisses erforderlich sind (Bestandsdaten). Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet. Personenbezogene Daten über die Inanspruchnahme unserer Internetseiten (Nutzungsdaten) erheben, verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme des Dienstes zu ermöglichen oder abzurechnen.
    Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder Beendigung der Geschäftsbeziehung gelöscht. Gesetzliche Aufbewahrungsfristen bleiben unberührt.
    Datenübermittlung bei Vertragsschluss für Online-Shops, Händler und Warenversand
    Wir übermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der Vertragsabwicklung notwendig ist, zum Beispiel an das mit der Lieferung der Ware betraute Unternehmen oder das mit der Zahlungsabwicklung beauftragte Kreditinstitut. Eine weitergehende Übermittlung..."
    withHead={true}
></PrivacyParagraph>


        </div>
        </div>
    )
}