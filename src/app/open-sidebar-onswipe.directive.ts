import { BreakpointObserver } from '@angular/cdk/layout';
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appOpenSidebarOnswipe]'
})
export class OpenSidebarOnSwipeDirective {
  sidebar: MatSidenav;
  private bpoSubscription = new Subscription();
  @Input('sideNav') set sideNav(sideNav: MatSidenav){
     this.sidebar = sideNav;
  }
  @Output() sidebarMode: EventEmitter<string> = new EventEmitter<string>();
  
  constructor(private bpo: BreakpointObserver) {}

  ngOnInit() {    
    const styleToCheck = '(max-width: 800px)';
    this.bpoSubscription = this.bpo.observe([styleToCheck]).subscribe((result) => {    
      if (result.matches) {
        if(this.sidebar){
          console.log('over');
          this.sidebar.mode = 'over';
          this.sidebar.close();
        }
      } else {
        if(this.sidebar){
          console.log('side');
          this.sidebar.mode = 'side';
          this.sidebar.open();
        }
      }
    });
  }

  // ngAfterViewInit(){
  //    this.sidebar.open()
  // }

  ngOnDestroy() {
    this.bpoSubscription.unsubscribe();
  }  
}
