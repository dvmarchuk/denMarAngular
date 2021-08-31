import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {  }

  ngOnInit(): void {
  }

  goToDetails(): void {
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute});
  }

  goToUser(): void {
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute, state: this.user});
  }

  setUP(): void {
    this.httpClient.get('http://localhost:8080/users', {
      headers: new HttpHeaders({Authorization: 'Basic ZGVubmlzOmRlbm5pcw=='})
    }).subscribe(value => console.log(value));
  }

// , ContentType: 'application/json'
}
