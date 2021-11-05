import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './shared/post/post.component';
import { SubleggidSideBarComponent } from './shared/subleggid-side-bar/subleggid-side-bar.component';
import {VoteButtonComponent} from './shared/vote-button/vote-button.component';
import {SideBarComponent} from './shared/side-bar/side-bar.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {PostTileComponent} from "./shared/post-tile/post-tile.component";
import { CreateSubleggidComponent } from './subleggid/create-subleggid/create-subleggid.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import {TokenInterceptor} from "./token-interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PostComponent,
    VoteButtonComponent,
    SideBarComponent,
    SubleggidSideBarComponent,
    PostTileComponent,
    CreateSubleggidComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxWebstorageModule.forRoot(),
    HttpClientModule,
    AuthModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
      {  // Il faut déclarer app.module afin qu'il s'applique au requête HTTP.
        // L'intercepteur ne s'applique qu'au requête HTTP provenant du HTTPClient
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
