<template>
  <div class="home">
    <ListFilter @change="updateSelectedEps" :title="'Seleccione las EPS'" :list="epsList" v-if="epsList" />
    <ListFilter @change="updateSelectedVar" :title="'Seleccione las Variables'" :list="varList" v-if="varList" />
    <div class="home__match">
      <button type="button" class="home__match__btn" @click="match($event)">
        ¡Match!
        <i class="fas fa-play"></i>
      </button>
    </div>
  </div>
</template>

<script>
import ListFilter from '@components/shared/ListFilter';
import api from '@utils/api.js';

export default {
  name: 'Home',
  components: { ListFilter },
  data() {
    return {
      epsList: [],
      selectedEps: [],
      selectedVar: [],
      varList: [],
    };
  },
  mounted() {
    this.getEpsList();
    this.getVarList();
  },
  computed: {
    routerTo() {
      return {
        name: 'eps-match',
        params: {
          eps: this.selectedEps,
          var: this.selectedVar,
        },
      };
    },
  },
  methods: {
    async getEpsList() {
      this.epsList = await api.get('eps');
      this.epsList = this.epsList.map((eps) => ({
        id: eps.id,
        name: eps.name,
      }));
    },
    async getVarList() {
      this.varList = await api.get('variables');
    },
    updateSelectedEps(selected) {
      this.selectedEps = selected;
    },
    updateSelectedVar(selected) {
      this.selectedVar = selected;
    },
    match(evt) {
      if (!this.selectedEps.length || !this.selectedVar.length) {
        this.$alertify.alert('Error', 'Por favor seleccione las EPS y variables para comparar.');
      } else {
        this.$router.push(this.routerTo);
      }
    },
  },
};
</script>
