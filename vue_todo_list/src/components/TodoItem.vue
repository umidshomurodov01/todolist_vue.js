<template>
  <li>
    <span :class="{ done: todo.completed }">
      <input type="checkbox" @change="todo.completed = !todo.completed" />
      <strong>{{ index + 1 }}</strong>
      {{ todo.title | uppercase }}
    </span>
    <button @click="$emit('remove-todo', todo.id)" class="rm">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  filters:{
      uppercase(value){
          return value.toUpperCase()
      }
  }
};
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: .8rem 2rem;
  margin-bottom: 1rem;
  background:rgb(3, 67, 119);
  color: #fff;
   border-radius: 6px;

  
}
.rm {
    width: 28px;
    height: 28px;
    font-size: 18px;
  background: red;
  border-radius: 50%;
  font-weight: bold;
  border: none;
  color: white;
  font-weight: bold;
  
}
.done {
  text-decoration: line-through;

}
input {
  margin-right: 1rem;
  outline: none;
}
</style>