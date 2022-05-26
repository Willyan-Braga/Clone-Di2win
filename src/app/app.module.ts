import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CadastroComponent } from './Pages/cadastro/cadastro.component';
import { LoginComponent } from './Pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { TrocarSenhaComponent } from './Pages/trocar-senha/trocar-senha.component';
import { FirstEngineComponent } from './Pages/first-engine/first-engine.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { SecondEngineComponent } from './Pages/second-engine/second-engine.component';
import { ThirdEngineComponent } from './Pages/third-engine/third-engine.component';
import { FourthEngineComponent } from './Pages/fourth-engine/fourth-engine.component';
import { FooterComponent } from './components/footer/footer.component';
import { SobreComponent } from './Pages/sobre/sobre.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './Pages/home/home.component';
import { EngineTestComponent } from './components/engine-test/engine-test.component';





@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    NavbarComponent,
    CadastroComponent,
    LoginComponent,
    TrocarSenhaComponent,
    FirstEngineComponent,
    PageNotFoundComponent,
    SecondEngineComponent,
    ThirdEngineComponent,
    FourthEngineComponent,
    FooterComponent,
    SobreComponent,
    ContactComponent,
    EngineTestComponent
    
  
  ],
  imports: [
    BrowserModule, AppRoutingModule,FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
