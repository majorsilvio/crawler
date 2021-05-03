import { Component, Input, OnInit } from '@angular/core';
import { TemplatesService } from '../templates.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private service:TemplatesService) { }

  @Input() toggle:any;
  

  ngOnInit(): void {
  }

}


