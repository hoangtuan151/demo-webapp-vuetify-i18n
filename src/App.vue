<template>
  <div id="app" v-cloak>
      <keep-alive exclude="">
        <router-view/>
      </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
