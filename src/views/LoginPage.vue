<i18n>
{
  "en": {
    "title": "Login",
    "greeting": "Welcome to Login"
  },
  "vn": {
    "title": "Đăng nhập",
    "greeting": "Trang đăng nhập"
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
              {{ $t('greeting') }}
            </v-alert>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>