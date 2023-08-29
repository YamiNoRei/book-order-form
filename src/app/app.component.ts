import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  private bpoSubscription = new Subscription();
  title = 'book-order-form';
  sidenavMode: MatDrawerMode;
  isSidebarOpen: boolean;

  constructor(private bpo: BreakpointObserver) {}

  // ngOnInit() {
  //   const styleToCheck = '(max-width: 800px)';
  //   this.bpoSubscription = this.bpo.observe([styleToCheck]).subscribe((result) => {    
  //     if (result.matches) {
  //       if(this.sidenav){
  //         console.log('over');
  //         this.sidenav.mode = 'over';
  //         this.sidenav.close();
  //       }
  //     } else {
  //       if(this.sidenav){
  //         console.log('side');
  //         this.sidenav.mode = 'side';
  //         this.sidenav.open();
  //       }
  //     }
  //   });
  // }

  sidebarMode(mode: string){
    console.log('mode');
    this.sidenavMode = mode as MatDrawerMode;
    if(mode === 'side')
      this.isSidebarOpen= true;
    else
      this.isSidebarOpen= false;
  }
  
  // ngOnDestroy() {
  //   this.bpoSubscription.unsubscribe();
  // }   
}


