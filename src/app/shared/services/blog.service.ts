import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBlogRequest, IBlogResponse } from '../interfaces/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private url = environment.BACKEND_URL;
  private api = `${this.url}/blogs`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<IBlogResponse[]> {
    return this.http.get<IBlogResponse[]>(this.api);
  }

  createBlog(blog: IBlogRequest): Observable<IBlogResponse>{
    return this.http.post<IBlogResponse>(this.api, blog);
  }

  deleteBlog(id: number): Observable<void>{
    return this.http.delete<void>(`${this.api}/${id}`);
  }

  updateBlog(blog: IBlogRequest, id: number): Observable<IBlogRequest> {
    return this.http.patch<IBlogRequest>(`${this.api}/${id}`, blog);
  }

}
