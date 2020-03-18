<template>
  <v-app>
    <v-app-bar app>
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>
        Login
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-layout text-center>
          <v-flex>
            <v-alert text color="warning">
              Login page
            </v-alert>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>