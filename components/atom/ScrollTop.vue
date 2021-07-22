<template>
  <div class="scrolltop-wrap">
    <img
      class="_iconimg"
      src="~/assets/images/icons/landing/scroll_top.svg"
      alt=""
    />
    <div class="_text text-white mt-1">Top</div>
  </div>
</template>

<style lang="scss">
.scrolltop-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 1;
  transform: translate(-50%,-50%);
  right: 30px;
  bottom: 30px;
  cursor: pointer;
  ._text {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 1px;
  }
}

@media screen and (max-width: 767px) {
  .scrolltop-wrap {
    ._text {
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 1px;
    }
    ._iconimg {
      width: 21px;
    }
  }
}
</style>