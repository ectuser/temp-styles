import { NgModule } from '@angular/core';
import { TestComponent } from './test/test.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TestComponent],
  imports: [MatButtonModule],
  exports: [TestComponent],
})
export class ComponentsModule {}
