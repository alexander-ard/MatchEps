<template>
  <div class="epsSearch">
    <div class="epsSearch__header">
      <span class="epsSearch__header__text">
        Seleccione la(s) EPS que desea visualizar:
      </span>
    </div>
    <Choices :choices="epsList" @changedSelections="updateSelected" />
    <div class="main__btnWrapper">
      <router-link
        tag="button"
        class="btn main__btnWrapper__btn"
        :to="routerTo"
        :disabled="selectedEps.length === 0"
      >
        ¡Comparar!
        <i class="fas fa-play"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import api from '@utils/api.js';
import Choices from '@components/shared/Choices';

export default {
  name: 'epsSearch',
  components: {
    Choices,
  },
  data() {
    return {
      epsList: [],
      selectedEps: [],
    };
  },
  methods: {
    async getEpsList() {
      this.epsList = await api.get('eps');
      this.epsList = this.epsList.map(eps => ({
        value: eps.id,
        label: eps.name,
      }));
    },
    updateSelected(selected) {
      this.selectedEps = selected;
    },
  },
  mounted() {
    this.getEpsList();
  },
  computed: {
    routerTo() {
      return {
        name: 'eps-match',
        params: {
          eps: this.selectedEps,
        },
      };
    },
  },
};
</script>
