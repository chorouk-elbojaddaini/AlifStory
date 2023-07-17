import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  clicked:boolean=false;
  @Output() menuOpened:boolean=false ;
  openMenu(){
    this.clicked = !this.clicked;
    this.menuOpened = !this.menuOpened;
  }
}
