//INSTANCIAMOS VUE(LLAMAMOS A LA LIBRARIA DE VUE A TRAVES DEL SCRIPT CDN).
const app = new Vue({
    //Con esto le decimos que por el id app sera gestiondo con vue(el y data son de vue)
    el: '#app',
    //Trabajaremos con  datos
    data: {
        titulo: 'Ingrese el tipo de  Medicamento',
        //array simple
        //array con objetos
        medicamentos: [
            { nombre: 'Analgésicos', cantidad: 85769857 },
            { nombre: 'Antiácidos y antiulcerosos', cantidad: 9857 },
            { nombre: ' Antialérgicos', cantidad: 7586475648 },
            { nombre: ' Antidiarreicos y laxantes', cantidad: 834343 },
            { nombre: ' Antiinfecciosos', cantidad: 859675 },
            { nombre: ' Antiinflamatorios', cantidad: 598795 },
            { nombre: ' Antipiréticos', cantidad: 985796857 },
            { nombre: '  Antitusivos y mucolíticos', cantidad: 645735 },
        ],
        nuevoMedicamento: '',
        total: 0

    },
    //Crearemos un objeto llamado methods
    methods: {
        //Creamos la funcion 
        agregarMedicamento() {
            //Agregamos valores/objetos al array medicamnetos
            //Con this accedemos a diferentes propiedades de nuestra instancia(app)
            this.medicamentos.push({
                nombre: this.nuevoMedicamento,
                cantidad: 0

            });
            this.nuevoMedicamento = '';

        }
    },
    //lOS COMPUTED son arreglos que nos sirven para crear las funciones que necesitemos
    computed: {
        sumarCantidades() {
            //Parte de 0
            this.total = 0;
            //Hacemos un recorrido con for 
            //Este loop´se ejecuta cada vez que hacemos un cambio en la cantidad de medicamentos
            for (totalmedic of this.medicamentos) {
                this.total = this.total + totalmedic.cantidad;

            }
            //Retornamos el nuevo valor
            return this.total;
        }
    }


})