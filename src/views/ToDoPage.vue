<template>
  <div class="home">
    <b-row>
      <b-col cols="6" offset="3">

        <b-card class="text-center">

          <ToDoInput />
          <ToDoList />
          <ToDoControls />

        </b-card>

      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import ToDoList from '../components/ToDoList';
import ToDoInput from '../components/ToDoInput';
import ToDoControls from '../components/ToDoControls';

export default {
  name: 'ToDoPage',
  components: {
    ToDoList,
    ToDoInput,
    ToDoControls
  }
}
</script>
