import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/User';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {
  }


  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }


  getUser(id): Observable<User> {
    return this.httpClient.get<User>(this.url + '/' + id);
  }


}
