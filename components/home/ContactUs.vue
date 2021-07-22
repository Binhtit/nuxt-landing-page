<template>
  <div id="contactus" class="contactus-wrap row">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <img class="_logo" src="/logo.svg" alt="" />
        </div>
        <div class="col-lg-6 col-md-12">
          <p class="_title text-white text-uppercase">contact us</p>
          <div class="d-flex">
            <div class="pt-2 mr-3">
              <img
                class="mr-2"
                src="~/assets/images/icons/landing/place.svg"
                alt=""
              />
            </div>
            <div class="_address text-white">
              2901 Marmora Road, Glassgow, Seattle, WA 98122-1090
            </div>
          </div>
          <div class="d-flex">
            <div class="pt-1 mr-3">
              <img
                class="mr-2"
                src="~/assets/images/icons/landing/mail.svg"
                alt=""
              />
            </div>
            <div class="_email text-white">info@bplay.com</div>
          </div>
        </div>
      </div>
    <CommonFooter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contactus-wrap {
  background: url('~/assets/images/contactus_background.png');
  background-size: cover;
  padding-top: 300px;
  ._logo {
    width: 241px;
    height: auto;
  }
  ._title {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 34px;
    line-height: 40px;
  }
  ._address {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 146.28%;
  }
  ._email {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 146.28%;
  }
}
</style>