import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {Developer} from 'Developer';

@Component({
  selector: 'app'
})

@View({
  templateUrl: 'app.html',
  directives: [NgFor]
})

class App {
  developers: Array<Developer> = [];

  add(firstName: string, lastName: string, salary: number) {
    this.developers.push(new Developer(firstName, lastName, salary));
  }
}

bootstrap(App);