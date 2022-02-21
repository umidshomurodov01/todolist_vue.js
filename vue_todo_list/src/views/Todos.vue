<template>
  <div>
    <h2>Todo page</h2>
    <div id="nav">
    <router-link to="/">Home</router-link>
    </div>
    <hr />
    <div class="add">
      <AddTodo @add-todo="addTodo" />
      <select v-model="filter">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not Completed</option>
      </select>
    </div>

    <Loader v-if="loading" /> 
    <TodoList
      v-else-if="filteredTodos.length"
      @remove-todo="removeTodo"
      :todos="filteredTodos"
    />
    <p v-else>No Todos!</p>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";
import Loader from "@/components/Loader.vue";

export default {
  data() {
    return {
      todos: [],
      loading: true,
      filter: "all",
    };
  },
  components: {
    TodoList,
    AddTodo,
    Loader,
  },
  computed: {
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      }
      if (this.filter === "completed") {
        return this.todos.filter((t) => t.completed);
      }
      if (this.filter === "not-completed") {
        return this.todos.filter((t) => !t.completed);
      }
    },
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          this.todos = json;
          this.loading = false;
        }, 1000);
      });
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
  },
};
</script>

<style scoped>
.add {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
select{
  width: 200px;
  padding: 5px;
  outline: none;
 border:2px solid rgb(3, 67, 119);
  border-radius: 6px;

}
p{
  font-size: 25px;
  font-weight: bolds;
}
#nav {
  padding: 15px;
  background:rgb(3, 67, 119);
  
}
#nav a {
  font-weight: bold;
  color: #fff;
   text-decoration: none;
   font-size: 26px;
   font-weight: bold;
   margin-left: 20px;
}

#nav a.router-link-exact-active {
 color: cyan;
}
</style>