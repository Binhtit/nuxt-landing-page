<template>
  <div class="aboutus-wrap row">
    <div class="aboutus_banner col-12 p-0">
      <div class="_title size-full">
        <div class="banner_content text-uppercase">CASINO<br />PLAYGAME</div>
      </div>
      <img
        class="_banner w-full"
        src="~/assets/images/aboutus_banner.png"
        alt=""
      />
    </div>
    <div class="aboutus_intro col-12 p-0">
      <div class="container intro__content">
        <div class="_sub-title-red text-center text-uppercase">bplay game</div>
        <div class="_sub-title-white mt-2 text-center text-uppercase">
          who we are?
        </div>
        <div class="_sub-content mx-auto">
          BPlay was founded in 2015 by a group of highly skilled professionals
          with over 15 years of experience in the iGaming industry. Today we are
          an international company with more than 100 employees and have
          operations in Malta, Ukraine, Romania, Norway, India, Myanmar and
          Taiwan...
        </div>
        <img class="w-full" src="~/assets/images/aboutus_map.png" alt="" />
      </div>
    </div>
    <div class="aboutus_experience col-12 p-0">
      <div class="container position-relative">
        <div class="experience_content">
          <p class="_year-num text-danger text-center m-0">15</p>
          <p class="_year-text text-uppercase text-center text-white m-0">years</p>
          <div class="line-red mx-auto"></div>
          <p class="_description text-center text-white pb-3">
            of experience<br />in the <span class="text-danger">iGaming</span>
          </p>
        </div>
      </div>
      <img
        class="_banner w-full"
        src="~/assets/images/aboutus_banner_landscape.png"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="scss">
.aboutus-wrap {
  background: url('~assets/images/aboutus_background_chip.png');
  background-repeat: no-repeat;
  background-position: 7% 40%;
  .aboutus_banner {
    position: relative;
    ._title {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(180deg, #fff, #ffecbc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      .banner_content {
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 96px;
        line-height: 113px;
        text-align: center;
        letter-spacing: 10px;
      }
    }
    ._banner {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .aboutus_intro {
    ._sub-title-red {
      color: #ff3232;
      font-family: 'Raleway', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      letter-spacing: 10px;
    }
    ._sub-title-white {
      font-family: 'Raleway', sans-serif;
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      line-height: 56px;
      text-align: center;
      color: #fdfdfd;
    }
    ._sub-content {
      max-width: 824px;
      font-family: 'Mulish', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 32px;
      text-align: center;
      color: #e6e6e6;
      margin-top: 32px;
    }
  }
  .aboutus_experience {
    .experience_content {
      position: absolute;
      width: 357px;
      // height: 460px;
      left: 0;
      top: 0;
      background: rgba(21, 22, 30, 0.9);
      border-radius: 0 0 20px 20px;
      ._year-num {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 200px;
        line-height: 234px;
      }
      ._year-text {
        font-family: 'Mulish', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 70px;
        line-height: 88px;
      }
      .line-red {
        width: 96px;
        height: 1px;
        background: #f41616;
        margin: 0.5rem 0;
      }
      ._description {
        font-family: 'Mulish', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 38px;
        text-align: center;
      }
    }
    ._banner {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>