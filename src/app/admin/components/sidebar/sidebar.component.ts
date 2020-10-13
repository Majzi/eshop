import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'tab1',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'tab2',  icon:'dashboard', class: '' },
    { path: '/table-list', title: 'tab3',  icon:'dashboard', class: '' },
    { path: '/typography', title: 'tab4',  icon:'dashboard', class: '' },
    { path: '/icons', title: 'tab5',  icon:'dashboard', class: '' },
    { path: '/maps', title: 'tab6',  icon:'dashboard', class: '' },
    { path: '/notifications', title: 'tab7',  icon:'dashboard', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
