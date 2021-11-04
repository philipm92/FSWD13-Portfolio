import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { QualificationComponent } from './qualification/qualification.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CodeReviewsComponent } from './code-reviews/code-reviews.component';
import { CtaSectionComponent } from './cta-section/cta-section.component';
import { CodeDetailsComponent } from './code-details/code-details.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    QualificationComponent,
    AboutMeComponent,
    CodeReviewsComponent,
    CtaSectionComponent,
    CodeDetailsComponent,
    ContactMeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
