<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  props: ['data', 'options', 'title'],
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

    if (this.options) {
      this.defaultOptions = Object.assign(this.options, defaultOptions);
    }

    this.renderChart(this.data, defaultOptions);
  },
};
</script>
