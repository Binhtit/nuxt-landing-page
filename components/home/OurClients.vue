<template>
  <div id="ourclient" class="ourclients-wrap row">
    <div class="container">
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
    ._client {
       margin-top: 65px;
      &_img {
        width: 100%;
        height: auto;
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