//INSTANCIAMOS VUE(LLAMAMOS A LA LIBRARIA DE VUE A TRAVES DEL SCRIPT CDN).
const app = new Vue({
    //Con esto le decimos que por el id app sera gestiondo con vue(el y data son de vue)
    el: '#app',
    //Trabajaremos con  datos
    data: {
        titulo: 'Hola mundo con Vue',
        //array simple
        //dias: ['Lunes', 'Miercoles', 'Viernes']
        //array con objetos
        dias: [
            { nombre: 'Lunes', mes: 'Enero ' },
            { nombre: 'Miercoles', mes: 'Octubre' },
            { nombre: 'Viernes', mes: 'Diciembre' },
        ],
        nuevoDia: ''

    },
    //Crearemos un objeto llamado methods
    methods: {
        //Creamos la funcion agregarDias
        agregarDias() {
            //Agregamos valores/objetos al array dias
            //Con this accedemos a diferentes propiedades de nuestra instancia(app)
            this.dias.push({
                nombre: this.nuevoDia,
                mes: 'Noviembre'

            })

        },
    }
})