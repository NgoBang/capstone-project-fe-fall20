<template>
  <div class="root">
    <swiper ref="mySwiper" :options="swiperOptions" class="slider">
      <swiper-slide class="slide">
        <v-skeleton-loader type="image">
          <v-img
            src="@/assets/home/cover_1.png"
            class="slide-img d-none d-md-block"
            :aspect-ratio="16 / 9"
            alt="banner"
          >
          </v-img>
          <v-img
            src="@/assets/home/cover_1.png"
            class="slide-img d-md-none"
            :aspect-ratio="9 / 16"
            alt="banner"
          >
          </v-img>
        </v-skeleton-loader>

        <div class="slide-content">
          <div class="slide-title">TANNING STUDIO ĐẦU TIÊN TẠI VIỆT NAM</div>
          <button class="slide-cta-btn" @click="showScheduleModal">
            Đặt lịch ngay
          </button>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>

      <swiper-slide class="slide">
        <v-skeleton-loader type="image">
          <v-img
            src="@/assets/home/cover_2.png"
            class="slide-img d-none d-md-block"
            :aspect-ratio="16 / 9"
            alt="banner"
          >
          </v-img>
          <v-img
            src="@/assets/home/cover_2.png"
            class="slide-img d-md-none"
            :aspect-ratio="9 / 16"
            alt="banner"
          >
          </v-img>
        </v-skeleton-loader>

        <div class="slide-content">
          <div class="slide-title"></div>
          <button class="slide-cta-btn" @click="showScheduleModal">
            Đặt lịch ngay
          </button>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>

      <swiper-slide class="slide">
        <v-skeleton-loader type="image">
          <v-img
            src="@/assets/home/cover_7.jpg"
            class="slide-img d-none d-md-block"
            :aspect-ratio="16 / 9"
            alt="banner"
          >
          </v-img>
          <v-img
            src="@/assets/home/cover_7.jpg"
            class="slide-img d-md-none"
            :aspect-ratio="9 / 16"
            alt="banner"
          >
          </v-img>
        </v-skeleton-loader>

        <div class="slide-content">
          <div class="slide-title"></div>
          <button class="slide-cta-btn" @click="showScheduleModal">
            Đặt lịch ngay
          </button>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>

      <swiper-slide class="slide">
        <v-skeleton-loader type="image">
          <v-img
            src="@/assets/home/cover_6.jpg"
            class="slide-img d-none d-md-block"
            :aspect-ratio="16 / 9"
            alt="banner"
          >
          </v-img>
          <v-img
            src="@/assets/home/cover_6.jpg"
            class="slide-img d-md-none"
            :aspect-ratio="9 / 16"
            alt="banner"
          >
          </v-img>
        </v-skeleton-loader>

        <div class="slide-content">
          <div class="slide-title"></div>
          <button class="slide-cta-btn" @click="showScheduleModal">
            Đặt lịch ngay
          </button>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "slides",
  components: {},
  methods: {
    showScheduleModal() {
      this.$store.commit("toggleScheduleModal", true);
    },
  },
  data() {
    return {
      swiperOptions: {
        // autoplay: {
        // delay: 13500,
        //   disableOnInteraction: false,
        // },
        pagination: {
          el: ".swiper-pagination",
        },
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
      },
      slides: [1, 2, 3, 4, 5],
    };
  },
};
</script>

<style lang="scss" scoped>
.root {
  .slider {
    min-height: 56.25vw;
    max-height: 970px;
    .slide {
      position: relative;
      width: 100%;
      height: 100%;
      .slide-img {
        background: #c6c6c6;
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
      .slide-content {
        position: absolute;
        top: 200px;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .slide-title {
          color: #ffffff;
          font-size: 32px;
          margin-bottom: 24px;
        }
        .slide-cta-btn {
          color: #ffffff;
          background: rgba(197, 197, 197, 0.4);
          border: 1px solid #ffffff;
          border-radius: 2px;
          padding: 12px 24px;
          text-transform: uppercase;
          font-weight: bold;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .root {
    .slider {
      .slide {
        .slide-content {
          .slide-title {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.VueCarousel-pagination {
  position: absolute;
  bottom: 16px;
}
</style>
