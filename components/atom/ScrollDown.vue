<template>
  <div
    class="scrolldown-wrap"
    @click="$emit('toggle-value')"
  >
    <div class="position-relative">
      <div class="_text text-white">Scroll</div>
      <div class="_icon mt-1">
        <img class="_iconimg" src="~/assets/images/icons/landing/scroll_down.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@keyframes animated-icon {
  0% {
    opacity: 1;
    transform: translateY(0) translate(-50%, -50%);
  }
  100% {
    opacity: 0;
    transform: translateY(10px) translate(-50%, -50%);
  }
}
@keyframes animated-text {
  0% {
    opacity: 0.5;
    transform: translateY(0);
  }
  100% {
    opacity: 1;
    transform: translateY(-10px);
  }
}

.scrolldown-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 1;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 150%;
  cursor: pointer;
  ._text {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 1px;
    animation: animated-text 1.2s ease infinite;
  }
  ._icon {
    position: absolute;
    left: 50%;
    top: 150%;
    transform: translate(-50%, -50%);
    animation: animated-icon 1.2s ease infinite;
  }
  &:hover ._text {
    color: #fff !important;
    font-weight: bold;
    letter-spacing: 5px;
    transition: all 0.3s ease;
  }
}

@media screen and (max-width: 767px) {
  .scrolldown-wrap {
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