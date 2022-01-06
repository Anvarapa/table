<template>
  <div class="app-wrapper">
    <div class="app">
      <Table
      :times_data="TIMES"
      />
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Table from './components/table/table'

export default {
  name: "app",
  components: {
    Table
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'TIMES'
    ])
  },
  methods: {
    ...mapActions([
      'GET_TIMES_FROM_API'
    ])
  },
  mounted() {
    this.GET_TIMES_FROM_API()
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
