import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FullUserComponent} from './components/full-user/full-user.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    FullUserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      // users
      {
        // path : users
        path: '', component: UsersComponent,
        children: [
          {
            path: ':id', component: FullUserComponent
          }
        ]
      }

    ])
  ],
  exports: [
    UsersComponent
  ],
  providers: [UserService]
})
export class UserModule {
}
