import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent {
  fullUser: User;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router
  ) {
    // this.activatedRoute.params.subscribe(params => {
    //   const id = params.id;
    //   this.userService.getUser(id).subscribe(value => this.fullUser = value);
    //
    // });

    this.activatedRoute.params.subscribe(params => {
      this.fullUser = this.router.getCurrentNavigation().extras.state as User;
    });
  }


}
