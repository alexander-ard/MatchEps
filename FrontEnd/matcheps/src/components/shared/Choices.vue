<template>
  <select class="epsSearch__input" multiple></select>
</template>

<script>
import Choices from 'choices.js';

export default {
  name: 'Choices',
  props: ['options', 'choices'],
  watch: {
    choices: {
      handler() {
        this.createEpsAutocomp();
      },
      deep: true,
    },
  },
  data() {
    return {
      choicesInput: null,
    };
  },
  methods: {
    createEpsAutocomp() {
      const el = document.querySelector('.epsSearch__input');
      this.choicesInput = new Choices(el, {
        choices: this.choices,
        removeItemButton: true,
        searchFloor: 1,
        itemSelectText: '',
        noChoicesText: 'No hay opciones disponibles.',
        noResultsText: 'No se encontraron coincidencias.',
      });

      el.addEventListener('change', () => {
        this.changed();
      });
    },
    changed() {
      this.$emit('changedSelections', this.choicesInput.getValue(true));
    },
  },
};
</script>
