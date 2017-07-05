import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TaskComponent} from './task/task.component';
import {TaskDetailComponent} from './task-detail/task-detail.component';
import {HttpModule} from '@angular/http';
// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {RouterModule, Routes} from '@angular/router';
import {TaskService} from './task.service';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'allTask', component: TaskComponent},
  {path: 'newTask', component: TaskDetailComponent},
  {path: 'detail/:id', component: TaskDetailComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
