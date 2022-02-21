<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" placeholder="Add Information..." maxlength="110"/>
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false,
        }
        this.$emit('add-todo', newTodo)
        this.title = ''
      }
    },
  },
};
</script>

<style scoped>
form{
    margin-top: 20px;
    margin-bottom: 20px;
}
input{
    width: 600px;
    font-weight: bold;
    padding: 6px;
    outline: none;
     border-radius: 6px;
     border:2px solid rgb(3, 67, 119);

    
}
button{
    background: transparent;
    width: 100px;
    color:rgb(3, 67, 119); 
    font-weight: bold;
    outline: none;
    border:2px solid rgb(3, 67, 119);
    padding: 6px;
    margin-left: 20px;
    border-radius: 6px;
    transition:ease-in-out .5s;
}
button:hover{
    background: rgb(3, 67, 119);
    color: #fff;
}
</style>