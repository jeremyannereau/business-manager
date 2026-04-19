import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  // Identifiant unique de l'app — à personnaliser par client si multi-tenant
  appId: 'com.businessmanager.app',
  appName: 'Business Manager',

  // Dossier que Capacitor embarque dans la WebView
  // = le build mobile dédié (pas le même que public/build)
  webDir: 'mobile/www',

  // En dev : pointe vers le serveur Symfony local
  // En prod : commenter ce bloc server{} entièrement
  server: {
    // Remplacez par l'IP de votre machine sur le réseau local
    // pour tester sur un vrai téléphone Android connecté en WiFi
    url: 'http://192.168.1.126:8000',
    cleartext: true, // autorise HTTP (dev uniquement)
  },

  android: {
    // Couleur de la status bar (reprend la couleur primaire du thème)
    backgroundColor: '#667eea',
  },

  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#667eea',
      showSpinner: false,
    },
  },
};

export default config;
