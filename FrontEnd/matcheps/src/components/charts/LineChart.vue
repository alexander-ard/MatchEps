<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  props: ['data', 'options', 'title'],
  mounted() {
    const defaultOptions = {
      responsive: true,
      maintainAspectRatio: false,
      fill: false,
      steppedLine: true,
      title: {
        display: true,
        text: this.title,
        fontSize: 18
      },
    };

    if (this.options) {
      this.defaultOptions = Object.assign(this.options, defaultOptions);
    }

    this.renderChart(this.data, defaultOptions);
  },
};
</script>
