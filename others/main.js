Vue.component('task-list', {

    template: `<div>
                    <task v-for="task in tasks"> {{ task.description }} </task>
                </div>`
    ,

    data(){
    return {
        tasks: [
            {description: 'Learn laravel' ,completed:true },
            {description: 'Learn Vue' ,completed:true },
            {description: 'Learn API' ,completed:true },
            {description: 'Learn Testing' ,completed:true },
        ]
    }

    }
});
Vue.component('task', {
    template: '<li> <slot></slot> </li>'
});

new Vue({
    el : '#root'
});
