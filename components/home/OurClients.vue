<template>
  <div
    id="ourclient"
    class="ourclients-wrap row"
    :class="{ _mobile: $device.isMobile }"
  >
    <div class="container">
      <p class="_subtitle text-danger text-uppercase">bplay game</p>
      <h2 class="_title text-white text-uppercase">out clients</h2>
      <div class="row justify-content-center">
        <div class="_client col-2dot4 col-sm-4">
          <img
            class="_client_img"
            src="~/assets/images/clients/client1.png"
            alt=""
          />
        </div>
        <div class="_client col-2dot4 col-sm-4">
          <img
            class="_client_img"
            src="~/assets/images/clients/client2.png"
            alt=""
          />
        </div>
        <div class="_client col-2dot4 col-sm-4">
          <img
            class="_client_img"
            src="~/assets/images/clients/client3.png"
            alt=""
          />
        </div>
        <div class="_client col-2dot4 col-sm-4">
          <img
            class="_client_img"
            src="~/assets/images/clients/client4.png"
            alt=""
          />
        </div>
        <div class="_client col-2dot4 col-sm-4">
          <img
            class="_client_img"
            src="~/assets/images/clients/client5.png"
            alt=""
          />
        </div>
        <div class="_client col-2dot4 col-sm-4">
          <img
            class="_client_img"
            src="~/assets/images/clients/client6.png"
            alt=""
          />
        </div>
        <div class="_client col-2dot4 col-sm-4">
          <img
            class="_client_img"
            src="~/assets/images/clients/client7.png"
            alt=""
          />
        </div>
        <div class="_client col-2dot4 col-sm-4">
          <img
            class="_client_img"
            src="~/assets/images/clients/client8.png"
            alt=""
          />
        </div>
        <div class="_client col-2dot4 col-sm-4">
          <img
            class="_client_img"
            src="~/assets/images/clients/client9.png"
            alt=""
          />
        </div>
        <div class="_client col-2dot4 col-sm-4">
          <img
            class="_client_img"
            src="~/assets/images/clients/client10.png"
            alt=""
          />
        </div>
        <div class="_client col-2dot4 col-sm-4">
          <img
            class="_client_img"
            src="~/assets/images/clients/client11.png"
            alt=""
          />
        </div>
        <div class="_client col-2dot4 col-sm-4">
          <img
            class="_client_img"
            src="~/assets/images/clients/client12.png"
            alt=""
          />
        </div>
        <div class="col-md-12"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ourclients-wrap {
  ._subtitle {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 10px;
    margin-bottom: 8px;
  }
  ._title {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    margin-bottom: 10px;
  }
  ._client {
    margin-top: 65px;
    &_img {
      width: 100%;
      height: auto;
    }
  }
  // --layoutmobile--
  &._mobile {
    ._subtitle {
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      letter-spacing: 5px;
    }
    ._title {
      font-size: 26px;
      line-height: 31px;
      text-align: center;
      letter-spacing: 1px;
    }
    ._client {
      margin-top: 22px;
      ._client_img {
        width: 100px;
        height: auto;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .ourclients-wrap {
    ._client {
      &_img {
        max-width: 110px;
      }
    }
  }
  .col-sm-4 {
    flex: 0 0 33.333333% !important;
    max-width: 33.333333% !important;
  }
}
</style>