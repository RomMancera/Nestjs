import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('http://localhost:3000/user');
  }

  getOneUser(id: any){
    return this.http.get(`http://localhost:3000/user/${id}`);
  }
  createUser(body: any){
    return this.http.post('http://localhost:3000/user/create',body);
  }

  deleteUser(id:any){
    return this.http.delete(`http://localhost:3000/user/${id}`);
  }

  updateUser(id: any, body: any){
    return this.http.put(`http://localhost:3000/user/${id}`,body);
  }
}
