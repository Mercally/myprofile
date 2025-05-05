import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-tabmenu',
  templateUrl: './tabmenu.component.html',
  styleUrls: ['./tabmenu.component.css']
})
export class TabmenuComponent {
  tabs = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/consulting', label: 'Consulting' },
    { path: '/contact', label: 'Contact' },
    { path: '/about', label: 'About' },
  ];

  selectedIndex = 0;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.selectedIndex = this.tabs.findIndex(tab => tab.path === event.url);
      }
    });
  }

  onTabChange(index: number) {
    this.selectedIndex = index;
    this.router.navigate([this.tabs[index].path]);
  }
}
