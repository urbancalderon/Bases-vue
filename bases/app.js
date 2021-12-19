const app = Vue.createApp({
    data(){
        return {
            quote: "I'm Batman",
            author: "Bruce Wayne"
        }
    },
    methods: {
        changeQuote() {
            console.log('Hola mundo')
            this.author = "Urbano Calderon"

            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }

    }
})

app.mount('#myApp')