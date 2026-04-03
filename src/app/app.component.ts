import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = '';
  age: number = 0;
  names: string[] = ['Alice', 'Bob', 'Charlie'];
  newName: string = '';

  increaseAge() {
    this.age++;
  }

  addNewName() {
    if (this.newName.length > 0) {
      this.names.push(this.newName);
      this.newName = '';
    }
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
