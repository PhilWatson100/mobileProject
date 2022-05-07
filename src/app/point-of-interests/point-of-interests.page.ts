import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-point-of-interests',
  templateUrl: './point-of-interests.page.html',
  styleUrls: ['./point-of-interests.page.scss'],
})
export class PointOfInterestsPage implements OnInit {

  sliderOne: any;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  constructor() {
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 995
        },
        {
          id: 925
        },
        {
          id: 940
        },
        {
          id: 943
        },
        {
          id: 944
        }
      ]
    };
   }

  ngOnInit() {

  }

}
