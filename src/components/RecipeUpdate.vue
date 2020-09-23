<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ thongbao }}</h3>
      <ul>
      <li>
        <input type="text" placeholder="Nhập tiêu đề" v-model="data.tieude">
      </li>
    </ul>
     <ul>
      <li>
       <textarea rows="3" cols="50" placeholder="Nhập nguyên liệu" v-model="data.nguyenlieu"></textarea>
      </li>
    </ul>
     <ul>
      <li>
       <textarea class ="forcachlam" rows="3" cols="50" placeholder="Nhập cách thức làm" v-model="data.cachlam"></textarea>
      </li>
    </ul>
      <ul>
      <li>
       <button type="submit" class="forbutton1" @click="add">Cập nhật</button>
      </li>
      <li>
       <router-link :to="`/`" tag="button" class="forbutton1">Quay lại</router-link>
      </li>
    </ul>



   
  </div>
</template>





<script>
import { mapGetters } from 'vuex';
//import moduleUpdate from "../store/moduleUpdate";

export default {
  name: 'RecipeUpdate',
  data () {
    return {
      msg: "Chi tiết công thức",
      thongbao: '',
      data: {}
    }
  },



  created() {   //khoi tao gia trị
    if(this.$route.params.id) //neu id ton tai
        {
          console.log("Update: get ok: "+this.$route.params.id);
          this.data = {...this.getid(this.$route.params.id)}; 
          console.log("Update: gan ok"+this.data.id);
        }
  },

  computed: {
    ...mapGetters({getid: 'getdatabyid'})
  },

/*test
created() {   //khoi tao gia trị
    if(this.$route.params.id) //neu id ton tai
        {
          console.log("Update: get ok: "+this.$route.params.id);
          this.$store.dispatch('moduleUpdate/fetchData',this.$route.params.id )
          this.data =  this.$store.getters['moduleUpdate/getdata']; 
          console.log(this.data);
        }
  },
*/

  methods: {
    add(){
      if(this.data.tieude && this.data.nguyenlieu && this.data.cachlam)
      {
          console.log("add true");
          if(this.$route.params.id)
          {
            this.$store.dispatch('update', this.data);
             this.thongbao = "Cập nhật thành công";
          }
          else
          {
            this.$store.dispatch('add', this.data);
             this.thongbao = "Cập nhật thành công";
          }

      }
      else
      {
        console.log("add false");
        this.thongbao = "Vui lòng không để trường trống";
      }
     
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

.forbutton3 {
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
textarea {
  width: 100%;
  height: 100px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #ffffff;
  resize: none;
}

.forcachlam{
  height: 200px;
}
</style>
