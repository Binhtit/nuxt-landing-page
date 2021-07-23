<template>
  <div class="footer-wrap row pb-0" :class="{ _mobile: $device.isMobile }">
    <div class="container">
      <div class="row _line pb-0">
        <div class="_footerimg col-12">
          <div class="_image">
            <div class="_license-img">
              <img src="~/assets/images/footer/license.png" alt="" />
            </div>
            <div class="_group-img">
              <img
                class="_subimg"
                src="~/assets/images/footer/sabs.png"
                alt=""
              />
              <img
                class="_subimg"
                src="~/assets/images/footer/curacao.png"
                alt=""
              />
              <img
                class="_subimg"
                src="~/assets/images/footer/itech.png"
                alt=""
              />
            </div>
          </div>
          <p class="_copyright text-right">
            Copyright © 2020 bplay.com. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.footer-wrap {
  padding-top: 75px;
  padding-bottom: 35px;
  ._line {
    border-top: 1px #424657 solid;
    padding-top: 32px;
    padding-bottom: 32px;
  }
  ._copyright {
    color: #cecece;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 28px;
  }
  ._footerimg {
    display: flex;
    justify-content: space-between;
    ._image {
      display: flex;
      & :not(:last-child) {
        margin-right: 20px;
      }
    }
  }

  // --layoutmobile--
  &._mobile {
    padding-top: 32px;
    ._footerimg {
      display: block;
      ._image {
        display: flex;
        flex-direction: column;
        align-items: center;
        ._license-img {
          order: 2;
          width: 145px;
          height: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 25px;
        }
        ._group-img {
          order: 1;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
      }
    }
    ._copyright {
      padding-top: 42px;
      font-size: 12px;
      line-height: 28px;
    }
  }
}

@media screen and (max-width: 991px) {
  .footer-wrap {
    ._footerimg {
      display: block;
      margin: 0 auto;
    }
    ._copyright {
      text-align: center !important;
    }
  }
}

@media screen and (max-width: 549px) {
  .footer-wrap {
    ._footerimg {
      display: block;
      margin: 0 auto;
      ._image {
        display: block;
        ._license-img {
          display: flex;
          justify-content: center;
        }
        ._group-img {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
</style>