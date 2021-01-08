import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationsListComponent } from './recommendations-list.component';

@NgModule({
  declarations: [RecommendationsListComponent],
  imports: [
    CommonModule
  ],
  exports: [RecommendationsListComponent]
})
export class RecommendationsListModule { }
