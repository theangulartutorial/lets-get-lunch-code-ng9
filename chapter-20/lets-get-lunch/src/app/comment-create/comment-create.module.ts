import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CommentCreateComponent } from './comment-create.component';

@NgModule({
  declarations: [CommentCreateComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CommentCreateComponent]
})
export class CommentCreateModule { }
