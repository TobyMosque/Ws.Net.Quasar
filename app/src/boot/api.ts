import { boot } from 'quasar/wrappers'
import { createApi } from 'src/composables/api'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ store }) => {
  createApi(store)
})
