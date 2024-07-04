import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() searchParam?: string;
  @Output() eventChange = new EventEmitter<string>()

  public searchingText?: string;

  ngOnInit(): void {

  }

  public displayText: boolean = false;

  toggleText() {
    this.displayText = !this.displayText;
  }
}
