console.log('vue ok', Vue)
const root = new Vue({
    el: '#root',
    data:{
        newTask:'',
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
        },
        addTask(){
            if(this.newTask){
                const newActivity ={ text: this.newTask, done: false};
                this.tasks.push(newActivity);
                this.newTask= ''
            }
            this.newTask.push(this.newTask)

        }
    }
})