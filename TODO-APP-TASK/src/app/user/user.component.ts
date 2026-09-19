import { Component, Input, } from '@angular/core';
 

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: []
})
export class UserComponent {
  @Input()  avator!: string;

  @Input()  name!: string;

  get imagePath() {
    return 'assets/users/' + this.avator;
  }

  onSelectUser() {
   }
}
