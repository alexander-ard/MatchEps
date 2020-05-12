<template>
  <div class="landing">
    <Carousel :data="carouselData" />
    <div class="main__btnWrapper">
      <router-link tag="button" class="main__btnWrapper__btn --secondary home__btnStart" :to="'/home'">
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
  name: 'Landing',
  components: {
    Carousel,
  },
  data() {
    return {
      carouselData: {
        items: [
          {
            title: 'Match EPS',
            body: `Con MatchEPS tienes la posibilidad de hacer una
                  comparativa entre las EPS más usadas, y elegir la que más se acomode a tus necesidades.`,
            image: dataImg1,
            class: 'carousel__carouselItem__text__title',
          },
          {
            title:
              '¡Compara!',
            body: `Compara el rendimiento de las diferentes EPS y toma una desición informada.`,
            image: dataImg2,
          },
          {
            title:
              '¡Opina!.',
            body: `
              Participa, opina y comparte tus experiencias con otros usuarios de MatchEPS `,
            image: dataImg3,
          },
        ],
      },
    };
  },
};
</script>
