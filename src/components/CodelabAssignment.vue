<template>
  <div class="root-element content">
    <h1> {{name}}</h1>

    <div class="assignments">
      <article class="media" v-for="assignment in assignments" >
        <figure class="media-left">
          <p class="image is-64x64 difficulty" :class="assignment.level" style="border-bottom-right-radius: 25px">
            {{assignment.level}}
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <h3>{{assignment.title}}</h3>
            <p v-html="assignment.content">

            </p>
            <div class="hulp">
              <h4><b>Hulp</b></h4>
              <p v-html="assignment.hulp"></p>
            </div>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">

            </div>
          </nav>
        </div>

      </article>
    </div>


  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Codelab Assignments',
      assignments: [
        {
          title: 'De IQ test',
          content: `<p>Bart bereidt zich voor op een IQ test. De meest voorkomende taak in deze test is om uit te vinden welk nummer van een serie nummers verschilt van de anderen (de vreemde eend in de bijt van de nummers). </p><p> Het valt Bart op dat één nummer uit de serie altijd verschilt van de andere nummers omdat deze juist even of oneven is, en de anderen niet.
                    Om zijn antwoorden te checken heeft hij een programma nodig dat een gegeven reeks getallen krijgt, en de <b>positie</b> teruggeeft van het getal wat juist in even/onevenheid anders is dan de rest.
                    </p><p>Let op dat het jouw taak is om Bart te helpen deze IQ test op te lossen, dus geef de daadwerkelijke positie van het getal terug, niet de index.</p>
                  `,
          level: 'silver',
          hulp: `
            <ul>
              <li> Input is bijvoorbeeld: <code> [1, 3, 5, 7, 8, 9] // output moet 5 zijn </code>
              <li> Input is bijvoorbeeld: <code> [2, 4, 6, 7, 8] // output moet 4 zijn
            </ul>`
        },
        {
          title: 'Knuffels en kusjes',
          content: `<p>
                  Ine ontvangt van haar vriend een aantal berichten met als inhoud iets als: “xoxoxxox”. De  ‘x’ staat voor een kusje en de ‘o’ staat voor een knuffel. Ine wilt graag weten of ze wel evenveel kusjes als knuffels krijgt.  Maak hiervoor een methode (of een functie) die  een boolean returnt en niet hoofdlettergevoelig is.
                  </p>
                  `,
          level: 'bronze',
          hulp: `
            De ingevoerde string mag verder allerlei andere woorden en zinnen bevatten. <b> Let op </b>, in de gewone woorden in een berichtje staan uiteraard ook 'x'en en 'o's. Neem die niet mee bij het tellen!
            `
        },
        {
          title: 'Dubstep DJ part 1',
          content: `<p>Elton werkt als DJ in de beste nachtclub van Breda. Hij gebruikt vaak Dubstep muziek in zijn performance. Pas geleden heeft hij besloten om wat oude songs te pakken, en er een Dubstep versie van te maken.
          </p> <p>Laten we aannemen dat een song bestaat uit een bepaalde hoeveelheid woorden. Om een dubstep versie van deze song te maken, voegt Elton een aantal “WUB”’s toe aan een song.</p>
          <ul>
          <li>In ieder geval voor het eerste woord van de tekst moet er een random aantal (tussen 0 en 3) keer “WUB” komen te staan. </li>
          <li>Tussen ieder woord van de tekst moet er (random) minimaal 1 keer “WUB” komen te staan en maximaal 4keer </li>
          <li>Aan het eind van de song moet er een random aantal (tussen 0 en 3) keer “WUB” komen te staan. </li>
          </ul>
          <p>
          Jij gaat voor hem een programma in de vorm van een methode of functie schrijven die dubstepversies van bestaande songs maakt.
          </p>
          `,
          level: 'silver',
          hulp: `<p>probeer de opdracht eerst klein te maken met bijvoorbeeld een zin van 5 woorden. Krijg je de goede output, dan lukt het vast ook met een hele lyric van een song</p>
          <p><b> voorbeeld </b> </p>
          <p> input: <code> I looked out this morning and the sun was gone </code> <p>
          </p> outputvoorbeeld: <code> WUBWUB I WUB looked WUBWUBWUB out WUBWUB this WUBWUBWUBWUB morning WUB and WUBWUB the WUB sun WUBWUB was WUBWUBWUB gone WUBWUB </code> </p>
           `
        },
        {
          title: 'Dubstep DJ part 2',
          content: `
          <p> Fer hoort de remixes van Elton. Hij vindt het verschrikkelijk om naar te luisteren. Wel hoort hij vaag de bekende geluiden van songs die hij wel kent. Fer wil graag weten wat die songs zijn. <p></p> Jij gaat helpen om van de Dubstepversies van Elton, de songs terug te brengen naar het origineel, zonder al die irritante “WUB”’s.
          </p><p>Maak een methode of functie die de remixes van Elton weer terugbrengen in originele staat, inclusief de benodigde spaties, en zonder whitespace voor en achter de song.</p>
          `,
          level: 'silver',
          hulp: `<p>Eigenlijk dus het terugdraaien van wat je in de vorige opdracht hebt gedaan. Let wel op dat er in een lyric eventueel het (deel)woord wub zou kunnen komen te staan.</p><p>Hoe ga jij herkennen dat dit onderdeel is van de originele lyric?</p>`
        },
        {
          title: 'Klinker spel',
          content:
          `<p>Mevrouw Rusch geeft in haar vrije tijd extra lessen aan kinderen op het gebied van Taal.
          Ze is met oefeningen bezig om de kinderen klinkers te leren. Ze heeft als opdracht de kinderen meegegeven om een zin te maken die zoveel mogelijk klinkers bevat.
          Jij gaat voor haar een programma schrijven die van een gegeven string het <b>aantal</b> klinkers terug geeft.
          </p>`,
          level: 'bronze',
          hulp: `geen hulp aangeboden.`
        },
        {
          title: 'Tim ♥ Roman Numerals',
          content: `Tim richt zijn huis opnieuw in. Hij wil ooit een digitale kalender maken met Romeinse cijfers om aan de muur te hangen. Aangezien hij nogal moeite heeft met het converteren van nummers naar Romeinse cijfers wil hij allereerst graag een programma die dat voor hem bouwt.
          Maak een programma dat elk nummer t/m 2000 om kan zetten in Romeinse cijfers. Tim wil dat dit makkelijk uit breiden is en mag dus niet hardcoded zijn.
          `,
          level: 'gold',
          hulp: `
          <p> inputvoorbeeld: <code> 567 </code> </p>
          <p> outputvoorbeeld: <code> DLXVII </code> </p>
          `
        },
        {
          title: 'Piet !♥ Roman Numerals',
          content: `Piet kijkt graag films. Piet vind het leuk om ook de aftiteling te bekijken. Op het einde volgt er altijd een copyright met Romeinse cijfers. Piet begrijpt helemaal niks van die romeinse cijfers. Hij wil graag een programma om die Romeinse cijfers om te zetten naar een jaartal. Schrijf hiervoor een functie of een methode.`,
          level: 'gold',
          hulp: `
          <p> inputvoorbeeld: <code> MCMLXXXVII </code> </p>
          <p> outputvoorbeeld: <code> 1987 </code> </p>
          `
        },
        {
          title: 'De zoekmachine part 1',
          content: `Mark wilt graag een zoekmachine bouwen. Om te voorkomen dat kleine woorden veel te veel resultaten oproepen moeten de kleinste woorden eerst verwijderd worden. Jij krijgt de opdracht om als eerste stap het kleinste woord van de ingegeven zoekterm te vinden, en vervolgens te tellen hoeveel letters deze bevat.
          Input is een zin. Maak een methode of functie die van het kleinste woord het aantal letters teruggeeft.
          `,
          level: 'bronze',
          hulp: `
            <p>inputvoorbeeld: <code> Hoe het beste te zoeken op internet? </code></p>
            <p> outputvoorbeeld: <code> kleinste woordgrootte: 2 </code>
          `
        },
        {
          title: 'racecaracecar',
          content: `<p>Sietse rijdt in zijn racecar tijdens een belangrijke wedstrijd helemaal achteraan. Hij kan zijn gedachtes er even niet bij houden. Hij kijkt naar zijn meetsysteem en komt tot de ongelofelijke ontdekking dat het woord meetsysteem een palindroom is! Terwijl hij zich hier over verwondert komt hij ook tot de conclusie dat racecar een palindroom is. Nu kan hij zich al helemaal niet meer concentreren. Hij verliest de wedstrijd grandioos. Eenmaal thuis kan hij deze palindromen niet uit zijn hoofd krijgen. Hij vraagt zich af er nog meer woorden zijn die palindromen zijn.
</p><p> Bedenk voor Sietse een programma die checkt of een gegeven woord een palindroom is.</p>
`,
          level: 'silver',
          hulp: `geen hulp aangeboden`
        }
      ]
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
@import url('https://fonts.googleapis.com/css?family=Gloria+Hallelujah');

.difficulty {
  transform: rotate(-20deg);
  position: absolute;
  left: 0px;
  box-shadow: 3px 3px 3px black;
  font-family: 'Gloria Hallelujah';
  color: white;
  text-shadow: 1px 1px 1px black;
}

.bronze {
  background: #CD7F32;
}

.gold {
  background : gold;
}

.silver {
  background: silver;
}

article.media {
  background: #dede;
  padding: 20px;
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