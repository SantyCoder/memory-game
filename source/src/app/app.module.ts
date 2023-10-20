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
