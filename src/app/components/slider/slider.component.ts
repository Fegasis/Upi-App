import { Component, Input, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  standalone:false
})
export class SliderComponent  implements OnInit {

  swiperModule = [IonicSlides];
  @Input()bannerImages:any

  constructor() { }

  ngOnInit() {}

}
