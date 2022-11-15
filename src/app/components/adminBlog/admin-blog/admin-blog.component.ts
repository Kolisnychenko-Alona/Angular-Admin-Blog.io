import { Component, OnInit } from '@angular/core';
import { IBlogRequest, IBlogResponse } from 'src/app/shared/interfaces/blog';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss'],
})
export class AdminBlogComponent implements OnInit {
  public adminBlogs!: IBlogResponse[];
  public editStatus = false;
  public title!: string;
  public text!: string;
  public author!: string;
  public editID!: number;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogService.getAll().subscribe((data) => {
      this.adminBlogs = data;
    });
  }

  addBlog(): void {
    const newBlog = {
      title: this.title,
      text: this.text,
      author: this.author,
    };
    this.blogService.createBlog(newBlog).subscribe(() => {
      this.getBlogs();
      this.resetForm();
    });
  }

  editBlog(blog: IBlogResponse): void {
    this.title = blog.title;
    this.text = blog.text;
    this.author = blog.author;
    this.editID = blog.id;
    this.editStatus = true;
  }

  updateBlog(): void {
    const updateBlog = {
      title: this.title,
      text: this.text,
      author: this.author,
    };
    this.blogService.updateBlog(updateBlog, this.editID).subscribe(() => {
      this.getBlogs();
      this.resetForm();
      this.editStatus = false;
    });
  }

  deleteBlog(blog: IBlogResponse): void {
    this.blogService.deleteBlog(blog.id).subscribe(() => {
      this.getBlogs();
    });
  }

  resetForm(): void {
    this.title = '';
    this.text = '';
    this.author = '';
  }
}
