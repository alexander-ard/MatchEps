<template>
  <div class="epsMatch">
    <EpsInfo v-for="eps in epsList" :key="eps" :epsId="eps" />
  </div>
</template>

<script>
import EpsInfo from '@components/core/EpsInfo';

export default {
  name: 'EpsMatch',
  components: {
    EpsInfo,
  },
  computed: {
    epsList() {
      return this.$route.params.eps;
    },
  },
};
</script>
