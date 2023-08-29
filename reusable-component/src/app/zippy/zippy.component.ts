import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input() isOpen = false;
  @Output() stateToggled = new EventEmitter();

  toggleIsOpen() {
    this.isOpen = !this.isOpen;
    this.stateToggled.emit(this.isOpen);
  }
}
