import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UserModule} from './user/user.module';
import {RouterModule} from '@angular/router';
import {UsersComponent} from './user/components/users/users.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    RouterModule.forRoot(
      [
        {path: 'users', component: UsersComponent}
        // {path: 'posts', component: Component}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
