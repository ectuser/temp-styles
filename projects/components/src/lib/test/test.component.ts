import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'plario-test',
  template: `
    <div>
      <button mat-button color="primary">Primary</button>
    </div>
  `,
  styles: [],
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
