import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBo2Y1750VAnktyTqSoSacwkf9ijDTo4JU",
  authDomain: "dashboard-poli.firebaseapp.com",
  projectId: "dashboard-poli",
  storageBucket: "dashboard-poli.appspot.com",
  messagingSenderId: "354605868799",
  appId: "1:354605868799:web:987b8842d1895114f3ceca",
  measurementId: "G-7RTWZ9HTB6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
