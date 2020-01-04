import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { GroupTrainingComponent } from './group-training/group-training.component';
import { GroupTravelComponent } from './group-travel/group-travel.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EventsComponent } from './events/events.component';
import { DanceTravelComponent } from './dance-travel/dance-travel.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'courses', component:CoursesComponent},
  {path:'group-training', component:GroupTrainingComponent},
  {path:'group-travel', component:GroupTravelComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'home', component:HomeComponent},
  {path:'dance-travel', component:DanceTravelComponent},
  { path: 'events', component: EventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
