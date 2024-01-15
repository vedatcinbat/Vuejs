import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import ProfileComponent from "./components/ProfileComponent.vue";

const app = createApp(App)

app.component('friend-contact', FriendContact);
app.component('profile-card', ProfileComponent);

app.mount('#app');
