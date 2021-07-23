<template>
  <div
    class="container-fluid main-bg position-relative"
    :class="{ _mobile: $device.isMobile }"
  >
    <Nuxt />
  </div>
</template>