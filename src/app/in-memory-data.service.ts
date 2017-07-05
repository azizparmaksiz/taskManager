import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { id: 0,  name: 'angular 4 tutorial' , description: '', isCompleted: false },
      { id: 1, name: 'angular router' , description: '', isCompleted: false  },
      { id: 2, name: 'angular restful service' , description: '', isCompleted: false  },
      { id: 3, name: 'angular bootstrap integration' , description: '', isCompleted: false  },
      { id: 4, name: 'prime ng' , description: '', isCompleted: false  },
      { id: 5, name: 'first application deployment to git hup' , description: '', isCompleted: false  },
    ];
    return {tasks};
  }
}
