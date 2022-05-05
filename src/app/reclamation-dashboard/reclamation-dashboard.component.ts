import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../reclamation.service';

@Component({
  selector: 'app-reclamation-dashboard',
  templateUrl: './reclamation-dashboard.component.html',
  styleUrls: ['./reclamation-dashboard.component.css']
})
export class ReclamationDashboardComponent implements OnInit {
recs:any;
  constructor(public service: ReclamationService) { }

  ngOnInit(): void {
    let resp = this.service.ShowReclamation();
    resp.subscribe((data)=>this.recs = data);
  }

}
