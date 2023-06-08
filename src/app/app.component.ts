import { Component , OnInit} from '@angular/core';
import { ControlBoxService } from './services/control-box.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ],

})
export class AppComponent implements OnInit {
  title = 'ControlBox';

  dataShow:any;

  dataEdit:any;

  typeAction:boolean = true;

  constructor(private serviceUser:ControlBoxService){}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.serviceUser.getUser().subscribe((value) => {
      this.dataShow=value;
    })
  }

  addressDefine(value:any){
    const data = `${value.street} ${value.suite} ${value.city}`
    return data;
  }

  updateUser(value:any){
    this.dataEdit = value;
    this.typeAction = false;
  }

  deleteUser(value:any){
    this.serviceUser.deleteUser(value).subscribe((response)=>{
      this.dataShow = this.dataShow.filter((object:any) => !this.compareId(object,value))

    })
  }

  compareId(object1:any, object2:any){
    return object1.id === object2.id && object1.nombre === object2.nombre;
  }

  searchUser(value:any){
    this.serviceUser.getUserId(value).subscribe((value)=>{
      console.log(value)
      this.dataShow = this.dataShow.filter((object:any) => this.compareId(object,value))
    })
  }

  createUser = (value:any)=>{
    this.serviceUser.setUser(value).subscribe((response) => {
      console.log('createUser',value)
      this.typeAction = true;
      this.dataShow.push(response)
    })

  }

  updateUserSend = (value:any)=>{
    this.serviceUser.updateUser(value).subscribe((response) => {
      console.log('updateUserSend',value)
      this.dataShow.map((data:any, index:number) => {
        console.log(data,value,data.id === value.id)
        if(data.id === value.id){
          this.dataShow[index] = response;
        }
      })
      this.typeAction = true;
    })
  }
}
