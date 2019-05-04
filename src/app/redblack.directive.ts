import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedblack]'
})
export class RedblackDirective {

  element: ElementRef;

  constructor(private elem: ElementRef) {
    console.log(elem)
    elem.nativeElement.style.color = "red"
    elem.nativeElement.style.backgroundColor = "black"
    this.element =elem;
  }

  ngOnInit(){
    this.element.nativeElement.innerText += " - rendered by appRedblack directive "
  }

}
