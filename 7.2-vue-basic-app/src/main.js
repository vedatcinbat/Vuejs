import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import ProfileComponent from "./components/ProfileComponent.vue";
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";
import ComponentC from "./components/ComponentC.vue";
import TestComponent from "./components/TestComponent.vue";

const app = createApp(App)

app.component('friend-contact', FriendContact);
app.component('profile-card', ProfileComponent);
app.component('component-a', ComponentA);
app.component('component-b', ComponentB);
app.component('component-c', ComponentC);
app.component('test-component', TestComponent);

app.mount('#app');
