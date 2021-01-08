import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './member-list.component';

@NgModule({
  declarations: [MemberListComponent],
  imports: [
    CommonModule
  ],
  exports: [MemberListComponent]
})
export class MemberListModule { }
