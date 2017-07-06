import {InMemoryDbService} from "angular-in-memory-web-api";
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      {id: 1, name: 'angular 4 tutorial', description: '', dateCreated: null, finished: true},
      {id: 2, name: 'angular router', description: '', dateCreated: null, finished: true},
      {id: 3, name: 'angular restful service', description: '', dateCreated: null, finished: true},
      {id: 4, name: 'angular bootstrap integration', description: '', dateCreated: null, finished: true},
      {id: 5, name: 'first application deployment to git hup', description: '', dateCreated: null, finished: true},
      {id: 6, name: 'prime ng', description: '', dateCreated: null, finished: false},
    ];
    return {tasks};
  }
}
