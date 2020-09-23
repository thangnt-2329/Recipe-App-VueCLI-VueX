<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <div v-for="(item, index) in mydata" :key="index">
      <li>
      <label class="container">
          <span>{{item.tieude}}</span>
          <router-link :to="`/update/${item.id}`" tag="button" class="forbutton1">Sửa</router-link>
          <button class="forbutton2" @click="remove(item)" >Xóa</button>
      </label>
      </li>
      </div>
<router-link :to="`/add`" tag="button" class="forbutton1">Thêm công thức</router-link>

  </div>
</template>





<script>
export default {
  name: 'RecipeList',

  data () {
    console.log(this.$store.state);
    return {
      msg: 'Danh sách công thức',
      mydata: this.$store.getters.getdata 
    }
  },

  methods: {
    remove(item){
      const index = this.mydata.indexOf(item);
      console.log(this.mydata);
      this.$store.dispatch('delete', index); 
      this.mydata.splice(index,1); 
      
      console.log(index);
     
    }
  }
}
</script>










<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.lol {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.forbutton1{
   background-color: #4CAF50;
  color: white;
  padding: 8px 40px;
  margin: 10px 30px;
  border: none;
  border-radius: 14px;
  cursor: pointer;

}
.forbutton2{
   background-color: #4CAF50;
  color: white;
  padding: 8px 40px;
  margin: 0px 0px;
  border: none;
  border-radius: 14px;
  cursor: pointer;

}

input[type=text] {
  width: 100%;
  padding: 12px 30px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.gach{
  text-decoration-line: line-through;
}

</style>
