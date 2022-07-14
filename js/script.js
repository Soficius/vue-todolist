// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.


console.log('vue ok', Vue)
const root = new Vue({
    el: '#root',
    data:{
        tasks:[
            {text:'fare la spesa', done: true},
            {text:'fare la valigia', done:false},
            {text:'lavarsi i denti', done:false},
            {text:'andare in palestra',done:false},
            {text:'fare da mangiare', done:false}
        ]
    },
    methods: {
        delateTask(index){
            this.tasks.splice(index,1)
        }
    }
})