<template>
  <div class="landing-wrap" @scroll="handleScroll()">
    <CommonHeader />
    <HomeAboutUs />
    <HomeOurProducts />
    <HomePartners />
    <HomeOurClients />
    <HomeContactUs />
    <AtomScrollTop :is-scroll="isScroll" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScroll: false,
    }
  },
  computed: {},
  watch: {},
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      if (window.scrollY > 100) {
        return (this.isScroll = true)
      }
      return (this.isScroll = false)
    },
  },
}
</script>
