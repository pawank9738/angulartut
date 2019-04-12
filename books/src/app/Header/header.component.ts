import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})
export class HeaderComponent {
    tempName = 'psjjsw'
    @Output() Navpage = new EventEmitter<{Pagename: string}>();

    onHeaderClick(nav){
        this.Navpage.emit({
          Pagename : nav
        })
    }
}
