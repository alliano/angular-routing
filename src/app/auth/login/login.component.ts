import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title: string = "login";
  public data: any = [
    {
      "name": "alliano",
      "age": 18,
      "major": "software enggenering"
    },
    {
      "name": "siera",
      "age": 18,
      "major": "database enggenering"
    },
  ];
  constructor() { 
  }
  public onsubmit() {
    this.save(JSON.stringify(this.login.value))
  }
  public login: any = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  private save = (data:string): void => {
    localStorage.setItem("dataLogin", data);
  }
  
  ngOnInit(): void {
  }

}
