<template>
  <div class="listFilter">
    <div class="listFilter__title">
      {{ title }}
    </div>
    <div class="listFilter__list">
      <div
        class="listFilter__list__item"
        :class="[item.checked ? ' --selected' : '']"
        v-for="item in items"
        :key="item.id"
        @click="selectItem(item)"
      >
        <button class="plain listFilter__list__item__check" :class="[item.checked ? ' --selected' : '']">
          <i :class="[item.checked ? 'fas fa-check-circle' : 'far fa-check-circle']"></i>
        </button>
        <span class="listFilter__list__item__name">
          {{ item.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListFilter',
  props: ['list', 'title', 'unique'],
  data() {
    return {
      items: []
    };
  },
  watch: {
    list() {
      this.items = this.list.map((x) => ({
        id: x.id,
        name: x.name,
        checked: false,
      }));
    },
  },
  methods: {
    selectItem(item) {
      if (this.unique) {
        this.items.filter(it => {
          return it.id != item.id
        })
        .map((it) => {
          it.checked = false;
        });
      }

      item.checked = !item.checked;
      this.$emit('change', this.selectedIds);
    },
  },
  computed: {
    selectedIds() {
      let selected = this.items
        .filter((item) => {
          return item.checked;
        })
        .map((item) => {
          return item.id;
        });

      return selected;
    },
  },
};
</script>
