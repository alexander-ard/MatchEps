<template>
  <div class="carousel">
    <span @click="previous()">
      <i class="fas fa-arrow-circle-left carousel__navBtn carousel__navBtn--prev"></i>
    </span>
    <span @click="next()">
      <i class="fas fa-arrow-circle-right carousel__navBtn carousel__navBtn--next"></i>
    </span>

    <div class="siema carousel">
      <div class="carousel__carouselItem" v-for="item in data.items" :key="item.title">
        <div class="carousel__carouselItem__text">
          <div
            :class="[!item.class ? 'carousel__carouselItem__text__header' : item.class]">
              {{ item.title }}
          </div>
          <div class="carousel__carouselItem__text__body">
            {{ item.body }}
          </div>
        </div>
        <div class="carousel__carouselItem__image">
          <img class="carousel__carouselItem__image--1" :src="item.image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Siema from 'siema';

export default {
  name: 'Carousel',
  props: ['data'],
  data() {
    return {
      carousel: null,
    };
  },
  mounted() {
    this.carousel = new Siema({
      duration: 200,
      easing: 'ease-out',
      perPage: 1,
      startIndex: 0,
      draggable: true,
      threshold: 20,
      loop: true,
    });
  },
  methods: {
    previous() {
      this.carousel.prev();
    },
    next() {
      this.carousel.next();
    },
  },
};
</script>
