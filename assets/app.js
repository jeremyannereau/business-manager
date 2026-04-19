import { createApp } from 'vue';
import App from './App.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';

// Design System
import './styles/design-system.css';

// Composants UI globaux
import Button from './components/ui/Button.vue';
import Card from './components/ui/Card.vue';
import Modal from './components/ui/Modal.vue';
import Badge from './components/ui/Badge.vue';

const app = createApp(App);

// Composants UI enregistrés globalement
app.component('Button', Button);
app.component('Card', Card);
app.component('Modal', Modal);
app.component('Badge', Badge);

// Les composants Auth sont enregistrés séparément
app.component('Login', Login);
app.component('Register', Register);

app.mount('#app');
