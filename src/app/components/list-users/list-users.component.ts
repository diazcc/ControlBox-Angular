import { Component, Input,Output,EventEmitter, OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnChanges {

  @Input() dataUser: any;
  @Output() update = new EventEmitter();
  @Output() delete = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes,this.dataUser);
  }

  updateUser(value:any){
    this.update.emit(value)
  }

  deleteUser(value:any){
    this.delete.emit(value)

  }
}
