import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
// CKEditor
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EditorComponent } from './blog/editor/editor.component';
// Nebular
import {
  NbThemeModule, NbLayoutModule, NbWindowModule,
  NbMenuModule, NbButtonModule, NbCardModule,
  NbCheckboxModule, NbBadgeModule, NbSearchModule,
  NbAlertModule, NbToastrModule, NbDialogModule,
} from '@nebular/theme';
// Material
import {MatBottomSheetModule, MatListModule} from '@angular/material';
// Pipes
import { ReplaceLineBreaksPipe } from './blog/replace-line-breaks.pipe';
import { EvaPipe } from './home/bottom-sheet/eva.pipe';
import { SafePipe } from './safe.pipe';
// Components
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './blog/blog.component';
import { IpComponent } from './ip/ip.component';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { MoviesComponent } from './movies/movies.component';
import { TodoComponent } from './todo/todo.component';
import { BottomSheetComponent } from './home/bottom-sheet/bottom-sheet.component';
import { PostComponent } from './blog/post/post.component';
import { ItemsComponent } from './todo/items/items.component';
import { ListComponent } from './todo/list/list.component';
import { LoadingComponent } from './loading/loading.component';
import { BlogNavComponent } from './blog/blog-nav/blog-nav.component';
import { NewPostComponent } from './blog/new-post/new-post.component';
import { BlogPostTitleComponent } from './blog/blog-post-title/blog-post-title.component';
import { BlogPostContentComponent } from './blog/blog-post-content/blog-post-content.component';
import { BlogPostCardComponent } from './blog/blog-post-card/blog-post-card.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    BlogComponent,
    IpComponent,
    MusicComponent,
    MoviesComponent,
    ReplaceLineBreaksPipe,
    TodoComponent,
    BottomSheetComponent,
    EvaPipe,
    PostComponent,
    ItemsComponent,
    ListComponent,
    EditorComponent,
    SafePipe,
    LoadingComponent,
    BlogNavComponent,
    NewPostComponent,
    BlogPostTitleComponent,
    BlogPostContentComponent,
    BlogPostCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    // Nebular
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule, NbWindowModule.forRoot(), NbCardModule,
    NbMenuModule.forRoot(), NbButtonModule, NbCardModule,
    NbCheckboxModule, NbBadgeModule, NbSearchModule,
    NbAlertModule, NbToastrModule.forRoot(),
    NbDialogModule.forRoot(), // forChild if lazy loaded
    // Material
    MatBottomSheetModule, MatListModule,
  // Editors
    CKEditorModule,
  ],
  providers: [ ],
  entryComponents: [
    BottomSheetComponent,
    NewPostComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
