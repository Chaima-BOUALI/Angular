import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { PublicationService } from '../publication.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  pubs: any = []
  message: any;
  constructor(public service: PublicationService, public dp: DatePipe) { }

  ngOnInit(): void {
    let resp = this.service.ShowPub();
    resp.subscribe((data: any) => {

      data.map((pub: any) => {
        let convertToDate = new Date(pub.createdAt)
         let date :any = this.dp.transform(convertToDate, 'dd/MM/yyyy');
        // let date: any = "12/03/2022";
         let time = convertToDate.getHours() + ": " + convertToDate.getMinutes() + ": "+ convertToDate.getSeconds()
          // console.log("created at", pub)
        //  console.log("created at", date)
        //  console.log("created at", pub.createdAt)
        let newPublication = {id:pub.id, title: pub.title, desc: pub.publication_txt, date, time }
        this.pubs.push(newPublication)

      })
    });

  }
  public DeletePub(pub_id: any) {
    console.log("created at", pub_id)

    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.DeletePubs(pub_id).subscribe(success=>{
          swal.fire(
            'Deleted!',
            'Your publication has been deleted.',
            'success'
          ).then(()=>{
             window.location.reload()


          })

        })
      }
    })
    // this.service.DeletePubs(pub_id).subscribe()
    // let resp = this.service.DeletePubs(pub_id);
    // resp.subscribe((data) => {
    //   return this.message = data;
    // });
  }
 

  comment(pubId:number) {
    console.log(pubId)

  }
}
