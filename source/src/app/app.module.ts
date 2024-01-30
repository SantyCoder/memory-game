import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Global handler Services
import { RequestService } from './request/request.service';
//-Main wrapper component
import { AppComponent } from './app.component';
//- Public components
import { LoginComponent } from './public/login/login.component';
//- Public routes
import { APP_ROUTES } from './app-routing/app.routes';
//-Common components
import { CommonComponentsModule } from './common/common.module';
import { MemoryMarvelComponent } from './public/memory-marvel/memory-marvel.component';
import { TabsComponent } from './public/tabs/tabs.component';
import { ResumeComponent } from './public/resume/resume.component';
import { MenuComponent } from './template/menu/menu.component';
//Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//
const firebaseConfig = {
  apiKey: "AIzaSyB-rDMjn67sEJ03WK6TwsHZhR3cNf_hOAE",
  authDomain: "santiago-marcelino-flores.firebaseapp.com",
  projectId: "santiago-marcelino-flores",
  storageBucket: "santiago-marcelino-flores.appspot.com",
  messagingSenderId: "42484585207",
  appId: "1:42484585207:web:6c8ef7b1a8acf3e90c39f2",
  measurementId: "G-NCKXD5BCNS"
};
//
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MemoryMarvelComponent,
    TabsComponent,
    ResumeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonComponentsModule
  ],
  providers:[
    RequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
