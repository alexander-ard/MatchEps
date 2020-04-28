<template>
  <div class="nav" v-if="!inLanding">
    <div class="nav__btnGroup__btn nav__logo">
      MatchEPS
    </div>
    <div class="nav__btnGroup">
      <button class="nav__btnGroup__btn">
          Lorem
      </button>
      <button class="nav__btnGroup__btn">
          Lorem
      </button>
      <button class="nav__btnGroup__btn">
          Lorem
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {

  },
  computed: {
    inLanding() {
      return this.$route.name === 'landing'
    }
  }
}
</script>
