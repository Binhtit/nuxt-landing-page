<template>
  <div class="menumobile-wrap">
    <ul class="mobile-navbar">
      <li v-for="(navlink, id) in navlinks" :key="id" class="nav-item"
          @click="hideMenuMobile()">
        <nuxt-link
          class="nav-link _navheader"
          :to="{ path: '/', hash: `#${navlink.hash}` }"
          >{{ navlink.name }}</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    navlinks: {
      type: Array || Object,
      default() {},
    },
  },
  methods: {
    hideMenuMobile() {
      this.$store.commit('setShowMenu', false)
    },
  },
}
</script>

<style lang="scss" scoped>
.menumobile-wrap {
  position: fixed;
  display: flex;
  padding-top: 70px;
  width: 100vw;
  height: 100vh;
  background: var(--mainBackground);
  z-index: 3;
  top: 0;
  left: 0;
  .mobile-navbar {
    padding: 0;
    width: 100%;
    .nav-item {
      text-align: center;
      width: 100%;
      .nav-link {
        color: #fff;
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 1px;
        text-transform: uppercase;
        padding: 32px 0;
        margin: 0 30px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
      ._active {
        color: #f31616;
      }
    }
  }
}
</style>