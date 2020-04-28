<template>
  <div class="carousel">
    <span @click="previous()">
      <i class="fas fa-arrow-circle-left carousel__navBtn carousel__navBtn--prev"></i>
    </span>
    <span @click="next()">
      <i class="fas fa-arrow-circle-right carousel__navBtn carousel__navBtn--next"></i>
    </span>

    <div class="siema carousel">
      <div class="carousel__carouselItem">
        <div class="carousel__carouselItem__text">
          <div class="carousel__carouselItem__text__header">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div class="carousel__carouselItem__text__body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>

      <div class="carousel__carouselItem">
        <div class="carousel__carouselItem__text">
          <div class="carousel__carouselItem__text__header">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <div class="carousel__carouselItem__text__body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>

      <div class="carousel__carouselItem">
        <div class="carousel__carouselItem__text">
          <div class="carousel__carouselItem__text__header">
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur.
          </div>
          <div class="carousel__carouselItem__text__body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import Siema from 'siema';

export default {
    name: 'Carousel',
    data() {
      return {
        carousel: null,
      } 
    },
    mounted() {      
      this.carousel = new Siema({
        duration: 200,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        threshold: 20,
        loop: true
      });
    },
    methods: {
      previous() {
        this.carousel.prev();
      },
      next() {
        this.carousel.next();
      }
    }
}
</script>
