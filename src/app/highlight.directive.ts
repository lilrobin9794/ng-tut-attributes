import { Directive, ElementRef, HostBinding, OnInit, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() defaultColor: string = "white";
  @Input() highlightColor: string = "green";

  @HostBinding("style.backgroundColor") color;

  @HostListener("mouseenter") mouseenter(){
    this.color = this.highlightColor;
  }

  @HostListener("mouseleave") mouseleave(){
    this.color = this.defaultColor;
  }

  constructor(elRef: ElementRef, renderer: Renderer2) {
    // elRef.nativeElement.style.backgroundColor = "green";
    // renderer.setStyle(elRef.nativeElement, "background-color", "green");
   }

   ngOnInit(){
     setTimeout(() => this.color = "red", 2000);
     this.color = this.defaultColor;
   }
}
