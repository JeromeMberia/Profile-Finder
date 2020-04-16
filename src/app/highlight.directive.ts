import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

   constructor(private elem: ElementRef) {}

//   @HostListener('click') onClicks() {
//     this.textDeco('line-through');
//   }


//   @HostListener('dblclick') onDoubleClicks() {
//     this.textDeco('None');
//   }
//  }

}
