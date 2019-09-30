// app模块
 const app = {
     state: {
        
     },

     actions: {

     },

     mutations: {
         changeState(state, playload){
             state[playload.name] = playload.value
         }
     }
 }

 export default app
