import Vue from 'vue'
import Vuex from 'vuex'
import moduleUpdate from "../store/moduleUpdate";
Vue.use(Vuex)

// the root, initial state object
export default new Vuex.Store({
    state: {
        data: [
            { id:0, tieude: "mon 0", cachlam: 'cach lam mon 0 o day', nguyenlieu: "nguyenlieu0"  },
            { id:1, tieude: "mon 1", cachlam: 'cach lam mon 1 o day', nguyenlieu: "nguyenlieu1" },
            { id:2, tieude: "mon 2", cachlam: 'cach lam mon 2 o day', nguyenlieu: "nguyenlieu2" }
        ]
    },

    mutations:{
        DELETE(state,id)
        {
            console.log("da goi delete voi id = "+id);
            delete state.data[id];
        },
        UPDATE(state, x)
        {
            state.data[x.id] = x;
        },
        ADD(state,x)
        {
            var max = state.data.reduce(function(prev, current) {
                if (+current.id > +prev.id) {
                    return current;
                } else {
                    return prev;
                }
            });
            x.id = max+1;
            state.data.push(x);
            
        }

    },
    actions:{
        delete (context,id) {
            console.log("da goi action delete voi id = "+id);
            context.commit('DELETE',id);
        },
        update (context,x) {
            context.commit('UPDATE',x);
        },
        add (context,x) {
            context.commit('ADD',x);
        },
        
    },
    getters:{
        getdata: state => {
            return state.data;
          },
        getdatabyid: (state) => (id) => {
            return state.data.find(x => x.id == id);
        }

    }/*,    //DE TEST
    modules: {
        moduleUpdate
        // other modules here ...
      }*/

})