<template>
    <div>
        <h1>El valor del dolar hoy es: {{dolarPrice}}</h1>
        <button @click="fetchIndicadoresEconomicos">Obtener Indicadores economicos</button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Indicadores',
    computed:{
        ...mapState(['dolarPrice'])
    },
    methods:{
        ...mapActions(['fetchIndicadoresEconomicos'])
    }
}
</script>