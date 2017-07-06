import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {TaskComponent} from "./task/task.component";
import {TaskDetailComponent} from "./task-detail/task-detail.component";
import {HttpModule} from "@angular/http";
// Imports for loading & configuring the in-memory web api

import {RouterModule, Routes} from "@angular/router";
import {TaskService} from "./task.service";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home/home.component";
import {TaskSearchComponent} from "./task-search/task-search.component";
import {TaskSearchService} from "./task-search.service";
import {
  AutoCompleteModule,
  CalendarModule,
  CodeHighlighterModule,
  DropdownModule,
  TabViewModule
} from "primeng/primeng";
import {AutocompleteComponent} from "./autocomplete/autocomplete.component";
import {Ng2SearchPipeModule} from "./ng2searchpipe/ng2-filter.module";

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
    HomeComponent,
    TaskSearchComponent,
    AutocompleteComponent,

  ],
  imports: [
    BrowserModule,
    DropdownModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    AutoCompleteModule,
    TabViewModule,
    CodeHighlighterModule,
    Ng2SearchPipeModule,
    CalendarModule,
  ],
  providers: [TaskService, TaskSearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
