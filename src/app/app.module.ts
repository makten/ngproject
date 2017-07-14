import { SummaryPipe } from './summary.pipe';
import { AuthorsService } from './authors.service';


import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { CasingComponent } from './casing/casing.component';
import { TitleCasePipe } from './title-case.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';




@NgModule({
  declarations: [
    AppComponent, 
    DashboardComponent, 
    CourseComponent, 
    CoursesComponent, 
    AuthorsComponent,
    SummaryPipe,
    CasingComponent,
    TitleCasePipe,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [
    CoursesService, AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
