<i18n>
{
  "en": {
    "side-nav": {
      "login": "Login"
    },
    "main-nav": {
      "recent": "Recent",
      "favorite": "Favorites"
    }
  },
  "vn": {
    "side-nav": {
      "login": "Đăng nhập"
    },
    "main-nav": {
      "recent": "Gần đây",
      "favorite": "Yêu thích"
    }
  }
}
</i18n>

<template>
  <v-app>

    <!-- App menu -->
    <v-navigation-drawer v-model="sidebar" app>
      <v-list dense nav>
        <v-list-item link to="/login">
          <v-list-item-icon>
            <v-icon>mdi-login</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ $t('side-nav.login') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <!-- App bar -->
    <v-app-bar dense app>
      <v-app-bar-nav-icon @click="sidebar = true" />

      <v-toolbar-title>
        {{ $t('app-title') }}
      </v-toolbar-title>

      <v-spacer/>

      <v-btn text icon @click="changeLocale">
        {{ currentLocale }}
      </v-btn>
    </v-app-bar>

    <keep-alive>
      <router-view />
    </keep-alive>

    <!-- Bottom nav bar -->
    <v-bottom-navigation grow v-model="bottomNav" app>
      <v-btn value="recent" to="/recent">
        <span>{{ $t('main-nav.recent') }}</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>
      <v-btn value="favorites" to="/favorite">
        <span>{{ $t('main-nav.favorite') }}</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-bottom-navigation>

  </v-app>
</template>

<script>
import {localeMixin} from '@/utils/locale-mixin'

export default {
  mixins: [localeMixin],
  data () {
    return {
      sidebar: false,
      bottomNav: 'recent'
    }
  },
  computed: {
    currentLocale () {
      return this.$i18n.locale.toUpperCase()
    }
  },
  methods: {
    changeLocale () {
      if (this.currentLocale === 'EN') {
        this.$store.commit('SET_APP_LOCALE', 'vn')
      } else {
        this.$store.commit('SET_APP_LOCALE', 'en')
      }
    }
  }
}
</script>