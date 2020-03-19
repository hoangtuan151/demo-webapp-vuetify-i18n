<i18n>
{
  "en": {
    "greeting": "Recent page"
  },
  "vn": {
    "greeting": "Trang lịch sử"
  }
}
</i18n>

<template>
  <v-content>
    <v-container>
      <v-layout text-center>
        <v-flex>
          <v-alert text color="info">
            {{ $t('greeting') }}
          </v-alert>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>