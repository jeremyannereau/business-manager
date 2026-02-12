import { createApp } from 'vue';
import App from './App.vue';
import EtapesKanban from './components/EtapesKanban.vue';
import './styles/app.css';

const app = createApp(App);
app.component('EtapesKanban', EtapesKanban);
app.mount('#app');