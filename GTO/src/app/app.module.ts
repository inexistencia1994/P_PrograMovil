import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    AngularFireModule, AngularFirestoreModule, AngularFireAuthModule, AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"bibliomovil-91326","appId":"1:400460088850:web:0e5b25e5838b4837a9bacb","storageBucket":"bibliomovil-91326.appspot.com","apiKey":"AIzaSyAJ3Kw8Tli5jmxFi_Nb7K4VMl21tGhYOVU","authDomain":"bibliomovil-91326.firebaseapp.com","messagingSenderId":"400460088850","measurementId":"G-4XZXVQL8TZ"})), provideAuth(() => getAuth()), provideStorage(() => getStorage())],
  bootstrap: [AppComponent],
})
export class AppModule {}
