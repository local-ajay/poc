import { Component, OnInit} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CookieService} from 'ngx-cookie-service';

import * as $ from 'jquery';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private cookie:CookieService,private router:Router,private route:ActivatedRoute) { }

  username:string;
  // hideFooter=true;
  static hideWelcome:boolean=true;

  ngOnInit(): void {
    $(".footer").show();
    if(window.location.toString().substring(window.location.toString().lastIndexOf("/")).indexOf("homepage")>0){
      HomepageComponent.hideWelcome=false;
      // this.hideFooter=false;
    }
    this.username=this.cookie.get('username');

    if(this.username==''||this.username==undefined){
      this.router.navigate(['/login']);
    }
  }

  onClickMyBlue(){ 
    HomepageComponent.hideWelcome=true;
    // $( "div" ).remove( ".footer" );
    $(".footer").hide();
    this.router.navigate(['myblue'],{relativeTo:this.route});
    
  }

  onClickMSST(){
    HomepageComponent.hideWelcome=true;
    // $( "div" ).remove( ".footer" );
    $(".footer").hide();
    this.router.navigate(['msst'],{relativeTo:this.route});
    
  }

  get hideWelcome(){
    return HomepageComponent.hideWelcome;
  }

  logout(){
    this.cookie.delete('username','../');
    //this.cookie.deleteAll('../');
    this.router.navigate(['/login']);
  }
}
