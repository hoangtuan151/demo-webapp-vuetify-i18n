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
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <!-- App bar -->
    <v-app-bar dense app>
      <v-app-bar-nav-icon @click="sidebar = true" />

      <v-toolbar-title>
        Web App
      </v-toolbar-title>

      <v-spacer/>

      <v-btn text icon @click="switchLang()">
        VN
      </v-btn>
    </v-app-bar>

    <keep-alive>
      <router-view />
    </keep-alive>

    <!-- Bottom nav bar -->
    <v-bottom-navigation grow v-model="bottomNav" app>
      <v-btn value="recent" to="/recent">
        <span>Recent</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>
      <v-btn value="favorites" to="/favorite">
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-bottom-navigation>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sidebar: false,
      bottomNav: 'recent'
    }
  }
}
</script>