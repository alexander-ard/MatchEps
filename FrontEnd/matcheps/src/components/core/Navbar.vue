<template>
  <div class="nav" :data-home="currentRoute === 'landing'">
    <button class="nav__btnSidebar" @click="toogleMenu">
      <i class="fas fa-bars"></i>
    </button>

    <!-- <div class="nav__btnGroup" :class="{ '--hidden': hiddenMenu }">
      <router-link
        tag="button"
        :to="'/'"
        class="nav__btnGroup__btn"
        :class="{ '--active': currentRoute === 'landing' }"
        @click="hideMenu"
      >
        <span @click="hideMenu">Landing</span>
      </router-link>

      <router-link
        tag="button"
        :to="'/eps-search'"
        class="nav__btnGroup__btn"
        :class="{ '--active': currentRoute === 'eps-search' }"
      >
        <span @click="hideMenu">Eps</span>
      </router-link>

      <router-link
        tag="button"
        :to="'/opiniones'"
        class="nav__btnGroup__btn"
        :class="{ '--active': currentRoute === 'opiniones' }"
        @click="hideMenu"
      >
        <span @click="hideMenu">Opiniones</span>
      </router-link>
    </div> -->
  </div>
</template>

<script>
import logo from '@icons/logo.png';

export default {
  name: 'Navbar',
  data() {
    return {
      logo,
      hiddenMenu: true,
    };
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    },
  },
  methods: {
    toogleMenu() {
      this.hiddenMenu = !this.hiddenMenu;
    },
    hideMenu() {
      this.hiddenMenu = true;
    },
  },
};
</script>
