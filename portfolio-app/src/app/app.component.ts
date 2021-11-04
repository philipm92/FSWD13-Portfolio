
import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  title = 'portfolio-app';
   
  ngOnInit() {
    window.addEventListener('scroll', this.scrollEvent, true);
    
  }
  
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }
  
  scrollEvent = (event: any): void => {
    const scrollTopVal = event.target.scrollingElement.scrollTop;
    let menu = document.getElementsByClassName("navbar")[0];
    console.log(window.innerWidth);
    if (window.innerWidth >= 768) {
      // console.log(scrollTopVal);
      // before-color, after-color
      if (scrollTopVal > 50) {
        menu.classList.remove("bg-white");
        menu.classList.remove("before-color");
        menu.classList.add("after-color");
      } else {
        menu.classList.remove("after-color");
        menu.classList.remove("bg-white");
        menu.classList.add("before-color");
      }
    } else {
      menu.classList.remove("before-color");
      menu.classList.remove("after-color");
      menu.classList.add("bg-white");
    }
  }

  currentSection: string = 'section1';
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section: any) {
    let section_selector: any = document.querySelector('#' + section);
    section_selector.scrollIntoView();
  }
  
}