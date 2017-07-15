import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormatter]'
})
export class InputFormatterDirective {
  // @Input('format') format: string;
  @Input('appInputFormatter') format: string; //For single directive

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus(){
    // console.log('We focused');
  }
  
  @HostListener('blur') onBlur(){
    let value: string = this.el.nativeElement.value;

    if(this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();    
  }
  

}
