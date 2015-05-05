import {Component, View, bootstrap, For} from 'angular2/angular2';
import {Developer} from 'Developer';

@Component({
  selector: 'developers-app'
})

@View({
  templateUrl: 'developers.html',
  directives: [For]
})

class DevelopersApp {
  developers: Array<Developer>;

  constructor() {
    this.developers = [];
  }

  add(firstName: string, lastName: string, salary: number) {
    this.developers.push(new Developer(firstName, lastName, salary));
  }
}

bootstrap(DevelopersApp);