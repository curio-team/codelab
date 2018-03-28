<template>
  <div class="root-element content">
    <h1> Skillkaarten</h1>
    <div class="boards">
        <div class="columns">
          <div class="column is-3 board" id="b1">
            <div class="box is-gray">
              <div class="head">
                <div class="name">Kerntaak 1</div>
                <h4>B1-K1</h4>

                <p class="sub-title">Levert een bijdrage aan het ontwikkeltraject.</p>


              </div>
              <div class="items">
                <div :key="opdracht.wp" class="box"  id="b1c1" v-if="opdracht.kt == 1" v-for="opdracht in opdrachten">
                  <p>{{opdracht.wp}} <br><span class="title">{{ opdracht.naam }}</span></p>
                  <p class="meta">
                    <button @click="setActive(opdracht)" class="button is-info"> <i class="fa fa-eye"></i> Open Skillkaart  </button>
                  </p>
                </div>
                <div class="add-card">
                 <div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-3 board" id="b2">
          <div class="box is-gray">
            <div class="head">
              <div class="name">Kerntaak 2</div>
              <h4>B1-K2</h4>
              <p class="sub-title">Realiseert en test (onderdelen van) een product.</p>

            </div>
            <div class="items">
              <div class="box" id="b2c1" v-if="opdracht.kt == 2" v-for="opdracht, key in opdrachten">
                  <p>{{opdracht.wp}} <br><span class="title">{{ opdracht.naam }}</span></p>

                  <p class="meta">
                    <button  @click="setActive(opdracht)" class="button is-info"><i class="fa fa-eye"></i> Open Skillkaart  </button>
                  </p>
              </div>
              <div class="add-card">

              </div>
            </div>
          </div>
        </div>
        <div class="column is-3 board" id="b3">
          <div class="box is-gray">
            <div class="head">
              <div class="name">Kerntaak 3</div>
              <h4>B1-K3</h4>
              <p class="sub-title">Levert een product op.</p>

            </div>
            <div class="items">
              <div class="box" id="b3c1"  v-if="opdracht.kt == 3" v-for="opdracht in opdrachten">
                  <p>{{opdracht.wp}} <br><span class="title">{{ opdracht.naam }}</span></p>

                  <p class="meta">
                    <button @click="setActive(opdracht)"  class="button is-info"><i class="fa fa-eye"></i> Open Skillkaart  </button>
                  </p>
              </div>
              <div class="add-card">

              </div>
            </div>
          </div>
        </div>
        <div class="column is-3 board" id="b4">
          <div class="box is-gray">
            <div class="head">
              <div class="name">Profieldeel</div>
              <h4>P1-K1</h4>
              <p class="sub-title">Onderhoudt en beheert de applicatie.</p>
            </div>
            <div class="items">
              <div class="box" id="b4c1" v-if="opdracht.kt == 4" v-for="opdracht in opdrachten">
                  <p>{{opdracht.wp}} <br><span class="title">{{ opdracht.naam }}</span></p>

                  <p class="meta">
                    <button @click="setActive(opdracht)"  class="button is-info"><i class="fa fa-eye"></i> Open Skillkaart  </button>
                  </p>
              </div>
              <div class="add-card">
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="modal" :class="{'is-active' : modalOpen}">
      <div @click="modalOpen = false" class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{activeOpdracht.wp}} - {{ activeOpdracht.naam }} </p>
          <button @click="modalOpen = false" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">

          <h3>Opdracht omschrijving</h3>
          <p v-html="activeOpdracht.beschrijving"></p>


          <h3>Op te leveren documenten</h3>
          <nav class="panel">

            <div v-if="activeOpdracht.oplevering">
              <div v-for="doc in activeOpdracht.oplevering" :key="doc.document" class="panel-block">
                <p @click="doc.clicked = !doc.clicked">
                  <span class="panel-icon">
                    <i class="fa fa-book"></i>
                  </span>
                  <b> {{doc.document}} </b>
                </p>
                <div v-show="doc.clicked">
                  <p v-html="doc.beschrijving"></p>
                </div>
              </div>
            </div>
            <div v-else> Momenteel geen opdrachten beschikbaar </div>
          </nav>

          <h3>Resultaat</h3>
          <p v-html="activeOpdracht.resultaat"> </p>
        </section>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      dClicked: false,
      name: 'Stageopdrachten',
      modalOpen: false,
      opdrachten: [
        {
          kt: 1,
          wp: 'B1-K1-W1',
          naam: 'Stelt de opdracht vast',
          keyword: 'Voorbereiding',
          beschrijving: `Voor deze opdracht ga je komen tot een opdracht om binnen het CodeLab uit te voeren. Om tot een duidelijke afbakening van de opdracht te komen ga je overleggen met een begeleider. Je maakt daarbij notities en/of schetsen, stelt inhoudelijke vragen ter verduidelijking van de opdracht en laat zien dat je meedenkt aan de opdracht door tijdens het gesprek aanvullingen te geven of ideeën op te gooien. Ook ga je zelfstandig op informatie-onderzoek uit naar de te maken opdracht
                        `,
          resultaat: `Het resultaat is een door de CodeLab begeleider goedgekeurde opdracht waarin de beschikbare
                      informatie is verwerkt. Voor het vaststellen
                      van de opdracht is gebruik gemaakt van de <a href="https://nl.wikipedia.org/wiki/MoSCoW-methode"> MoSCoW-methode</a>`,
          oplevering: [
            {
              'clicked': false,
              'document': 'Onderzoeksrapport',
              'beschrijving': `
               Een verslag over wat je hebt gedaan om voorbereid aan de opdracht te beginnen. Met wie heb je gesproken? Wat heb je op het internet gezocht?
               Welke tutorials heb je gevolgd, welke artikelen heb je gelezen? Heb je eerst een kleine omgeving opgezet en getest? hoe heb je dat aangepakt?
               Met welke programma's ga je werken en waarom?
              `
            },
            {
              'clicked': false,
              'document': 'Programma van eisen',
              'beschrijving': `
                Het <a href="https://www.computable.nl/artikel/opinie/ict-branche/5718571/1509029/programma-van-eisen-kent-enkele-basisprincipes.html"> programma van eisen </a>
                is een overzicht van wat de functionaliteiten binnen de applicatie zijn. Dit is vaak een 'officieel' document
                waar een opdrachtgever van te voren voor tekent. Dit zijn de afspraken die je met de opdrachtgever (in dit geval je CodeLab begeleider) hebt gemaakt over
                de functionaliteiten van de applicatie.  Handig is om hierbij gebruik te maken van de <a href="https://nl.wikipedia.org/wiki/MoSCoW-methode"> MoSCoW-methode</a>.
                Wees in het programma van eisen heel duidelijk in het beschrijven van de functionaliteiten. Bijvoorbeeld wie moet wat wel of niet kunnen doen in het systeem?
              `
            }
          ]
        },
        {
          kt: 1,
          wp: 'B1-K1-W2',
          naam: 'Levert een bijdrage aan het projectplan',
          beschrijving: `Je gaat op basis van jouw opdracht de werkzaamheden inventariseren
                        die hierbij horen. Je beschrijft de activiteiten die bij deze opdracht komen kijken
                        en geeft daarbij een zo realistisch mogelijke schatting aan van de duur van deze activiteiten.
                       `,
          resultaat: `Een realistische planning  gebruikmakend van een planningstool zoals Asana,
                      of Microsoft Project, die waar nodig wordt bijgesteld.
                     `,
          oplevering: [
            {
              'clicked': false,
              'document': `Activiteiten planning`,
              'beschrijving': `Maak van de opdracht die je gaat doen een onderverdeling in minimaal 10 (sub)taken. Geef hierbij per item aan:
              <ul>
                <li> titel</li>
                <li> omschrijving </li>
                <li> prioriteit </li>
                <li> opvolging </li>
                <li> geschatte tijdsduur</li>
              </ul>
              Maak screenshots van de gemaakte projectplanning en geef daar waar nodig uitleg bij de gemaakte screenshots.
              `

            }
          ]
        },
        {
          kt: 1,
          wp: 'B1-K1-W3',
          naam: 'Levert een bijdrage aan het ontwerp',
          beschrijving: `In deze opdracht laat je zien dat je een bijdrage kan leveren aan de totstandkoming
                        van het design van een (web)applicatie. Denk hierbij aan het maken van layout
                        prototypes, responsive designs, kleurgebruik, lettertypes.
                        Je kunt echter ook ervoor kiezen om een deel van technische kant van een applicatie
                        te designen. Denk hierbij aan het maken van UML diagrammen (klassendiagram, sequentiediagram)
                        die de interne werking van de applicatie verduidelijkt. Daarnaast kun je ook denken aan
                        een schets voor het structureren van (een deel van) de data in een database, dmv een ERD.
                       `,
          resultaat: `Een product wat laat zien dat je een bijdrage hebt geleverd aan het functioneel of technisch
                      ontwerp van een applicatie. Dit kunnen prototypes zijn, diagrammen, schetsen of moodboards.
                      Deze producten zijn gepresenteerd aan de opdrachtgever of jouw projectteam.`,
          oplevering: [
            {
              'clicked': false,
              'document': 'Functioneel ontwerp',
              'beschrijving': `
                <p> Je gaat voor de te bouwen applicatie een (deel van) een functioneel ontwerp maken. Dit betekent
                dat er verschillende documenten opgeleverd moeten worden die behoren bij een functioneel ontwerp. Een
                functioneel ontwerp zijn alle ontwerpen of diagrammen waarin de functionaliteit van (een deel van) een
                applicatie wordt beschreven. Over het algemeen zijn dit ontwerpen die als discussie materiaal dienen bij
                de communicatie met een opdrachtgever. <p>
                <p> Voor deze opdracht ga je onderstaande onderdelen van een functioneel
                ontwerp uitvoeren. </p>
                <p> Onderdelen van een functioneel ontwerp </p>
                <ul>
                  <li> (digitale) gedetailleerde schetsen/prototypes van de te maken schermen</li>
                  <li> UML Use Case Diagram inclusief Use Case Templates </li>
                </ul>
              `
            },
            {
              'clicked': false,
              'document': `Technisch ontwerp`,
              'beschrijving': `
                <p> Je gaat voor de te bouwen applicatie een (deel van) een technisch ontwerp maken. Voor het maken
                van een technisch ontwerp kun je gebruik maken van onderstaande documenten en diagrammen die het
                technische aspect van de te ontwikkelen applicatie laat zien, zoals hoe de data in de database
                gestructureerd kan gaan worden, welke klassen er ontwikkelt moeten worden of wat de code flow is van
                complexere use-cases. </p>
                <p>
                Deze documenten en diagrammen worden met name gebruikt als leidraad voor de ontwikkelaars om te
                bepalen hoe de applicatie gebouwd gaat worden en worden meestal niet gebruikt om richting de
                opdrachtgever te communiceren, omdat technische kennis voor deze documenten vereist is.
                </p>
                <p> Voor deze opdracht ga je voor de te bouwen applicatie onderstaande onderdelen van een technisch
                ontwerp uitvoeren. </p>
                <ul>
                  <li> Database diagram van de te gebruiken data. </li>
                  <li> (bijgehouden) UML Klassendiagram van de te maken applicatie </li>
                  <li> UML sequentiediagram van één van de use cases binnen het project </li>
                </ul>
              `
            }

          ]
        },
        {
          kt: 1,
          wp: 'B1-K1-W4',
          naam: 'Bereidt de realisatie voor',
          beschrijving: `Je gaat op basis van één van jouw CodeLab projecten na wat je als ontwikkelomgeving
                        nodig denkt te hebben en maak hiervan documentatie. Is het bijvoorbeeld
                        in een wordpress omgeving, geef dan evt aan welke wordpress versie, welke starters thema er gebruikt
                        wordt en welke plugins gebruikt gaan worden. Wordt er gebruik gemaakt van front-end- en/of
                        back-end frameworks? Als je gebruik maakt van een package manager
                        zoals NPM of composer, geef dan aan welke packages en versies er gebruikt worden of
                        maak een goede documentatie in het daarbij behorende config bestand. Geef aan welke
                        softwaretools je nog meer nodig hebt om de opdracht af te ronden, zoals photoshop of
                        een videobewerker. Welke minimale systeemeisen heb je nodig voor de opdracht? Hoe zit het
                        met versiebeheer? ga je een git repository maken? heb je al plannen voor deployment?
                        op welke server gaat de applicatie draaien en wat zijn daar de configuraties van?`,
          resultaat: `Een handleiding voor jezelf en/of eventuele groepsgenoten waarin de benodigdheden
                      voor het bouwen van de applicatie staan gedocumenteerd. Het document is zodanig opgebouwd
                      dat een collega in korte tijd dezelfde ontwikkelomgeving klaar heeft staan, inclusief
                      de juiste configuraties. De vorm hiervan is een word-document zijn of een readme.md bestand waarin
                      stapsgewijs vermeld staat hoe de ontwikkelomgeving ingericht wordt. Hierbij is gebruik van
                      handigheidjes die je eventueel al kent, zoals bijvoorbeeld een goed ingerichte package.json bestand.`,
          oplevering: [
            {
              'clicked': false,
              'document': 'Development requirements',
              'beschrijving':
              `
                Maak een overzicht van alle software en eventuele hardware die gebruikt gaat worden om de applicatie te realiseren. Maak onderscheid
                tussen wat een must is voor de applicatie en wat geadviseerd wordt om mee te werken. Geef per item
                kort een beschrijving mee. Geef ook de versienummers aan van de te gebruiken software. Denk op het gebied van software
                dus ook aan Visual Studio extensies, Javascript/jQuery plugins, frameworks, cms systemen, plugins van cms systemen,
                welke software er gebruikt wordt om designs en diagrammen te gebruiken e.d.
              `
            },
            {
              'clicked': false,
              'document': 'Realiseren ontwikkelomgeving',
              'beschrijving': `
                Je gaat een <a href="https://nl.wikipedia.org/wiki/Procedure"> procedure </a> maken die beschrijft hoe een ontwikkelomgeving ingericht dient te worden. Dit is handig voor als
                een collega developer snel aan de gang kan gaan met het project. Denk bij de procedure ook na over versiebeheer, en wat daarvoor
                lokaal ingesteld moet worden. Geef aan wat en op welke manier de software geïnstalleerd moet worden. Hoe dient de datastructuur lokaal opgezet te worden?
              `
            }
          ]
        },
        {
          kt: 2,
          wp: 'B1-K2-W1',
          naam: 'Realiseert (onderdelen van) een product',
          beschrijving: `
            Je gaat een (onderdeel van een) applicatie ontwikkelen, gebruikmakend van gekregen of onderzochte informatie, zoals
            een interview met klant, of functioneel / technisch ontwerp. Dit kan een uitbreiding van functionaliteiten van een bestaande applicatie
            zijn, of een geheel nieuwe applicatie. Je respecteert daarbij de regels die je hebt geleerd tijdens je opleiding op het gebied
            van het schrijven van code. Er wordt gewerkt met versiebeheer en geregeld worden er commits uitgevoerd. Deze commits zijn
            helder in de beschrijving en dienen zodoende als logboek voor het ontwikkelproces. De programmeertaal, conventies, versiebeheer en ontwikkelplatform worden daarbij in het oog gehouden. Je vraagt hierbij geregeld
            collega's om feedback te geven op je werk. Tijdens de realisatie heb je geregeld contactmomenten met je CodeLab begeleider.
          `,
          resultaat: `
            Een gebouwde (deel van) applicatie, goedgekeurd door jouw CodeLab begeleider en eventueel opdrachtgever. De applicatie hoeft
            nog niet ergens geïmplementeerd te zijn. De code is volgens de normen van de opleiding geschreven
            en goedgekeurd. De applicatie is binnen de gestelde tijd welke vooraf is vastgelegd door jou en jouw CodeLab begeleider, afgerond.
          `,
          oplevering: [
            {
              'clicked': false,
              'document': 'Ontwikkelverslag',
              'beschrijving': `
                Je gaat van (een gedeelte) wat je hebt gebouwd, een verslag maken. Je gaat screenshots maken van de front-end, en screenshots van de opgeleverde
                back-end code maken. Bij deze screenshots geef je duidelijke uitleg over wat er te zien is in de code/screenshots.
                Deze screenshots maak je met name van de opgeleverde stukken waar je trots op bent dat je dit hebt ontwikkeld.
              `
            },
            {
              'clicked': false,
              'document': 'Git Log',
              'beschrijving': `
                Je levert een document op waarin op een mooie overzichtelijke manier jouw commits te zien zijn.
                Daarbij is het belangrijk dat er per commit een datum, duidelijke titel, en eventuele beschrijving te zien is.
                Het resultaat is een logboek van de gemaakte code die jij hebt geschreven. Hierbij is het dus belangrijk dat je
                commit titels heel specifiek zijn voor de veranderingen die je in die commit hebt gedaan.
              `
            },
            {
              'clicked': false,
              'document': 'Reflectie rapport',
              'beschrijving': `
                Je schrijft (ca. 1 a4) een reflectie over de gerealiseerde applicatie. Welk aspect binnen het bouwen van de applicatie vond je lastig?
                Hoe kwam dat? Wat vond je van je eigen communicatie richting jouw groepsgenoten / begeleiders? Had je vaker hulp moeten vragen denk je?
                Als je eenzelfde applicatie nog eens zou bouwen, welke zaken had je nu dan anders aangepakt?
                Kwam de planning van je werkzaamheden overeen met de werkelijkheid? Zo niet, hoe kwam dit? Hoe heeft het ontwikkelen van deze applicatie
                er voor gezorgd dat je een betere ontwikkelaar bent geworden?
              `
            }
          ]
        },
        {
          kt: 2,
          wp: 'B1-K2-W2',
          naam: 'Test het ontwikkelde product',
          beschrijving: `
            Je bent gedurende het ontwikkelproces continu bezig met het testen van (onderdelen van) je applicatie. Je maakt gebruik van
            verschillende test-tools om er zeker van te zijn dat de applicatie goed werkt. Denk bijvoorbeeld aan Javascript linters, HTML
            validators, breakpoints in Visual Studio. Misschien ben je zelfs al bezig geweest met Unit Testing? Je stelt voordat je de applicatie gaat bouwen al een
            test op die na het bouwen (dus na realisatie, voor de oplevering) uitgevoerd wordt. Bij een (web)applicatie test je of de applicatie
            goed werkt op verschillende browsers, en of de site responsive is. Je test of eventuele berekeningen die gebruikt worden in de
            applicatie ook daadwerkelijk het goede resultaat geeft. Je checkt of de output klopt door data te loggen naar een logbestand, de console, of tijdelijk
            in de applicatie zelf. Je test of de zoekfuncties in de applicatie naar behoren werken. Je test of de routes van
            de applicatie juist zijn, je test of de data die in de applicatie als input wordt gegeven, op de juiste manier wordt afgehandeld. Je test of de sql queries correct
            zijn. Tijdens het testen zorg je er voor dat je voldoende (dummy) data hebt om zo realistisch mogelijk te testen. Daarnaast test je of alle vooraf vastgestelde
            requirements voor de applicatie gebouwd zijn en naar behoren werken.
          `,
          resultaat: `
            Een applicatie die zonder bugs of gebrek aan functionaliteiten klaar staat om te worden opgeleverd. Er zijn testrapporten
            opgesteld en uitgevoerd om zeker te weten dat de applicatie kwalitatief in orde is. Een groepsgenoot heeft een door jou opgestelde
            functionele test uitgevoerd voor de applicatie. Er zijn verbetervoorstellen gemaakt om de applicatie te optimaliseren.
          `,
          oplevering: [
            {
              'clicked': false,
              'document': `Testverslag`,
              'beschrijving': `
                Je beschrijft in verslagvorm (screenshots inclusief uitleg) hoe je tijdens het ontwikkelen aan de slag bent gegaan
                met testen. Wat heb je allemaal gebruikt om te testen en waarom? Noteer welke tools je hebt gebruikt om te testen, en laat
                met screenshots zien hoe je die tools hebt gebruikt.
              `
            },
            {
              'clicked': false,
              'document': `Uitgevoerde test`,
              'beschrijving': `
                Je levert een testrapport in waarin technische en functionele aspecten van de site zijn getest, liefst door een groepsgenoot.
                Het testrapport voldoet aan de eisen die je vanuit de opleiding hebt geleerd en je tijdens projecten al hebt moeten uitvoeren.
              `
            },
            {
              'clicked': false,
              'document': 'Verbetervoorstel',
              'beschrijving': `
                Aan de hand van de uitgevoerde test ga je conclusies trekken. Deze conclusies ga je vervolgens uitwerken tot een verbetervoorstel.
                Wellicht werk je met Github waar je issues kan melden in de repository. De verbetervoorstellen zijn realistisch en nog te verwerken
                in de applicatie voor de echte oplevering.
              `
            }
          ]
        },
        {
          kt: 3,
          wp: 'B1-K3-W1',
          naam: 'Optimaliseert het product',
          beschrijving: `
            <h4> maak een keuze </h4>
            <p>
            1. Je gaat van een applicatie die nog niet helemaal klaar is om opgeleverd te worden, een aantal zaken optimaliseren,
            zodat de stap naar live gang kleiner is geworden. Dit kan een applicatie voor iemand uit je omgeving zijn of een privé project
            </p>
            <p>
            2. gaat van een open source project op github een issue request oppakken en proberen af te handelen.
            Er zijn op github talloze projecten die leunen op contributies van andere developers. Jij kunt daar ook je steentje
            aan bijdragen. Ga op zoek naar projecten die jou interessant lijkt en waar jij denkt een meerwaarde aan te kunnen zijn,
            o.a. door te kijken wat de huidige issues zijn. Wellicht dat jij dit op kan pakken!
            </p>
          `,
          resultaat: `
            Een verbetering op een van jouw applicaties die nog niet in productie is.
            Een (al dan niet goedgekeurde) pull request van een project op github. In deze pull request zijn een aantal
            verbeteringen aan de applicatie verwerkt. Eventuele commentaar op de pull request heb je afgehandeld en opnieuw
            ingediend.
          `,
          oplevering: [
            {
              'clicked': false,
              'document': `bij 1: Optimalisatie verslag`,
              'beschrijving': `Je gaat in verslagvorm aangeven hoe je de verbetervoorstellen uit een al ontwikkelde situatie in de applicatie
              weet te verwerken. Maak hierbij gebruik van screenshots van de code en layout wat je hebt aangepast en geef hierbij uitleg. Geef hierbij
              duidelijk (meetbaar!) aan wat nu de verbetering is ten opzichte van de vorige situatie.
              `
            },
            {
              'clicked': false,
              'document': `bij 2: Pull Request`,
              'beschrijving': `Je gaat een pull request maken voor de wijzigingen die je hebt aangebracht. Je doet deze pull request
              volgens de conventies van het project, meestal te lezen in de readme van een open source project.`
            }
          ]
        },
        {
          kt: 3,
          wp: 'B1-K3-W2',
          naam: 'Levert het product op',
          beschrijving: `
            Je levert nadat de laatste testactiviteiten zijn afgerond je product af aan de klant of in dit geval de CodeLab begeleider. Je laat door middel van een presentatie
            zien wat je hebt gebouwd.
          `,
          resultaat: `
            De applicatie is goedgekeurd en gepresenteerd aan (een deel van de) CodeLab groep.
          `,
          oplevering: [
            {
              'clicked': false,
              'document': 'Presentatie',
              'beschrijving': `
                Je bereidt een presentatie voor waarbij je in 15 min tot 30 min jouw product toont. Je houdt in je
                presentatie rekening met correct taalgebruik. Ook bewaak je de tijd die je hebt voor de presentatie.
                De presentatie laat duidelijk zien hoe je tot het uiteindelijke product bent gekomen. Daarnaast laat je alle
                functionaliteiten zien die het product in zich heeft.
              `
            }
          ]
        },
        {
          kt: 3,
          wp: 'B1-K3-W3',
          naam: 'Evalueert het opgeleverde product',
          beschrijving: `
            Je gaat de oplevering aan de hand van gekregen feedback bespreken met je CodeLab begeleider.
            Je gaat samen met hem/haar na wat er goed is gegaan en waar verbeterpunten liggen over het hele proces.
          `,
          resultaat: `
            Het opgeleverde product is geëvalueerd en je hebt voor jezelf doelstellingen opgelegd waar je bij je volgende ontwikkel klus
            rekening mee kan houden.
          `,
          oplevering: [
            {
              'clicked': false,
              'document': `Reflectieverslag`,
              'beschrijving': `Maak op basis van het gesprek met je CodeLab begeleider een reflectieverslag waarin je terugkijkt
              en antwoord geeft op de volgende vragen: Heb ik me voldoende voorbereid voor deze taak? Wat waren knelpunten
              bij het uitvoeren van deze taak? Wat zou ik een volgende keer anders doen?
              `
            }

          ]
        },
        {
          kt: 4,
          wp: 'P1-K1-W1',
          naam: 'Onderhoudt een applicatie',
          beschrijving: `Tijdens je opleiding komen er vast meldingen van jouw omgeving die support nodig hebben in het
          gebruik van hun applicatie. Je handelt eventuele incident meldingen professioneel af volgens de richtlijnen van jouw stagebedrijf.
          Eventuele aanpassingen van de applicatie worden op een professionele manier uitgevoerd volgens de gangbare richtlijnen van jouw stagebedrijf. Daarnaast worden deze aanpassingen
          getoetst of deze doorgevoerd kunnen worden zonder dat er andere systeemkritieke werkingen in gevaar komen. Ook toets je
          altijd of de aangevraagde aanpassing in lijn ligt met de geldende afspraken met deze klant.`,
          resultaat: `
            Incidentmeldingen m.b.t. de applicatie (vragen, bugs, aanpassingsverzoeken) worden op correcte manier afgehandeld.
          `,
          oplevering: [
            {
              'clicked': false,
              'document': `Issue / tickets afhandelen`,
              'beschrijving': `Beschrijf hoe jullie binnen het bedrijf omgaan met issues of tickets. Een klant neem contact op en heeft een probleem. Wie neemt bij het bedrijf het eerst contact op en hoe gaat de procedure verder? Wie bepaalt bijvoorbeeld of het een bug is die opgelost moet worden, of dat het een uitbreiding van de bestaande situatie is, en waar dus extra voor gefactureerd dient te worden? Welk systeem wordt gebruikt om de issues of tickets te monitoren en toe te wijzen? \

Daarnaast doe je uitgebreid verslag van een ticket die je zelf hebt afgehandeld. Beschrijf hierbij wat de issue was, hoe je het hebt aangepakt en hoe je jouw activiteiten hebt teruggekoppeld naar de opdrachtgever.
`
            }
          ]
        },
        {
          kt: 4,
          wp: 'P1-K1-W2',
          naam: 'Beheert gegevens',
          beschrijving: `Gedurende je loopbaan bouw je (mee aan) verschillende applicaties. Van alles wat je hebt gemaakt en beheert is het
          belangrijk dat de daarvoor benodigde data (denk aan inloggegevens, databasegegevens, specificaties, git repository e.d.) op een gestructureerde wijze
          beschikbaar is en niet onvindbaar is op het moment dat jij met je stage stopt. Ook is het belangrijk dat alle gemaakte wijzigingen binnen een applicatie
          dmv versiebeheer (git) wordt bijgehouden.`,
          resultaat: `
            Het stagebedrijf heeft alle documentatie en data met betrekking tot de door jouw gebouwde en beheerde applicaties tot zijn beschikking
            en kan hierin snel zijn weg vinden.
          `,
          oplevering: [
            {
              'clicked': false,
              'document': `Overdrachtsdocument`,
              'beschrijving': `
                Je gaat een document opstellen waarin alle gegevens op een gestructureerde manier staan opgeslagen die betrekking hebben op alles wat je tijdens je stage hebt gedaan. Welke accounts heb je aangemaakt voor software? waar zijn daarvan gegevens te vinden? Wellicht heb je met CMS systemen gewerkt, waar inloggegevens voor verplicht zijn. Hoe heb je ervoor gezorgd dat alle wijzigingen die je in de appliaties hebt gedaan, zichtbaar zijn en duidelijk voor een eventuele opvolger?
Schrijf het document zodanig dat een eventuele stagiair die jou op zou volgen zo snel mogelijk aan de slag kan met het continueren van jouw werk. Een idee hierbij is om een FAQ te maken met antwoord op vragen die jouw eventuele opvolger of collega zou kunnen stellen

              `
            }
          ]
        }
      ],

      activeOpdracht: []
    }
  },

  methods: {
    setActive: function (opdracht) {
      this.activeOpdracht = opdracht
      this.modalOpen = true
    }
  }
}
</script>


<style scoped>


.boards {
  padding:40px 0;
}

.boards .board .box.is-gray {
  background-color: #F5F5F5;
}

.boards .board .box .items {
  padding: 20px 0;
}

.box .head .name {
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  color: #2C2C30;
}

.box .head .count {
  display: inline-block;
  padding-left: 5px;
  font-size: 20px;
  font-weight: bold;
  color: #AAAAAA;
}

.box .head .options {
  display: inline-block;
  float: right;
  padding-top:7px;
  color: #CCCCCC;
}

.items .box .title {
  font-size: 19px;
}

.items .box .meta img {
  border-radius: 30px;
  margin-right: 10px;
}

.items .box .meta .fa {
  margin: 3px 7px;
  color: #CCCCCC;
}

.items .add-card div {
  color: #AAAAAA;
  font-weight: bold;
  font-size: 16px;
}

.sub-title {
  height: 45px;
}

.panel-block {
  display: block;

}

.panel-block p {
  margin-bottom: 0px;
  padding: 10px;
}

.panel-block>p:hover {
  background: #eee;
  cursor: pointer;
}
</style>