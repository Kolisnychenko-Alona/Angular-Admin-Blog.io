import { Component, OnInit } from '@angular/core';
import { IBlogResponse } from 'src/app/shared/interfaces/blog';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public blogs: Array<IBlogResponse> = [];

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void{
    this.blogService.getAll().subscribe((data) => {
      console.log(data);
      this.blogs = data;
    });
  }

}
