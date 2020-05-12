<template>
  <div id="app">
    <Sidebar/>
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
import Sidebar from './components/core/Sidebar';

export default {
  components: { Navbar, Sidebar },
};
</script>
