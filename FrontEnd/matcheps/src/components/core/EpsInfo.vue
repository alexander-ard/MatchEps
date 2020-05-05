<template>
  <div class="epsInfo">
    <span class="epsInfo__epsName">
      {{ epsData.name }}
    </span>
    <LineChart :title="'Cantidad de afiliados por año'" v-if="eps" :data="afiliatesChart"/>
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
            borderColor: this.eps.defaultColor,
            backgroundColor: `${this.eps.defaultColor}`,
            data: Object.values(this.eps.afiliados),
          },
        ],
      };
    },
  },
};
</script>
