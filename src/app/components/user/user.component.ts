import { Component ,Input,Output,EventEmitter, OnInit, OnChanges,SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnChanges  {
  @Input() data: any;
  @Input() function: any;
  @Output() action = new EventEmitter();

  myForm = new FormGroup({
    id : new FormControl(''),
    name:  new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    email:  new FormControl('', [Validators.required]),
    address:  new FormControl('', [Validators.required]),
    phone:  new FormControl('', [Validators.required]),
    website:  new FormControl('', [Validators.required]),
    company:  new FormControl('', [Validators.required]),

  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
      if(changes['data']?.currentValue){
        this.setForm(this.data);
      }
  }

  ngOnInit() {

  }

  setForm(data:any){
    this.myForm.setValue(data)
  }

  onClick(){
    if(this.myForm.status !== 'INVALID'){
      this.function(this.myForm.value)
      this.myForm.reset();
    }
  }
}
