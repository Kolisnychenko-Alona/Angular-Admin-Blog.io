import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './components/blog/blog/blog.component';
import { AdminBlogComponent } from './components/adminBlog/admin-blog/admin-blog.component';

const routes: Routes = [
  { path: '', component: BlogComponent }, 
  { path: 'blog', component: BlogComponent },
  { path: 'admin', component: AdminBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
