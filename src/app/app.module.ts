import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgOptimizedImage} from "@angular/common";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        NgOptimizedImage,
        provideFirebaseApp(() => initializeApp({"projectId":"memorieweb","appId":"1:871681609641:web:0111d6d33fb31f27337eb8","storageBucket":"memorieweb.appspot.com","apiKey":"AIzaSyBOmj13i5S7C-KAli_9xum1dA1jcGjf4_8","authDomain":"memorieweb-f8adf.firebaseapp.com","messagingSenderId":"871681609641"})),
        provideFirestore(() => getFirestore())
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
