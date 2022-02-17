import { Component, OnInit } from '@angular/core';
import { PROJECTS } from 'src/assets/datas/projects';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects = PROJECTS;
  constructor() { }

  ngOnInit(): void {
  }

}
