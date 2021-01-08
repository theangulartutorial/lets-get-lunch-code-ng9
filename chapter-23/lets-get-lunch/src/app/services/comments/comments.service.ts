import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  API = environment.api;

  constructor(private http: HttpClient) { }

  create(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.API + '/comments', comment);
  }

  getEventComments(eventId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.API + '/comments/event/' + eventId);
  }
}
