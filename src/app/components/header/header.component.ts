import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { CookieService } from 'ngx-cookie-service';

import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

 
  constructor(private router:Router,private route:ActivatedRoute) {}

  username:string;

  ngOnInit(): void {}

  home(){
    HomepageComponent.hideWelcome=false;
    $(".footer").show();
    this.router.navigate(['/homepage']);
  }
}
