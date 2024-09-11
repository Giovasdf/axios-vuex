import { createStore } from 'vuex'
import axios from 'axios'
import dolarState from './modules/dolarState'

//https://mindicador.cl/api

export default createStore({
   modules:{
        dolarState
   },
    actions:{
        async fetchIndicadoresEconomicos({commit}){
            try{
                const response = await axios.get('https://mindicador.cl/api')

                commit('changeDolarPrice',response.data.dolar.valor)
                console.log(response.data.dolar.valor)
            }catch(error){
                console.error("Hubo un error al hacer el llamado de la api",error)
            }
        }
    },
    mutations:{
        changeDolarPrice(state,dolarPrice){
            state.dolarPrice = dolarPrice
        }
    }

})