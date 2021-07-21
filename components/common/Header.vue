<template>
  <nav class="header-wrap row navbar navbar-expand-lg">
    <div class="container d-flex justify-content-between align-items-center">
      <a class="navbar-brand" href="#">
        <img src="/logo.svg" alt="" />
      </a>

      <div class="navlink-wrap">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <nuxt-link class="nav-link _navheader" to="#">about us</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link _navheader" to="#">products</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link _navheader" to="#">partners</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link _navheader" to="#"
              >out clients</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link _navheader" to="#">contact us</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="nav-item dropdown">
        <div class="_lang">
          <button class="dropdown-toggle text-white">
            <img
              class="mr-2"
              src="~/assets/images/icons/flag_langs/eng.png"
              alt=""
            /><span class="_lang">eng</span>
          </button>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
        <div class="_bar-stack">
          <div class="_barstack navbar-toggler">
            <img src="~/assets/images/icons/landing/bar_stack.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    
          <div class="_blur"></div>
  </nav>
</template>

<style lang="scss">
.header-wrap {
  font-family: 'Raleway', sans-serif;
  background: var(--mainBackground);
  .navlink-wrap {
    display: flex;
    max-width: 715px;
  }
  .nav-item {
    .nav-link {
      &._navheader {
        color: var(--linkColor);
        font-weight: 700;
        padding: 11px 0;
        text-transform: uppercase;
        border-bottom: var(--mainBackground) 2px solid;
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
    ._lang {
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

    }
    ._bar-stack {
      margin-left: 28px;
     
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
