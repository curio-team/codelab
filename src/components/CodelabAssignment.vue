<template>
  <div class="root-element content">
    <h1> {{name}}</h1>

    <div class="assignments">
      <article class="media" v-for="assignment in assignments" >
        <figure class="media-left">
          <p class="image is-64x64" :style="{background: assignment.level}" style="border-bottom-right-radius: 25px">
            {{assignment.level}}
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <h3>{{assignment.title}}</h3>
            <p v-html="assignment.content">

            </p>
            <div class="help">
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