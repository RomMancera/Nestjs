import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  id: any;
  usuario: any;
  constructor( private rutAc: ActivatedRoute, private userS: UserService) { }

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
  
}
