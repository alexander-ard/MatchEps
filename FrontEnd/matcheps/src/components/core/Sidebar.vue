<template>
  <div class="sidebar" :class="{ '--hidden': hidden }">
    <div class="sidebar__toggle">
      <button class="plain" @click="toggle">
        <i class="fas fa-chevron-right" :class="[hidden ? 'fas fa-chevron-right' : 'fas fa-chevron-left']"></i>
      </button>
    </div>
    <div class="sidebar__logo"></div>
    <div class="sidebar__menu">
      <div class="sidebar__menu__item" v-for="item in menuData" :key="item.text" @click="hide">
        <router-link tag="button" class="plain" :to="item.path">
          <i :class="`fas fa-${item.icon}`"></i>
          {{ item.text }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      hidden: false,
      menuData: [],
    };
  },
  methods: {
    toggle() {
      this.hidden = !this.hidden;
    },
    hide() {
      this.hidden = true;
    },
  },
  mounted() {
    this.menuData = [
      {
        text: 'Home',
        icon: 'home',
        path: '/',
      },
      {
        text: 'Match EPS',
        icon: 'search',
        path: 'home',
      },
      {
        text: 'Opiniones',
        icon: 'comments',
        path: 'comments',
      },
      {
        text: 'Ubicaciones',
        icon: 'map-marked-alt',
        path: 'locations',
      },
    ];
  },
};
</script>
