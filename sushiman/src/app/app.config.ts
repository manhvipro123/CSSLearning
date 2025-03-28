import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "sushiman-699be", appId: "1:427219786029:web:b2594064edd1175563dba4", storageBucket: "sushiman-699be.firebasestorage.app", apiKey: "AIzaSyDdgS8F7R0I1SLuuUJ19GctuQHDl3o6jFY", authDomain: "sushiman-699be.firebaseapp.com", messagingSenderId: "427219786029", measurementId: "G-LHRLYQ2JSW" })), provideAuth(() => getAuth())]
};
