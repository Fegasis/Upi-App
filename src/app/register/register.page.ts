import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone:false
})
export class RegisterPage implements OnInit {
  user={name: '', email: '', password: '' , phonenumber: '', address: ''};
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }
  register(){
    this.authService.register(this.user).subscribe(res=>{
      console.log('User registered:',res);  
      this.router.navigate(['/login']);    
    });
  }

}
