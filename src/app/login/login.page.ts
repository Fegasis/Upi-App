import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false
})
export class LoginPage implements OnInit {
  credentials={ email: '', password: '' };
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.credentials).subscribe(res=>{
      console.log('User logged in:',res); 
      localStorage.setItem("userId",res.USER_ID);
      localStorage.setItem("userName",res.NAME);
      localStorage.setItem("userEmail",res.EMAIL);
      this.router.navigate(['/upi-home']);     
    });
  }

}
