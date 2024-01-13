const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            enemyHealth: 100,
            currentUser: 'PLAYER',
            logs: [],
            isGameRunning: true,
            finalSituation: '',
        }
    },
    // comment here
    methods: {
        attack(whoIsAttacking) {
            let log = '';
            let damage;
            if(whoIsAttacking === 'ENEMY') {
                damage = this.calculateDamage(3, 10);
                this.playerHealth -= damage;
                this.currentUser = 'PLAYER';
                log = `${whoIsAttacking} attacked PLAYER for ${damage}`;
                this.logs.push(log);
            }else if(whoIsAttacking === 'PLAYER') {
                damage = this.calculateDamage(5, 12);
                this.enemyHealth -= damage;
                this.currentUser = 'ENEMY';
                log = `${whoIsAttacking} attacked ENEMY for ${damage}`;
                this.logs.push(log);
            }
        },
        heal(whoIsHealing) {
            let log = '';
            let heal;
            if(whoIsHealing === 'PLAYER') {
                heal = this.calculateDamage(3, 10);
                this.playerHealth += heal;
                if(this.playerHealth > 100) {
                    this.playerHealth = 100;
                }
                this.currentUser = 'ENEMY';
                log = `${whoIsHealing} healed for ${heal}`;
                this.logs.push(log);
            }else if(whoIsHealing === 'ENEMY') {
                heal = this.calculateDamage(5, 12);
                this.enemyHealth += heal;
                if(this.enemyHealth > 100) {
                    this.enemyHealth = 100;
                }
                this.currentUser = 'PLAYER';
                log = `${whoIsHealing} healed for ${heal}`;
                this.logs.push(log);
            }
        },
        specialAttack(whoIsAttacking) {
            if(whoIsAttacking === 'PLAYER') {
                this.enemyHealth -= this.calculateDamage(10, 20);
                this.currentUser = 'ENEMY'
            }else if(whoIsAttacking === 'ENEMY') {
                this.playerHealth -= this.calculateDamage(10, 20);
                this.currentUser = 'PLAYER';
            }
        },
        surrender(whoIsSurrendering) {
            if(whoIsSurrendering === 'PLAYER') {
                this.playerHealth = 0;
            }else if (whoIsSurrendering === 'ENEMY') {
                this.enemyHealth = 0;
            }
        },
        calculateDamage(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        startGame() {
            this.playerHealth = 100;
            this.enemyHealth = 100;
            this.isGameRunning = true;
            this.logs = [];
            this.finalSituation = '';
            this.currentUser = 'PLAYER';
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0) {
                this.finalSituation = `You lost! ${this.playerHealth} - ${this.enemyHealth}`;
                this.isGameRunning = false;
            }
        },
        enemyHealth(value) {
            if (value <= 0) {
                this.finalSituation = `You won! ${this.playerHealth} - ${this.enemyHealth}`;
                this.isGameRunning = false;
            }
        }
    },
    computed: {
        playerBarStyles() {
            if(this.playerHealth < 0) {
                return {width: '0%'}
            }else {
                return {width: this.playerHealth + '%'}
            }
        },
        enemyBarStyles() {
            if(this.enemyHealth < 0) {
                return {width: '0%'}
            }else {
                return {width: this.enemyHealth + '%'}
            }
        }
    }
});



app.mount('#game');