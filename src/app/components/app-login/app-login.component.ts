import { Component, OnInit} from '@angular/core';
import { LoginCredentialsService } from 'src/app/services/login-credentials.service';
import { CredVeriUser } from 'src/app/model/CredVeriUser';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {

  credVeriUsers:CredVeriUser[];
  username:string;
  password:string;
  loginFailed:boolean=true;
  hide:boolean=true;

  constructor(private cookie:CookieService,private loginCredService:LoginCredentialsService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.loginCredService.getLoginCredentials().subscribe(data=>this.credVeriUsers=data);
  };

  onLogin(){
    for(let user of this.credVeriUsers){
      if(user.username==this.username&&user.password==this.password){
        this.cookie.set('username',user.username);
        HomepageComponent.hideWelcome=false;
        this.router.navigate(['../homepage'],{relativeTo:this.route});
      }
    }
    this.loginFailed=false;
  }
  
}
