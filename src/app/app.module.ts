import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { FooterComponent } from './footer/footer.component';
import { GroupTrainingComponent } from './group-training/group-training.component';
import { GroupTravelComponent } from './group-travel/group-travel.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    CoursesComponent,
    FooterComponent,
    GroupTrainingComponent,
    GroupTravelComponent,
    HomeComponent,
    HeaderComponent,
    GalleryComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
