import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlifStoryComponent } from './alif-story/alif-story.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'alifStory',component: AlifStoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
