import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appJobs]',
})
export class JobsDirective {
  constructor(private el: ElementRef) {
    this.border('azure');
    this.opacity('1.0');
    this.cursor('pointer');
    this.shadow('1px 1px 10px 5px #000000');
  }

  private border(bord: string) {
    this.el.nativeElement.style.border = bord;
  }

  private opacity(show: string) {
    this.el.nativeElement.style.opacity = show;
  }

  private cursor(point: string) {
    this.el.nativeElement.style.cursor = point;
  }

  private shadow(dark: string) {
    this.el.nativeElement.style.boxShadow = dark;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.opacity('1.0');
    this.cursor('pointer');
    this.border('1px solid azure');
    this.shadow('1px 1px 10px 5px #000000');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.opacity('0.75');
    this.cursor('pointer');
    this.border('0px solid azure');
    this.shadow('0px 0px 0px 0px #000000');
  }
}


