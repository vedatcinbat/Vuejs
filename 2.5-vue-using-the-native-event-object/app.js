const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname: '',
      //fullname: ''
    };
  },
  watch: {
    counter(value) {
      if(value > 50) {
        const that = this;
        setTimeout(function() {
            that.counter = 0;
        }, 2000);
      }
    }
    /*
    * name(value) {
      if(value === '') {
        this.fullname = '';
      }else {
        this.fullname = value + ' ' + 'Cinbat';
      }

    },
    lastname(value) {
        if(value === '') {
            this.fullname = '';
        }else {
            this.fullname = this.name + ' ' + value;
        }
    }*/
  },
  computed: {
    fullname() {
      console.log('Running again...');
      if (this.name === '' || this.lastname === '') {
        return '';
      }
      return this.name + ' ' + this.lastname;
    }

  },
  methods: {
    outputFullName() {
      console.log('Running again...');
      if(this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Cinbat';
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name='';
      this.lastname = '';
    }
  },
});

app.mount('#events');
