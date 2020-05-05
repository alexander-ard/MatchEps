<template>
  <div class="home">
    <Carousel :data="carouselData" />
    <div class="main__btnWrapper">
     <router-link
        tag="button"
        class="main__btnWrapper__btn --secondary home__btnStart"
        :to="'/eps-search'"
      >
        Iniciar
        <i class="fas fa-play"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Carousel from '@components/shared/Carousel';
import dataImg1 from '@images/data-1.png';
import dataImg2 from '@images/data-2.png';
import dataImg3 from '@images/data-3.png';

export default {
  name: 'home',
  components: {
    Carousel,
  },
  data() {
    return {
      carouselData: {
        items: [
          {
            title: 'Match EPS',
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.`,
            image: dataImg1,
            class: 'carousel__carouselItem__text__title',
          },
          {
            title:
              'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.`,
            image: dataImg2,
          },
          {
            title:
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            body: `
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.`,
            image: dataImg3,
          },
        ],
      },
    };
  },
};
</script>
