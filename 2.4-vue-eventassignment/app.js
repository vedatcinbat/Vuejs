const app = Vue.createApp({
    data() {
        return {
            inputValue: "",
            confirmedInput: ""
        }
    },
    methods: {
        showAlert() {
            alert("This is alert !");
        },
        saveInput(event) {
            this.inputValue = event.target.value;
        },
        confirmInput() {
            this.confirmedInput = this.inputValue;
        }
    }
});


app.mount("#assignment");