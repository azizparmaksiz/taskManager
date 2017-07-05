import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { id: 1,  name: 'angular 4 tutorial' , description: '', isCompleted: true },
      { id: 2, name: 'angular router' , description: '', isCompleted: true  },
      { id: 3, name: 'angular restful service' , description: '', isCompleted: true  },
      { id: 4, name: 'angular bootstrap integration' , description: '', isCompleted: true  },
      { id: 5, name: 'first application deployment to git hup' , description: '', isCompleted: true  },
      { id: 6, name: 'prime ng' , description: '', isCompleted: false  },
    ];
    return {tasks};
  }
}
