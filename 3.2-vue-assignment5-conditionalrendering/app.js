const app = Vue.createApp({
    data() {
        return {
            InputTask: '',
            tasks: [],
            isTaskListVisible: true
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.InputTask);
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        changeListVisibility() {
            this.isTaskListVisible = !this.isTaskListVisible;
        }
    },
});
app.mount('#assignment')