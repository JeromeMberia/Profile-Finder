import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

   constructor(private elem: ElementRef) {}

   private highlight(color: string) {
    this.elem.nativeElement.style.backgroundColor = color;
  }

   @HostListener('mouseenter') onMouseEnter() {
    this.highlight('black');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

}
