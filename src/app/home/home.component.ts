import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild("ff") fileInputVariable: any;
  constructor() { }

  ngOnInit() {
  }

  register(val){
    const files = this.fileInputVariable.nativeElement.files;
    console.log(files);
    console.log(val);
  }
}
