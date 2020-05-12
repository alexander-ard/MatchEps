<template>
  <div class="epsMatch">
    <!-- Mergeable charts -->
    <div class="epsMatch__merged" v-for="variable in mergeableVariablesList" :key="variable.id">
      <Chart :data="variable" />
    </div>

    <!-- Non mergeable charts -->
    <div class="epsMatch__nonMerged">
      <div class="epsMatch__nonMerged__var" v-for="variable in nonMergeableVariables" :key="variable.id">
        <div class="epsMatch__nonMerged__var__title">
          {{ variable.name }}
        </div>
        <div class="epsMatch__nonMerged__var__charts">
          <Chart :data="data" v-for="data in variable.data" :key="data.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EpsInfo from '@components/core/EpsInfo';
import api from '@utils/api';
import Chart from '@components/charts/Chart';

export default {
  name: 'EpsMatch',
  components: {
    EpsInfo,
    Chart,
  },
  data() {
    return {
      variables: [],
      eps: [],
      mergeableVariables: null,
    };
  },
  created() {
    if (this.$route.params.eps.length === 0 || this.$route.params.var.length === 0) {
      this.$$route.push('home');
    } else {
      this.getVariables();
      this.getEpsData();
    }
  },
  methods: {
    async getVariables() {
      let varList = await api.get('variables');
      this.variables = varList.filter((x) => {
        return this.$route.params.var.indexOf(x.id) > -1;
      });
    },
    async getEpsData() {
      let epsList = await api.get('eps');
      this.eps = epsList.filter((x) => {
        return this.$route.params.eps.indexOf(x.id) > -1;
      });
    },
    getMergeableVariables() {
      let variables = this.variables.filter((v) => {
        return v.merge;
      });

      if (variables && this.eps) {
        variables.forEach((v) => {
          v.dataSets = this.eps.map((eps) => {
            return {
              data: eps[v.key],
              eps: {
                epsName: eps.name,
                defaultColor: eps.defaultColor,
              },
            };
          });
        });
      }

      this.mergeableVariables = variables;
    },
  },
  computed: {
    epsList() {
      return this.$route.params.eps;
    },
    mergeableVariablesList() {
      return this.mergeableVariables;
    },
    nonMergeableVariables() {
      let variables = this.variables.filter((v) => {
        return !v.merge;
      });

      if (variables && this.eps) {
        variables.forEach((v) => {
          let data = [];

          this.eps.forEach((eps) => {
            return data.push({
              chart: v.chart,
              name: eps.name,
              dataSets: [
                {
                  data: eps[v.key],
                  eps: {
                    epsName: eps.name,
                    defaultColor: eps.defaultColor,
                    defaultColorRGBA: eps.defaultColorRGBA,
                  },
                },
              ],
            });
          });

          v.data = data;
          return variables;
        });
      }

      return variables;
    },
  },
  watch: {
    eps: {
      handler() {
        this.getMergeableVariables();
      },
      deep: true,
    },
  },
};
</script>
