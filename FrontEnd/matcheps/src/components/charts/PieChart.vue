<script>
import { Pie } from 'vue-chartjs';

export default {
  extends: Pie,
  props: ['data', 'options', 'title'],
  data() {
    return {
      rgbMap: new Map([
        [0, '0'],
        [1, '25'],
        [2, '51'],
        [3, '76'],
        [4, '102'],
        [5, '127'],
        [6, '153'],
        [7, '178'],
        [8, '204'],
        [9, '239'],
        [10, '255'],
      ]),
    };
  },
  mounted() {
    const defaultOptions = {
      responsive: true,
      steppedLine: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: this.title,
        fontSize: 36
      },
    };

    let data = this.data;

    data.datasets.map((ds) => {
      let colors = [];
      ds.data.forEach((data) => {
        colors.push(this.getRandomColor(ds.backgroundColor));
      });

      ds.backgroundColor = colors;
    });

    this.renderChart(this.data, defaultOptions);
  },
  methods: {
    getRandomColor(base) {
      if (base.length) {
        let split = base.split(',');
        split[2] = this.rgbMap.get(Math.floor(Math.random() * 11));
        split[1] = this.rgbMap.get(Math.floor(Math.random() * 11));
        return split.join();
      }
    },
  },
};
</script>
