<template>
    <div class="root-element content">
        <div class="columns">
            <div class="column is-two-third">
                <img src="../assets/logo-codelab.png" alt="CodeLab Logo">
                <h1>Welkom bij het CodeLab!</h1>

                <p>
                    Dit is het moment op jouw rooster waar jij, samen met de docenten, kan gaan werken aan hobbyprojecten. Je krijgt de mogelijkheid om je te verdiepen in onderwerpen die <em>JIJ</em> interessant vindt!
                </p>
                <p>
                    Ben je nog niet klaar met je huiswerk? Dan is CodeLab het ideale moment om je huiswerk bij te werken. Vervolgens kun je thuis werken aan hobbyprojecten.
                </p>

                <h3 id="samenvatting">Samenvatting</h3>
                <ul>
                    <li>Tijdens CodeLab <em>mag</em> je werken aan alles wat met de opleiding te maken heeft.</li>
                    <li>Je zorgt altijd eerst dat je bij bent bij de lessen. Maak of plan dus eerst je huiswerk.</li>
                    <li>Je <em>moet</em> iedere periode een <router-link :to="{ name: 'Skillkaarten'}">skillkaart</router-link> maken</li>
                    <li>Met een skillkaart oefen je een klein deel van jouw toekomstig beroep.</li>
                    <li>Sommige skillkaarten gaan over de voorbereiding van een project. Andere over het ontwikkelen of het afronden van een project.</li>
                    <li>Feedback vragen en aftekenen doe je met de <a href="static/Aftekenlijst_CodeLab.pdf" target="_blank">aftekenlijst</a>.</li>
                    <li>De aftekenlijst is je bewijs, deze moet je meenemen naar het portfolio voortgangsgesprek(PFVG).</li>
                </ul>

                <h3 id="inleiding">Wat is het CodeLab?</h3>
                <p>
                    Bij veel grote bedrijven krijgen werknemers een aantal uur per week de tijd voor hobbyprojecten. Ze werken aan software die zij zelf interressant vinden. Bedrijven die dit doen zijn bijvoorbeeld Twitter, Google, Facebook en Apple. Bij Google zijn onder andere de volgende projecten ontstaan in deze vrije tijd: Gmail, Google News, AdSense en Cardboard.
                </p>
                <p>
                    Voor een programmeur is het belangrijk dat deze zichzelf blijft ontwikkelen. Er komen namelijk steeds nieuwe technieken uit (ook als je van school bent). Je moet jezelf dus technieken aanleren, ook zonder docenten in de buurt. We willen jullie de ruimte bieden zelf op onderzoek te gaan. Je mag projecten aanpakken die jezelf het leven makkelijker maken. Zelfs waar je wat geld mee kan verdienen of waar je samen met je vrienden mee kan klooien.
                </p>
                <p>
                    Tijdens het CodeLab ben je vrij te werken aan wat jij leuk vindt. Je tikt gelijk onderdelen van jouw opleiding af. Met behulp van de Skillkaarten kun je zien wat je moet doen om bepaalde 'werkprocessen' aan te tonen. Een werkproces is een beschrijving van een proces dat je in jouw beroep moet uitvoeren. Je moet deze zelfde werkprocessen ook op jouw examen aantonen. Oefenen met skillkaarten, betekent dus ook voorbereiden voor je examen.
                </p>
                <h3 id="opdrachten">Waar mag ik aan werken tijdens CodeLab?</h3>
                <p>
                    Je bent vrij aan alles te werken wat met applicatie- en mediaontwikkeling te maken heeft. Dit kan betekenen dat je een website maakt voor jezelf of vrienden of familie. Misschien ontwerp je voor iemand een toffe app. Je kan een game maken zodat jouw vrienden deze kunnen spelen of mogelijk zet je het spel op Steam Greenlight. Een Virtual Reality game zouden wij wel tof vinden! Of misschien oefen jij juist jouw presentatie vaardigheden. Dan kun je producten netjes aan klanten overhandigen!
                </p>
                <h4>Code Lab assigments</h4>
                <p>
                    Het CodeLab heeft voor jou een aantal leuke uitdagende opdrachten in de vorm van  <router-link :to="{ name: 'Codelab_Assignments'}">CodeLab Assignments</router-link>. Dit zijn uitdagingen die je in iedere programmeertaal kan proberen op te lossen.
                    Het maakt dus niet uit wat voor programmeertaal, maar ook niet wat voor platform je de opdrachten in gaat voltooien? Ga je een console app maken? een webapp? winforms? iets anders? helemaal aan jou!
                </p>
                <p>
                    Daarnaast ben je ook vrij jezelf te verdiepen in een of meerdere van de duizenden programmeertalen, frameworks of tools die beschikbaar zijn om het programmeurs makkelijker te maken. Denk aan Javascript, ASP.NET, Java, Git, SVN, Docker, Composer of Node.js...
                </p>
                <p>
                    Misschien verdiep je je wel in rauwe hardware om mee te programmeren, zoals Arduino of met niets meer dan een breadboard en een verzameling aan sensoren, lampjes en kabeltjes.
                </p>
                <p>
                    De keuze is aan jou!
                </p>

                <h3 id="skillkaarten">Hoe kies ik en maak ik skillkaarten?</h3>
                <p>
                    Het makkelijkst is dat je een keer op je gemak de skillkaarten doorleest. Wanneer je aan een project gaat werken kun je een aantal van de skillkaarten die erbij passen gebruiken om jouw werkprocessen aan te tonen. Omdat deze werkprocessen over ons vak gaan, zal je snel zien dat ze aansluiten bij jouw projecten.
                </p>
                <p>
                    Je wordt verwacht minstens 1 skillkaart af te ronden per periode. Wanneer je tijd hebt mag je natuurlijk meer skillkaarten afronden en jezelf op deze manier beter voorbereiden voor je examen.
                </p>
                <p>
                    Bij iedere skillkaart kun je een korte omschrijving van de opdracht, wat voor documenten je zal moeten maken en wat het uiteindelijke resultaat is.
                </p>
                <p>
                    Een skillkaart is eigenlijk een proces van een project dat je extra goed uitwerkt. <strong>Bijvoorbeeld:</strong> je maakt je eigen software (Skillkaart 2.1), en laat het vervolgens testen (Skillkaart 2.2). Of je maakt eerst een ontwerp (Skillkaart 1.3) en gaat daarna programmeren. Je mag voor de skillkaart alle opdrachten gebruiken, behalve het gewone project. Kies een van de <router-link :to="{ name: 'Codelab_Assignments'}">assignments</router-link>, een website die je maakt voor jezelf of voor een opdrachtgever, of een opdracht die je van de docenten krijgt.
                </p>

                <h3 id="beoordeling">Beoordeling</h3>
                <p>
                    Voor de beoordeling van CodeLab zijn de volgende documenten van belang:
                    <ul>
                        <li>Aftekenlijst</li>
                        <li>Takenlijst</li>
                    </ul>
                </p>

                <h4 id="aftekenlijst">Aftekenlijst</h4>
                <p>
                    Als je begint aan een skillkaart, druk je alvast de <a href="static/Aftekenlijst_CodeLab.pdf" target="_blank">aftekenlijst</a> af. Tussendoor moet je om feedback vragen van de docenten. Dan weet je of je goed op weg bent. De docent geeft dat aan op de aftekenlijst. Als je klaar bent en de docent keurt je skillkaart goed, wordt dat onderdaan de lijst afgetekend. De aftekenlijst is het bewijs, die moet je meebrengen naar je PFVG. Het PFVG vind plaats in de Evaluatieweek.
                </p>
                <p>
                    <a href="static/Aftekenlijst_CodeLab.pdf" target="_blank">Download de aftekenlijst.</a>
                </p>

                <h4 id="weekrapportages">Takenlijst</h4>
                <p>
                    Aan het begin van ieder CodeLab moet je een takenlijst vullen. Je haalt deze op bij de docenten. Neem even de tijd om al het huiswerk te verzamelen en bedenk voor jezelf of je daar tijdens CodeLab aan gaat werken. Je mag er altijd voor kiezen om sommige taken later uit te voeren, als je het maar doet.
                </p>
                <p>
                    Schrijf een taak volledig op, zodat je later nog snapt wat de bedoeling was bij die taak. Een voorbeeld van een goede beschrijving voor Programming Basics is:
                </p>
                <blockquote>"Huiswerk 'instructies geven' maken vóór de les van maandag"</blockquote>
                <p>
                    Een taakbeschrijving waar je weinig aan hebt is:
                </p>
                <blockquote>"huiswerk"</blockquote>

                <h3 id="leenmateriaal">Leenmateriaal</h3>
                <p>
                    Moet je iets nieuws leren voor jouw project? Leen een boek bij ons of maak gebruik van ons materiaal. In overleg met een docent kun je deze materialen tot je beschikking krijgen.
                </p>
                <h5 id="apparatuur">Apparatuur</h5>
                <ul>
                    <li>Virtual Reality PC: Oculus Rift</li>
                    <li>Virtual Reality PC: HTC Vive</li>
                    <li>Virtual Reality PC: HoloLens</li>
                    <li>4x Zumo Robot for Arduino</li>
                    <li>Raspberry Pi</li>
                    <li>2x iMac</li>
                </ul>
                <h5 id="literatuur">Literatuur</h5>
                <ul>
                    <li>Anti Patterns <em>[door: William J. Brown, Raphael C. Malveau, Hays W. "Skip" McCormick III &amp; Thomas J. Mowbray]</em></li>
                    <li>Basiscursus JavaScript 1.5 <em>[door: Peter Kassenaar]</em></li>
                    <li>Basishandleiding Google in één oogopslag <em>[door: Bert van Aalten]</em></li>
                    <li>Beginning C++ Through Game Programming (incl. CD) <em>[door: Michael Dawson]</em></li>
                    <li>Game Architecture and Design - A new edition <em>[door: Andrew Rollings &amp; Dave Morris]</em></li>
                    <li>Goochelen met Google <em>[door: Dirk de Grooff]</em></li>
                    <li>Head First C# <em>[door: Andrew Stellman &amp; Jennifer Greene]</em></li>
                    <li>Head First Object-Oriented Analysis &amp; Design <em>[door: Brett D. McLaughlin, Gary Pollice &amp; David West]</em></li>
                    <li>HTML &amp; CSS <em>[door: Jon Duckett]</em></li>
                    <li>Mathematics for 3D Game Programming &amp; Computer Graphics <em>[door: Eric Lengyel]</em></li>
                    <li>PHP 5 <em>[door: Ward van der Put]</em></li>
                    <li>Step by step Access 2 NL/Windows <em>[door: Kluwer Bedrijfswetenschappen]</em></li>
                    <li>Step by step Microsoft Visual C# 2012 <em>[door: John Sharp]</em></li>
                    <li>Verder met internet <em>[door:	Bob van Duuren]</em></li>
                    <li>Werken met MSDOS <em>[door: Van Wolverton]</em></li>
                    <li>Windows XP Grand Cru - SP2 editie <em>[door: John Levine &amp; Margaret Levine Young]</em></li>
                </ul>

                <h4 id="procedure">Procedure</h4>
                <p>
                    Je mag uit het magazijn producten lenen of gebruiken tijdens het CodeLab. De procedure hiervoor is als volgt:
                </p>
                <p>
                    <ol>
                        <li>Stap naar een docent en vertel wat je wilt lenen</li>
                        <li>De docent noteert het product, jouw naam en neemt jouw <strong>schoolpas</strong> in</li>
                        <li>Je kans tijdens CodeLab nu zelf het product gebruiken, wees er voorzichtig mee!</li>
                        <li>Aan het einde van het CodeLab lever je het product in bij de docent</li>
                        <li>De docent noteert dat jij het product hebt ingeleverd en geeft je <strong>schoolpas</strong> terug.</li>
                    </ol>
                </p>
            </div>

            <div class="column is-one-third">
                <aside class="toc">
                    <h2>Inhoudsopgave</h2>
                    <ul class="toc-list">
                        <li><a href="#samenvatting">Samenvatting</a></li>
                        <li><a href="#inleiding">Wat is het CodeLab?</a></li>
                        <li><a href="#opdrachten">Waar mag ik aan werken tijdens CodeLab?</a></li>
                        <li><a href="#skillkaarten">Hoe kies ik en maak ik skillkaarten?</a></li>
                        <li><a href="#beoordeling">Beoordeling</a>
                            <ul>
                              <li><a href="#aftekenlijst">Aftekenlijst</a></li>
                              <li><a href="#Takenlijst">Takenlijst</a></li>
                            </ul>
                        </li>
                        <li> <a href="#leenmateriaal">Leenmateriaal</a>
                            <ul>
                              <li><a href="#apparatuur">Apparatuur</a></li>
                              <li><a href="#literatuur">Literatuur</a></li>
                              <li><a href="#procedure">Procedure</a></li>
                            </ul>
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
    a {
        color: #004FFF;
    }

    h1, h2 {
        border-bottom: 1px solid #dbdbdb;
        padding-bottom: 15px;
        color: #004FFF !important;
    }

    h3 {
        border-left: 5px solid black;
        padding-left: 5px;
        color: #004FFF !important;
    }

    h4 {
        color: #004FFF !important;
    }

    .toc {
        background: #f4f4f4;
        padding: 25px;
        position: fixed;
    }

</style>