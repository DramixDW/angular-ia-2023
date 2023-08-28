import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCoffee]'
})
export class CoffeeDirective {

  constructor(private el: ElementRef<HTMLElement>) { 
    this.el.nativeElement.innerHTML = `
      <pre>
    (  )   (   )  )
     ) (   )  (  (
     ( )  (    ) )
     _____________
    <_____________> ___
    |             |/ _ \\
    |               | | |
    |               |_| |
 ___|             |\\___/
/    \\___________/    \\
\\_____________________/
      </pre>
    `;
  }

}
