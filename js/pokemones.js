const {createApp} = Vue

createApp({
    data(){
        return{
            pokemones: [],
            url: 'https://matiaschirivella.pythonanywhere.com/pokemon',
            cargando: true,
            error: false
        }
    },

    methods:{
        fetchData(url){
            fetch(url)
            .then(response => response.json())
            .then(data => {
                this.pokemones = data;
                this.cargando = false;
            })
            .catch(err => {
                console.error(err);
                this.error = true;
            })
        },

        eliminar(id){
            const url = 'https://matiaschirivella.pythonanywhere.com/pokemon/' + id;
            let options = {
                method: 'DELETE'
            }
            var consulta = confirm("Estas seguro que desea eliminar este pokemon?");

            if (consulta){
                fetch(url,options)
                .then(response => response.json())
                .then(data => {
                    location.reload();
                })
                .catch(err => {
                    console.error(err)
                })
            }
            else{
                
            }
        }
    },

    created(){
        this.fetchData(this.url);
    }
}).mount('#app')