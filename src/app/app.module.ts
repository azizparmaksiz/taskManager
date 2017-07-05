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
import {FormsModule} from "@angular/forms";
const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'allTask', component: TaskComponent},
  {path: 'newTask', component: TaskDetailComponent},
  {path: 'detail/:id', component: TaskDetailComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskDetailComponent
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
