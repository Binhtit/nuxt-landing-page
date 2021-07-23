<template>
  <nav
    class="header-wrap mx-0 row navbar navbar-expand-lg"
    :class="{ _mobile: $device.isMobile }"
  >
    <div class="container d-flex justify-content-between align-items-center">
      <a v-show="!isShowMenu" class="navbar-brand" href="#">
        <img class="_logo" src="/logo.svg" alt="" />
      </a>

      <div class="navlink-wrap">
        <ul class="navbar-nav mr-auto">
          <li v-for="(navlink, id) in navlinks" :key="id" class="nav-item">
            <nuxt-link
              class="nav-link _navheader"
              :to="{ path: '/', hash: `#${navlink.hash}` }"
              >{{ navlink.name }}</nuxt-link
            >
          </li>
        </ul>
      </div>
      <div class="nav-item dropdown" :class="{ _showmenu: isShowMenu }">
        <div class="lang-wrap position-relative">
          <button
            class="dropdown-toggle text-white"
            @click.stop="toggleDropdownLang()"
          >
            <img
              class="mr-2"
              :src="getIconLocale($i18n.locale)"
              alt=""
            /><span class="_lang">{{ $t('home.lang') }}</span>
          </button>
          <div v-show="isShowLang" class="dropdown-lang">
            <p class="_sublang" href="#" @click="changeLang('en')">eng</p>
            <p class="_sublang" href="#" @click="changeLang('vi')">vie</p>
          </div>
        </div>
        <div class="_bar-stack" @click="toggleShowMenu()">
          <div class="_barstack navbar-toggler">
            <img src="~/assets/images/icons/landing/bar_stack.svg" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="_blur"></div>
  </nav>
</template>

<script>
// import { mapGetters} from 'vuex';
export default {
  props: {
    localeIcon: {
      type: Array || Object,
      default() {},
    },
    navlinks: {
      type: Array || Object,
      default() {},
    },
  },
  data() {
    return {
      isShowLang: false,
    }
  },
  computed: {
    isShowMenu() {
      return this.$store.state.isShowMenu
    },
  },
  methods: {
    changeLang(lang) {
      this.toggleDropdownLang()
      this.$store.commit('SET_LANG', lang)
      this.$router.push({
        path: `${this.$router.currentRoute.path}?lang=${lang}`,
      })
      this.getIconLocale(lang);
    },
    toggleDropdownLang() {
      return (this.isShowLang = !this.isShowLang)
    },
    toggleShowMenu() {
      const toggleValue = !this.isShowMenu
      this.$store.commit('setShowMenu', toggleValue)
    },
    getIconLocale(code) {
      const locale = this.localeIcon.find((obj) => obj.code === code);
      return locale ? locale.icon : require("~/assets/images/icons/flag_langs/vie.png");
    },
  },
}
</script>

<style lang="scss">
.header-wrap {
  z-index: 99;
  font-family: 'Raleway', sans-serif;
  background: var(--blurBackground);
  position: fixed;
  top: 0;
  left: 0;
  height: 63px;
  width: 100%;
  .navlink-wrap {
    display: flex;
    max-width: 715px;
    ._active {
      border-bottom: #f41616 2px solid !important;
    }
  }
  .nav-item {
    .nav-link {
      &._navheader {
        color: var(--linkColor);
        font-weight: 700;
        padding: 11px 0;
        text-transform: uppercase;
        border-bottom: var(--blurBackground) 2px solid;
        &:hover {
          border-bottom: #8b1212 2px solid;
        }
      }
    }
    &:not(:last-child) {
      margin-right: 56px;
    }
  }
  .dropdown {
    display: flex;
    align-items: center;
    margin-left: 16px;
    &._showmenu {
      width: 100%;
      justify-content: space-between;
    }
    .dropdown-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      padding: 14px 16px;
      width: 130px;
      height: 48px;
      border: 1px solid #fff;
      box-sizing: border-box;
      border-radius: 25px;
      text-transform: uppercase;
      font-weight: 700;
      transition: all 0.3s ease;
      ._lang {
        margin-right: 22px;
        transition: all 0.3s ease;
      }
      &:hover {
        background: #fff;
        & ._lang {
          color: #1a1c25;
        }
        &::after {
          color: #1a1c25;
        }
      }
    }
    ._bar-stack {
      margin-left: 28px;
      cursor: pointer;
    }
  }
  ._blur {
    display: none;
    background: #1a1c25;
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }
  .lang-wrap {
    .dropdown-lang {
      background: var(--blurBackground);
      position: absolute;
      width: 100%;
      margin-top: 15px;
      ._sublang {
        color: white;
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        padding: 5px 0;
        letter-spacing: 0.25px;
        text-align: center;
        transition: all 0.3s ease;
        cursor: pointer;
        &:hover {
          background: white;
          color: #1a1c25;
        }
      }
    }
  }

  // --layoutmobile--
  &._mobile {
    ._logo {
      width: 90px;
      height: auto;
    }
    .dropdown {
      .dropdown-toggle {
        width: 95px;
        height: 36px;
        ._lang {
          font-size: 14px;
          font-weight: 600;
          margin: 0;
        }
      }
      ._bar-stack {
        margin-left: 15px;
      }
    }
    .lang-wrap {
      .dropdown-lang {
        background: var(--blurBackground);
        position: absolute;
        width: 100%;
        margin-top: 11px;
      }
    }
  }
}

@media screen and (min-width: 1500px) {
  .container {
    max-width: 1398px !important;
  }
}
@media screen and (max-width: 1200px) {
  .nav-item {
    &:not(:last-child) {
      margin-right: 25px !important;
    }
  }
}
@media screen and (max-width: 991px) {
  .navlink-wrap {
    display: none !important;
  }
  ._barstack {
    display: block;
  }
}
</style>
