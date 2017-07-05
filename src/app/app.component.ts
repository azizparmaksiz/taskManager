import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<div role="navigation">
    <div class="navbar navbar-inverse">
        <a class="navbar-brand" routerLink="/" routerLinkActive="active" >Home</a>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li><a routerLink="/newTask" routerLinkActive="active">New Task</a></li>
                <li><a routerLink="/allTask" routerLinkActive="active">All Tasks</a></li>
            </ul>
        </div>
    </div>
</div>
  <router-outlet></router-outlet>
`

})
export class AppComponent {

}
