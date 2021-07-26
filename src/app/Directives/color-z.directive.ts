import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorZ]',
})
export class ColorZDirective {
  constructor(private element: ElementRef) {
    // element.nativeElement.style.color = 'red';
    element.nativeElement.focus();
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('blue');
  }
  @HostListener('click') onClick() {
    this.highlight('green');
  }
  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
