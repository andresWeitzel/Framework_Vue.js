Vue.component('padre', {

    template: //html
        `
        <div class="p-5 bg-dark text-white">
        <!--Creamos un componente padre para pasarle luego al hijo-->
                <h2>Componente Padre:{{numeroPadre}}</h2>
                <!--Creamos otro componente(hijo) dentro del componente principal llamado padre-->
                <!--Utilizaremos las funciones Props de Vue.js-->
                <button class="btn btn-danger" @click="numeroPadre--">-</button>
                <button class="btn btn-danger" @click="numeroPadre++">+</button>
                <hijo :numero="numeroPadre"></hijo>
                       
        </div>
        `,
    data() {
        return {
            numeroPadre: 0,
        }
    }
})