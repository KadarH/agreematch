/* eslint-disable max-len */
import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, {
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
  Zoom,
} from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Tab1Page {
  avatars = [
    {
      name: 'Donald Trump',
      age: 73,
      image:
        'https://wisdomquotes.b-cdn.net/wp-content/uploads/beautiful-quotes-i-dont-think-of-all-the-misery-but-of-the-beauty-that-still-remains-anne-frank-wisdom-quotes.jpg',
      visible: true,
    },
    {
      name: 'Barack Obama',
      age: 58,
      image: 'https://wisdomquotes.b-cdn.net/wp-content/uploads/beautiful-quotes-i-ve-never-seen-a-smiling-face-that-was-not-beautiful-wisdom-quotes.jpg',
      visible: true,
    },
  ];
  constructor() {}
}
