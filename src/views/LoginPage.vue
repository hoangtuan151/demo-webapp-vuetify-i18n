<i18n>
{
  "en": {
    "title": "Login"
  },
  "vn": {
    "title": "Đăng nhập"
  }
}
</i18n>

<template>
  <v-app>
    <v-app-bar app>
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>
        {{ $t('title') }}
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-layout text-center>
          <v-flex>
            <v-alert text color="warning">
              {{ welcomeText }}
            </v-alert>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import {localeMixin} from '@/utils/locale-mixin'
import helper from '@/utils/helper'

export default {
  mixins: [localeMixin],
  computed: {
    welcomeText () {
      return helper.getText('login-welcome')
    }
  }
}
</script>
