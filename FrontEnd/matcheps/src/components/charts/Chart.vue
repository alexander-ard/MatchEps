<template>
  <div class="chart">
    <BarChart :title="data.name" v-if="data.chart == 'bar'" :data="chartData" />
    <LineChart :title="data.name" v-if="data.chart == 'line'" :data="chartData" />
    <PieChart :title="data.name" v-if="data.chart == 'pie'" :data="chartData" />
  </div>
</template>

<script>
import BarChart from '@components/charts/BarChart';
import LineChart from '@components/charts/LineChart';
import PieChart from '@components/charts/PieChart';

export default {
  name: 'Chart',
  components: { BarChart, LineChart, PieChart },
  props: ['data'],
  data() {
    return {};
  },
  computed: {
    chartData() {
      let chart;
      if (this.data.dataSets) {
        if (this.data.dataSets.length) {
          chart = {
            labels: Object.keys(this.data.dataSets[0].data),
            datasets: this.data.dataSets.map((set) => {
              return {
                label: set.eps.epsName,
                borderColor: set.eps.defaultColor,
                borderWidth: 3,
                data: Object.values(set.data),
                fill: this.data.chart === 'line' ? false : true,
                backgroundColor: this.data.chart === 'line' ? '' : set.eps.defaultColorRGBA,
              };
            }),
          };
        }
      }

      return chart;
    },
  },
};
</script>
