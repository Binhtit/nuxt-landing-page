<template>
  <div
    id="partners"
    class="partners-wrap row"
    :class="{ _mobile: $device.isMobile }"
  >
    <div class="container">
      <div class="row">
        <div class="_image_mb col-lg-6 col-md-12">
          <img
            class="_partnerimg"
            src="~/assets/images/partners/partner_img.png"
            alt=""
          />
        </div>
        <div class="_content_mb col-lg-6 col-md-12">
          <div class="mb-2">
            <p class="_subtitle text-danger text-uppercase">bplay game</p>
            <h2 class="_title text-white text-uppercase">partners</h2>
          </div>
          <p class="_text-content text-white">
            As a BPlay client you will benefit from content from more than 20
            top tier providers. Based on your casino’s concept and targeted
            markets, we will tailor the perfect portfolio of games to offer to
            your players.
          </p>
          <div class="row">
            <div class="col-md-4 col-sm-4 col-4">
              <img
                class="_responsiveimg"
                src="~/assets/images/partners/sbtech.png"
                alt=""
              />
            </div>
            <div class="col-md-4 col-sm-4 col-4">
              <img
                class="_responsiveimg"
                src="~/assets/images/partners/iovation.png"
                alt=""
              />
            </div>
            <div class="col-md-4 col-sm-4 col-4">
              <img
                class="_responsiveimg"
                src="~/assets/images/partners/seon.png"
                alt=""
              />
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-12 d-flex justify-content-around">
              <img
                class="_responsiveimg"
                src="~/assets/images/partners/hogaming.png"
                alt=""
              />
              <img
                class="_responsiveimg"
                src="~/assets/images/partners/vivo.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.partners-wrap {
  padding: 180px 0 160px 0;
  background: url('~/assets/images/partners/background_partner.png');
  background-repeat: no-repeat;
  background-size: 50% auto;
  ._subtitle {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 10px;
  }
  ._title {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 56px;
  }
  ._text-content {
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 1px;
  }

  // --layoutmobile--
  &._mobile {
    ._image_mb {
      order: 2;
      padding-top: 40px;
      ._partnerimg {
        width: 305px;
        height: auto;
      }
    }
    ._content_mb {
      order: 1;
      ._subtitle {
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        letter-spacing: 5px;
        margin-bottom: 8px;
      }
      ._title {
        font-weight: 800;
        font-size: 26px;
        line-height: 31px;
        text-align: center;
        letter-spacing: 1px;
        margin-bottom: 24px;
      }
      ._text-content {
        font-size: 16px;
        line-height: 32px;
        text-align: center;
        margin-bottom: 30px;
      }
      ._responsiveimg {
        width: 110px;
      }
    }
  }
}

@media screen and (max-width: 1300px) {
  .partners-wrap {
    ._responsiveimg {
      width: 150px;
    }
  }
}

@media screen and (max-width: 991px) {
  .partners-wrap {
    ._partnerimg {
      width: 600px;
      display: block;
      margin: 0 auto;
      padding-bottom: 25px;
    }
  }
}

@media screen and (max-width: 767px) {
  .partners-wrap {
    padding: 0 0 50px 0;
    ._partnerimg {
      width: 350px;
      display: block;
      margin: 0 auto;
      padding-bottom: 25px;
    }
    ._subtitle {
      text-align: center;
    }
    ._title {
      text-align: center;
    }
    ._responsiveimg {
      width: 150px;
    }
  }
}

@media screen and (max-width: 539px) {
  .partners-wrap {
    ._responsiveimg {
      width: 110px;
    }
  }
}
</style>