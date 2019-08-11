let defaultCity = '上海'
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (error) {

}

export default {
    // city: localStorage.city?localStorage.city:'上海'
    /* ----- 同上 ----- */
    // city: localStorage.city || '上海'

    city: defaultCity
}