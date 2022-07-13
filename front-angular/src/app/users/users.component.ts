import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usuarios: any;

  constructor(private UserS: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.UserS.getUsers().subscribe((data:any) =>{
      console.log(data);
      this.usuarios = data;
    })
  }

  sendId(id:any){
  console.log(id);
    this.router.navigate(['/user',id]);
  }

  deleteU(id:any){
    this.UserS.deleteUser(id).subscribe((data)=>{
      console.log(data);
      this.getAllUsers();
    })
  }

  sendID(id:any){
    console.log(id);
      this.router.navigate(['/form',id]);
    }
}
