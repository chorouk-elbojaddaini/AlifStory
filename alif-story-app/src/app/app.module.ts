import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlifStoryComponent } from './alif-story/alif-story.component';
import { RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CategorieContentComponent } from './sharepage/categorie-content/categorie-content.component';
import { CardContentComponent } from './sharepage/card-content/card-content.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AlifStoryComponent,
    StoreComponent,
    CategorieContentComponent,
    CardContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
