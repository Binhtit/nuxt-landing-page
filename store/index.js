export const state = () => ({
    refScroll: '',
    isShowMenu: false,
    locales: ['en', 'vi'],
    locale: 'en',
})

export const mutations = {
    addRefScroll(state, payload) {
        state.refScroll = payload
    },
    setShowMenu(state, payload) {
        state.isShowMenu = payload
    },
    SET_LANG(state, locale) {
      if (state.locales.includes(locale)) {
        state.locale = locale;
      }
    },
}
export const getters = () => ({
    isShowMenu: (state) => {
        return state.isShowMenu;
    }
})