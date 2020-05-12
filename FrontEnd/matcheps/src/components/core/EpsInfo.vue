<template>
  <div class="epsInfo">
    <span class="epsInfo__epsName">
      {{ epsData.name }}
    </span>
    <div class="main__btnWrapper">
      <button class="main__btnWrapper__btn" style="font-size: 1em;" @click="displayComments">
        Ver opiniones
      </button>
    </div>
    <BarChart :title="'Ranking'" v-if="eps" :data="rankingChart" />
    <LineChart :title="'Cantidad de afiliados por año'" v-if="eps" :data="afiliatesChart" />
   <Comments :id="eps.id" :eps="eps" v-if="showComments && eps"/>
  </div>
</template>

<script>
import LineChart from '@components/charts/LineChart';
import BarChart from '@components/charts/BarChart';
import Comments from '@components/comments/Comments';
import api from '@utils/api';

export default {
  name: 'epsInfo',
  props: ['epsId'],
  components: {
    LineChart,
    Comments,
    BarChart
  },
  data() {
    return {
      eps: false,
      showComments: false
    };
  },
  mounted() {
    this.getEpsData();
  },
  methods: {
    async getEpsData() {
      this.eps = await api.get(`eps/${this.epsId}`);
    },
    displayComments() {
      this.showComments = true;
    }
  },
  computed: {
    epsData() {
      return this.eps;
    },
    afiliatesChart() {
      return {
        labels: Object.keys(this.eps.afiliados),
        datasets: [
          {
            label: 'Nro. de afiliados',
            borderColor: this.eps.defaultColor,
            backgroundColor: `${this.eps.defaultColor}`,
            data: Object.values(this.eps.afiliados),
          },
          {
            label: 'Nro. de afiliados',
            borderColor: this.eps.defaultColor,
            backgroundColor: `${this.eps.defaultColor}`,
            data: Object.values(this.eps.afiliados),
          },
        ],
      };
    },
    rankingChart() {
      return {
        labels: Object.keys(this.eps.ranking),
        datasets: [
          {
            label: 'Ranking',
            borderColor: this.eps.defaultColor,
            backgroundColor: `${this.eps.defaultColor}`,
            data: Object.values(this.eps.ranking),
          },
        ],
      };
    },
  },
};
</script>
