<template>
  <div
    class="scrolltop-wrap _smooth"
    :class="{ 'd-none': !isScroll }"
    @click="$emit('scrollTop', componentFirst)"
  >
    <img
      class="_iconimg"
      src="~/assets/images/icons/landing/scroll_top.svg"
      alt=""
    />
    <div class="_text text-white mt-1">Top</div>
  </div>
</template>

<script>
export default {
  props: {
    isScroll: {
      type: Boolean || String,
      default() {
        return false
      },
    },
    navlinks: {
      type: Array || Object,
      default() {},
    },
  },
  computed: {
    componentFirst() {
      if (!this.navlinks) return false
      return this.navlinks[0].hash
    },
  },
}
</script>

<style lang="scss">
@keyframes animated-scroll {
  0% {
    opacity: 0;
    transform: translateY(10px) translate(-50%, -50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0) translate(-50%, -50%);
  }
}
.scrolltop-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 1;
  transform: translate(-50%, -50%);
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

._smooth {
  animation: animated-scroll 1.2s ease;
  opacity: 1;
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
