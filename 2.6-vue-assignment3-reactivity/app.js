const app = Vue.createApp({
    data() {
        return {
            resultText: '',
            counter: 0,
        }
    },
    watch: {
        result() {
            const that = this;
            setTimeout(function() {
                that.counter = 0;
            }, 5000);
        }
    },
    computed: {
        result() {
            if(this.counter < 37) {
                this.resultText = 'Not there yet';
                return this.resultText;
            }else if(this.counter > 37) {
                this.resultText = 'Too Much !';
                return this.resultText;
            }else if(this.counter === 37) {
                this.resultText = '37';
                return this.resultText;
            }
        }
    },
    methods: {
        add(num) {
            this.counter += num
        },
    }

});

app.mount("#assignment");