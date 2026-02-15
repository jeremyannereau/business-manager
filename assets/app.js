import { createApp } from 'vue';
import App from './App.vue';
import EtapesKanban from './components/EtapesKanban.vue';
import Dashboard from './components/Dashboard.vue';
import Calendrier from './components/Calendrier.vue';
import Finances from './components/Finances.vue';

// Import du Design System
import './styles/design-system.css';

// Import des composants UI
import Button from './components/ui/Button.vue';
import Card from './components/ui/Card.vue';
import Modal from './components/ui/Modal.vue';
import Badge from './components/ui/Badge.vue';

const app = createApp(App);

// Enregistrer les composants globalement
app.component('Button', Button);
app.component('Card', Card);
app.component('Modal', Modal);
app.component('Badge', Badge);
app.component('EtapesKanban', EtapesKanban);
app.component('Dashboard', Dashboard);
app.component('Calendrier', Calendrier);
app.component('Finances', Finances);

app.mount('#app');