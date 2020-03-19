<i18n>
{
  "en": {
    "greeting": "Favorite page"
  },
  "vn": {
    "greeting": "Trang yêu thích"
  }
}
</i18n>

<template>
  <v-content>
    <v-container>
      <v-layout text-center>
        <v-flex>
          <v-alert text color="error">
            {{ $t('greeting') }}
          </v-alert>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>