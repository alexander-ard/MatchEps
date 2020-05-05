<template>
  <div id="app">
    <Navbar/>
    <div id="main-content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
  @import '@css/shared/entry.scss';
</style>


<script>

import Navbar from './components/core/Navbar';

export default {
  components: { Navbar },
};
</script>
