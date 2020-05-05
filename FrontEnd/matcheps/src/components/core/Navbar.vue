<template>
  <div class="nav" :data-home="currentRoute === 'home'">

    <button class="nav__btnSidebar" @click="toogleMenu">
      <i class="fas fa-bars"></i>
    </button>

    <div
      class="nav__btnGroup"
      :class=" {'--hidden': hiddenMenu }"
    >
      <router-link
        tag="button"
        :to="'/'"
        class="nav__btnGroup__btn"
        :class="{ '--active': currentRoute === 'home' }"
      >
        Home
      </router-link>

      <router-link
        tag="button"
        :to="'/eps-search'"
        class="nav__btnGroup__btn"
        :class="{ '--active': currentRoute === 'eps-search' }"
      >
        Eps
      </router-link>

      <router-link
        tag="button"
        :to="'/opiniones'"
        class="nav__btnGroup__btn"
        :class="{ '--active': currentRoute === 'opiniones' }"
      >
        Opiniones
      </router-link>
    </div>
  </div>
</template>

<script>
import logo from '@icons/logo.png';

export default {
  name: 'Navbar',
  data() {
    return {
      logo,
      hiddenMenu: false,
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
  },
};
</script>
