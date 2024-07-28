import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-loader',
  templateUrl: './profile-loader.component.html',
  styleUrls: ['./profile-loader.component.css']
})
export class ProfileLoaderComponent implements OnInit {
  isLoading: boolean = false;
  @Input() show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
