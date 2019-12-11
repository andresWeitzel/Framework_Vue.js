const app = new Vue({
    el: '#app',
    data: {
        mensaje: 'Usando las propiedades Computadas',
        contador: 0,

    },
    methods: {

    },
    computed: {
        invertido() {
            //Con la propiedad split separamos el string en un arreglo y con el reverse invertimos las posiciones del arreglo y con el join sacamos los espacios y las comillas
            return this.mensaje.split('').reverse().join('');
        },
        color() {
            //Retornaremos un objeto
            return {
                'bg-success': this.contador <= 10,
                'bg-warning': this.contador > 10 && this.contador < 20,
                'bgv-danger': this.contador >= 20,

            }
        }
    }
})