import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  mainSlideOpts = {
    slidesPerView: 2.2,
    spaceBetween: 10,
    freeMode: true,
  };

  multiItemSlideOpts = {
    slidesPerView: 1.1,
    spaceBetween: 10,
  };
  
  constructor() { }

  ngOnInit() {
  }

}
