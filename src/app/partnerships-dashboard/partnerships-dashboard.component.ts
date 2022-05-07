import { Component, Inject, OnInit } from '@angular/core';
import { ModifyDialogPartnershipsComponent } from '../modify-dialog-partnerships/modify-dialog-partnerships.component';
import { PartnershipService } from '../partnership.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModifyDialogUserComponent } from '../modify-dialog-user/modify-dialog-user.component';
import { HttpClient } from '@angular/common/http';
import { Partnership } from '../model/Partnership';

@Component({
  selector: 'app-partnerships-dashboard',
  templateUrl: './partnerships-dashboard.component.html',
  styleUrls: ['./partnerships-dashboard.component.css']
})
export class PartnershipsDashboardComponent implements OnInit {
partnership: Partnership = new Partnership(0,"","",0,""); 
partnerships: any; 
message : any; 
public dataList:[Partnership] ;
    public newpartnershipDescription:String;
    public newnamePartnership:String;
    public newEventAttendency:number; 

  constructor(public service: PartnershipService, private http:HttpClient,@Inject(MAT_DIALOG_DATA) public data: {name: string},public dialog:MatDialog) { }

  ngOnInit(): void {
    let resp = this.service.retrievePartnerships();
    resp.subscribe((data)=>this.partnerships = data);
  }
  public DeletePartnership(idPartnerships: number){
    let resp = this.service.DeletePartnerships(idPartnerships);
    resp.subscribe((data)=>{
      return this.message = data;
    });
  }
  public openDialog = () => {
    const dialogRef = this.dialog.open(ModifyDialogPartnershipsComponent, {
      width: '480px',
      height:'480px',
      data: {name: this.partnerships},
    })};

}


