import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public title: string = 'renggister';
  constructor(private fb:FormBuilder) {}

  public renggister: any = this.fb.group({
    
  })
  ngOnInit(): void {}
}
