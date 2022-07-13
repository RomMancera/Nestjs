import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.css']
})
export class FormUsersComponent implements OnInit {

  @ViewChild('userForm') userForm: NgForm | undefined;

  id: any;
  usuario={
    id: '',
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    tareas: []
  };
  constructor(private userS: UserService,
              private routes: Router,
              private rutAc: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.rutAc.snapshot.params['id'];
    console.log(this.id);

    this.getOneUser(this.id);
  }

  getOneUser(id: any){
    this.userS.getOneUser(id).subscribe((data:any) =>{
      console.log(data);
      this.usuario = data;
    })
  }

  save(myForm: NgForm){
    if(this.id){
      this.userS.updateUser(this.id, myForm.value).subscribe((data:any) =>{
        console.log(data);
      }) 
    }else{
      this.userS.createUser(myForm.value).subscribe((data:any) =>{
      if (data){ 
        console.log(data);
      }
      }) 
    }
  }


}
