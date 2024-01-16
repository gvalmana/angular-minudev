import { Component } from '@angular/core';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  template: `
    <h3>Comments</h3>
    <img src="https://miro.medium.com/v2/0*ZjYSm_q36J4KChdn" alt="" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias
      molestias earum. Repellendus harum dicta vel ducimus eius. Blanditiis,
      vitae facilis voluptatum iste est aperiam soluta alias nisi voluptates
      praesentium?
    </p>
  `,
  styles: `
    img {
      width: 100%;
      height: auto;
    }
  `,
})
export class CommentComponent {}
