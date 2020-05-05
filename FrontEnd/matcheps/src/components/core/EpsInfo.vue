<template>
  <div class="epsInfo">
    <span class="epsInfo__epsName">
      {{ epsData.name }}
    </span>
    <LineChart :options="chartOptions" v-if="eps" :data="afiliatesChart" />
  </div>
</template>

<script>
import LineChart from '@components/charts/LineChart';
import api from '@utils/api.js';

export default {
  name: 'epsInfo',
  props: ['epsId'],
  components: {
    LineChart,
  },
  data() {
    return {
      eps: false,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        fill: false,
        steppedLine: true,
      },
    };
  },
  mounted() {
    this.getEpsData();
  },
  methods: {
    async getEpsData() {
      this.eps = await api.get(`eps/${this.epsId}`);
    },
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
            borderColor: '#006871',
            data: Object.values(this.eps.afiliados),
          },
        ],
      };
    },
  },
};
</script>
