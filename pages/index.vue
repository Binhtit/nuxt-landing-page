<template>
  <div class="landing-wrap" @scroll="handleScroll()">
    <CommonHeader :locale-icon="localeIcon" :navlinks="navlinks" @isShowMenu="isShowMenu = $event" />
    <HomeAboutUs :navlinks="navlinks" @scrollDown="scrollToComponent" />
    <HomeOurProducts :products="products" />
    <HomePartners />
    <HomeOurClients />
    <HomeContactUs />
    <AtomScrollTop
      :navlinks="navlinks"
      :is-scroll="isScroll"
      @scrollTop="scrollToComponent"
    />
    <AtomMenuMobile v-show="isShowMenu" :navlinks="navlinks" />
  </div>
</template>

<script>
import { localeIcon, navlinks, products } from '~/dummydata/dummy.js'

export default {
  data() {
    return {
      localeIcon,
      navlinks,
      products,
      isScroll: false,
    }
  },
  computed: {
    isShowMenu() {
      return this.$store.state.isShowMenu
    },
  },
   watch: {
    "$i18n.locale": {
      deep: true,
      handler() {
        this.getNavlinks();
      },
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    const lang = this.$route.query.lang
    const hash = this.$route.hash
    this.$store.commit('SET_LANG', lang)
    this.getNavlinks();
    if (!hash) {
      return window.scrollTo({ top: 0 })
    }
    window.onload = function () {
      return window.scrollTo({
        top: document.querySelector(hash).offsetTop,
        behavior: 'smooth',
      })
    }
  },
  methods: {
    handleScroll(event) {
      if (window.scrollY > 100) {
        return (this.isScroll = true)
      }
      return (this.isScroll = false)
    },
    scrollToComponent(component) {
      if (!component) return false
      return window.scrollTo({
        top: document.querySelector(`#${component}`).offsetTop,
        behavior: 'smooth',
      })
    },
    getNavlinks() {
      this.navlinks.forEach(
        (e) => (e.name = this.$t(`navlinks.${e.hash}`))
      );
    },
  },
}
</script>