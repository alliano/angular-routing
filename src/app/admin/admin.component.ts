import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  public data: any = [
    {
      name: 'alliano',
      age: 18,
      major: 'sofrware enggenering',
      status: true,
    },
    {
      name: 'friska',
      age: 18,
      major: 'web developr',
      status: true,
    },
    {
      name: 'rara',
      age: 18,
      major: 'UI/UX',
      status: true,
    },
  ];
  // form group
  public login: any = new FormGroup({
    username: new FormControl(''),
    password : new FormControl('')
  });
  constructor(private fb:FormBuilder) {
    
  }
  // from ulilder
  public userLogin: Object | string | any = this.fb.group({
    username: [''],
    password: ['']
  })
  public onsubmit() {
    
    const save = (data:string): void => {
      localStorage.setItem("admin", data.toString());
    }
    save(JSON.stringify(this.userLogin.value));
    
  }

  ngOnInit(): void {}
}