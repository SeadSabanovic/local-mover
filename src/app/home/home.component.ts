import { Component, OnInit } from '@angular/core';

export interface Filter {
  active: boolean;
  type: string;
  icon: string;
  color: string;
  iconBg: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  iconAssetsPath = 'assets/icons/transport-';
  cards: Filter[] = [
    {
      active: true,
      type: 'All',
      icon: `${this.iconAssetsPath}all.svg`,
      color: '#0096F2',
      iconBg: '#D2E8FE',
    },
    {
      active: false,
      type: 'Shuttle Bus',
      icon: `${this.iconAssetsPath}bus.svg`,
      color: '#F36887',
      iconBg: '#FEF0F3',
    },
    {
      active: false,
      type: 'Train',
      icon: `${this.iconAssetsPath}train.svg`,
      color: '#9481FF',
      iconBg: '#F4F2FF',
    },
    {
      active: false,
      type: 'Trolley Bus',
      icon: `${this.iconAssetsPath}trolley.svg`,
      color: '#06A656',
      iconBg: '#E6F6EE',
    },
  ];

  changeFilter(card: Filter) {
    card.active = !card.active;
    // Refresh here
  }

  constructor() {}

  ngOnInit() {}
}
