const app = Vue.createApp({
    data() {
        return {
            inputClass: "",
            paragraphClass: "",
            isButtonClicked: true,
            isVisibleClass: "",
            bgColorText: "",
            bgColorClass: ""
        }
    },
    watch: {
        inputClass(value) {
            if(value === "user1") {
                this.paragraphClass = "user1";
            }else if(value === "user2") {
                this.paragraphClass = "user2";
            }else {
                this.paragraphClass = "";
            }
        },
        isButtonClicked(value) {
            if(value) {
                this.isVisibleClass = "visible";
            }else {
                this.isVisibleClass = "hidden";
            }
        },
        bgColorText(value) {
            this.bgColorClass = 'backgroundColor:' + value;
        }
    },
    methods: {
        setButtonClicked() {
            this.isButtonClicked = !this.isButtonClicked;
        }
    }
});
app.mount("#assignment");