<template>
  <div class="table">
    <div class="times" v-for="column_data in times_data" :key="column_data.id">
      <div :class="{background:column_data.dt}">
        <div class="clock">

          <!-- В таблице из даты "newDate()" указал часы времени с помощью .getHours()  -->
          <p class="startTime" v-if="column_data.startTime">{{new Date(column_data.startTime).getHours()}}</p> -
          <p class="endTime" v-if="column_data.endTime">{{ new Date(column_data.endTime).getHours() }}</p>
        </div>
        <p class="notFree">{{ column_data.dt }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "table",
  components: {},
  data(){
    return{
      hours: '',
    }
  },
  props: {
    times_data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
  },
}
</script>

<style lang="scss" scoped>
.table {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  max-width: 800px;
  width: 100%;
  margin: 20px auto;
  border-radius: 3px;
  background-color: #545454;
  color: #fff;
  max-height: 680px;
  height: 100%;
  overflow: scroll;


  .times {
    display: flex;
    justify-content: space-between;
    width: 100%;
    transition: .2s;
    cursor: pointer;
    border: 1px solid black;


    &:hover {
      background-color: #3c3c3c;
    }

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 50px;
      align-items: center;
      padding: 0 10px;

      .clock {
        width: 110px;
      }

      .notFree {
        max-width: 100px;
        width: 100%;
      }
    }

    .background {
      background-color: #72725f;
      height: 50px;
    }
  }
}
</style>
