import { Component, OnInit } from '@angular/core';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faBitcoin  = faBitcoin;
  faBookmark = faBookmark;

  constructor() { }

  ngOnInit() {
  }

}
