import { Component, Input,input ,computed, Output, EventEmitter} from '@angular/core';
 

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: []
})
export class UserComponent {
  @Input({required: true})  avator!: string;
  @Input({required: true})  name!: string;
  @Input({required: true})  id!: string;
  @Output() select=new EventEmitter ();


  // avator=input.required<string>();
  // name=input.required<string>();
  // imagePath=computed(() => 'assets/users/' + this.avator());
 
 
  get imagePath() {
    return 'assets/users/' + this.avator;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
