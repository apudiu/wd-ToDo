<template>
  <div id="app">

    <b-nav tabs align="center" class="navigation">
      <b-nav-item
        :active="$route.name === 'todo'"
        :to="{name: 'todo'}"
      >
        TODO
      </b-nav-item>
      <b-nav-item
        :active="$route.name === 'crud'"
        :to="{name: 'crud'}"
      >
          CRUD
      </b-nav-item>
    </b-nav>

    <b-container>
      <div class="content">
        <router-view/>
      </div>
    </b-container>
  </div>
</template>

<style lang="scss">
  .navigation {
    background-color: #4950571c;
  }
  .content {
    margin-top: 30px;
  }
</style>
