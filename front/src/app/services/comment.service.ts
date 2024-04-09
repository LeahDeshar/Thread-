import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

type CreateCommentDto = {
  parentId?: string;
  text: string;
  userId: string;
};
@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor() {}
  http = inject(HttpClient);

  getComments(parentId: string = '') {
    let url = `${environment.apiBaseUrl}/comments`;
    if (parentId) {
      url += `?parentId=${parentId}`;
    }
    return this.http.get<Comment[]>(url);
  }

  createComment(comment: CreateCommentDto) {
    return this.http.post<Comment>(
      `${environment.apiBaseUrl}/comments`,
      comment,
    );
  }
}
