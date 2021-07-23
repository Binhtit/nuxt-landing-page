<template>
  <div
    id="products"
    class="ourproducts-wrap row"
    :class="{ _mobile: $device.isMobile }"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-12">
          <p class="ourproducts_subtitle text-danger text-uppercase">
            bplay game
          </p>
          <h2 class="ourproducts_title text-white text-uppercase">
            our products
          </h2>
        </div>
        <div class="col-lg-8 col-md-12">
          <p class="ourproducts_content text-white">
            BPlay’s high quality iGaming Platform offers a complete solution for
            your casino. Get the full White Label turnkey solution or the
            Seamless API with our comprehensive selection of games. Through our
            global network of premium partners such as Vivo Gaming, SBTech and
            HoGaming you will have access to the best Live Casino, Sportsbook,
            Slots, Table Games, Number Games and Fishing Games on the market.
          </p>
        </div>
      </div>
      <div v-if="!$device.isMobile" class="products-wrap row">
        <div
          v-for="(product, id) in products"
          :key="id"
          class="col-lg-4 col-md-6 col-sm-6"
        >
          <AtomProduct :product="product" />
        </div>
      </div>
      <VueSlickCarousel v-else :arrows="false" v-bind="settings" class="products-wrap row">
        <div v-for="(product, id) in products" :key="id" class="product-card">
          <AtomProduct :product="product" />
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel },
  props: {
    products: {
      type: Array || Object,
      default() {},
    },
  },
  data() {
    return {
      settings: {
        dots: true,
        infinite: true,
        centerPadding: '20px',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
      },
    }
  },
}
</script> 

<style lang="scss">
.ourproducts-wrap {
  background: url('~assets/images/ourproducts_background.png');
  background-size: 100% 100%;
  padding: 300px 0;
  margin-top: -55px;
  .ourproducts {
    &_subtitle {
      font-family: 'Raleway', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 10px;
    }
    &_title {
      font-family: 'Raleway', sans-serif;
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      line-height: 56px;
    }
    &_content {
      font-family: 'Mulish', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 30px;
      letter-spacing: 1px;
    }
  }
  .products-wrap {
    margin-top: 15px;
    .card {
      background: none;
      margin-top: 70px;
      border: none;
      .product-title {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .card-title {
          position: absolute;
          font-family: 'Raleway', sans-serif;
          font-style: normal;
          font-weight: bold;
          font-size: 30px;
          line-height: 35px;
        }
      }
      .card-text {
        font-family: 'Mulish', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 28px;
      }
    }
  }

  // --layoutmobile--
  &._mobile {
    padding-top: 120px;
    background: url('~assets/images/ourproducts_background.png');
    background-size: 100% 100%;
    margin-top: -35px;
    .ourproducts {
      &_subtitle {
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 5px;
        text-align: center;
      }
      &_title {
        font-weight: 800;
        font-size: 26px;
        line-height: 31px;
        letter-spacing: 1px;
        text-align: center;
        margin-bottom: 24px;
      }
      &_content {
        font-size: 16px;
        line-height: 32px;
        text-align: center;
      }
    }
    .products-wrap {
      margin-top: 15px;
      .card {
        width: 253px;
        padding-left: 15px;
        background: none;
        border: none;
        margin-top: 0;
        .card-body {
          .product-title {
            ._bg-title {
              width: 210px;
              height: auto;
            }
            .card-title {
              font-weight: bold;
              font-size: 16px;
              line-height: 19px;
              text-align: center;
              letter-spacing: 1px;
            }
          }
          .card-text {
            font-weight: 600;
            font-size: 14px;
            line-height: 26px;
            text-align: center;
            margin-top: 10px !important;
          }
        }
      }
    }
    .slick-slider {
      .slick-dots {
        bottom: -35px;
        li {
          button {
            &::before {
              font-size: 12px;
              color: red !important;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1199px) {
  .ourproducts-wrap {
    .products-wrap {
      .card {
        .product-title {
          .card-title {
            font-size: 25px;
            line-height: 35px;
          }
          ._bg-title {
            width: 250px;
            height: auto;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .ourproducts-wrap {
    padding: 150px 0;
    .products-wrap {
      .card {
        width: 252px;
        .product-title {
          .card-title {
            font-size: 25px;
            line-height: 35px;
          }
          ._bg-title {
            width: 200px;
            height: auto;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 559px) {
  .ourproducts-wrap {
    padding: 100px 0;
    .products-wrap {
      .card {
        width: 200px;
        .product-title {
          .card-title {
            font-size: 20px;
            line-height: 25px;
          }
          ._bg-title {
            width: 150px;
            height: auto;
          }
        }
      }
    }
  }
}
</style>