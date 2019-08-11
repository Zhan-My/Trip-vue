export default {
    /* actions: {
      changeCity(ctx,city) {
        ctx.commit('changeCity',city)
      }
    }, */

    /* ----- 让点击事件由dispatch改为commit()，即可去除actions ----- */
    changeCity(state, city) {
        state.city = city
        try {
            localStorage.city = city
        } catch (error) {

        }
    }
}