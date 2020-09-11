import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'app-myblue',
  templateUrl: './myblue.component.html',
  styleUrls: ['./myblue.component.scss']
})
export class MyBlueComponent implements OnInit{

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    $(".footer").hide();
  }

  onClickQA(){
    this.router.navigate(['qa'],{relativeTo:this.route});
  }
  onClickStaging(){
    this.router.navigate(['staging'],{relativeTo:this.route});
  }
  onClickProduction(){
    this.router.navigate(['production'],{relativeTo:this.route});
  }
}
