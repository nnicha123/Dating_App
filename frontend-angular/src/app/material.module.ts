import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [MatDatepickerModule],
  exports: [MatDatepickerModule],
})
export class MaterialModule {}
