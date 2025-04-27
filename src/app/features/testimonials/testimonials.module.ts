import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialsRoutingModule } from './testimonials-routing.module';
import { TestimonialsComponent } from './testimonials.component';
import { TestimonialsListComponent } from './components/testimonials-list/testimonials-list.component';


@NgModule({
  declarations: [
    TestimonialsComponent,
    TestimonialsListComponent
  ],
  imports: [
    CommonModule,
    TestimonialsRoutingModule
  ]
})
export class TestimonialsModule { }
