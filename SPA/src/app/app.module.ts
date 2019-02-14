import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

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
import { EvaPipe } from './home/bottom-sheet/eva.pipe';
import { SafePipe } from './safe.pipe';
// Components
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { IpComponent } from './ip/ip.component';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { MoviesComponent } from './movies/movies.component';
import { TodoComponent } from './todo/todo.component';
import { BottomSheetComponent } from './home/bottom-sheet/bottom-sheet.component';
import { ItemsComponent } from './todo/items/items.component';
import { ListComponent } from './todo/list/list.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    IpComponent,
    MusicComponent,
    MoviesComponent,
    TodoComponent,
    BottomSheetComponent,
    EvaPipe,
    ItemsComponent,
    ListComponent,
    SafePipe,
    LoadingComponent,
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
  ],
  providers: [ ],
  entryComponents: [
    BottomSheetComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
