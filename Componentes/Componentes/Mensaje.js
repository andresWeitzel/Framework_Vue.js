//Crearemos nuestro primer componente en vue
Vue.component('mensaje', {
    //Utilizaremos un template para poder darle estilos a nuestro componente
    //Tambien utilizaremos los templates literales(``) de ecmascript6 para poder utilizar diversas etiquetas
    //Todo debe estar dentro de un contenedor 
    //Para ver los colores de este componente debemos instalar una extension de EcmaScript6(es6-string-html).
    //Como ultimo paso hacemos un comentario en html y tendremos el formato como tal
    template: //html
        `<div>
                <h1>{{mensaje}}</h1>
                <h3>{{mensaje}}</h3> 
                    
        </div>`,
    //Utilizaremos una funcion data para que devuelva los datos del componente para asi simplificar cosas de la instancia de vue 
    data() {
        return {
            mensaje: 'Usando los componentes de Vue '
        }
    }


})

/* --DEJAMOS DE INSTANCIAR DE ESTA FORMA VUE PARA PODER UTILIZAR COMPONENTES Y DE ESTA FORMA NO INSTANCIAR EN TODAS LAS CARPETAS QUE TENEMOS

const app = new Vue({
    el: '#app',
    methods: {

    }

})*/