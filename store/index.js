export const state = () => ({
  refScroll: '',
})

export const mutations = {
  addRefScroll(state, payload) {
    state.refScroll = payload
  },
}
