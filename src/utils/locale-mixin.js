import i18n from '@/locale/i18n'
import {mapState} from 'vuex'

export var localeMixin = {
  computed: {
    ...mapState(['app_locale'])
  },
  watch: {
    app_locale (newValue) {
      this.$i18n.locale = newValue
      i18n.locale = newValue
    }
  },
  created: function () {
    this.$i18n.locale = this.app_locale
    i18n.locale = this.app_locale
  }
}
