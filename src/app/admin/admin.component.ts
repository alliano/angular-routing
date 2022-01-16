import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}
}
