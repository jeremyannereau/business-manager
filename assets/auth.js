import { createApp } from 'vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';

// Import du Design System
import './styles/design-system.css';

// Import des composants UI
import Button from './components/ui/Button.vue';

// Détecte quelle page on affiche
const rootElement = document.getElementById('auth-app');

if (rootElement) {
    const app = createApp({});
    
    // Enregistrer les composants
    app.component('Button', Button);
    app.component('Login', Login);
    app.component('Register', Register);
    
    app.mount('#auth-app');
}