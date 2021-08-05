import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(private http:HttpClient) { }

  Tournament:any=[];

  modalTitle ="";
  TournamentId = 0;
  TournamentName = "";
  Place="";
  StartDate="";
  EndDate="";
  Rounds="";
  Category="";
  Website="";



  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.http.get<any>(environment.API_URL+'tournament')
    .subscribe(data=>{
      this.Tournament=data;
    });



  }

  addClick(){
    this.modalTitle="Add Tournament";
    this.TournamentId=0;
    this.TournamentName="";
    this.Place="";
    this.StartDate="";
    this.EndDate="";
    this.Rounds="";
    this.Category="";
    this.Website="";
  }

  editClick(tournament:any){
    this.modalTitle="Edit Tournament";
    this.TournamentId=tournament.EmployeeId;
    this.TournamentName=tournament.TournamentName;
    this.Place=tournament.Place;
    this.StartDate=tournament.StartDate;
    this.EndDate=tournament.EndDate;
    this.Rounds=tournament.Rounds;
    this.Category=tournament.Category;
    this.Website=tournament.Website;

  }

  createClick(){
    var val={
      TournamentName:this.TournamentName,
      Place:this.Place,
      StartDate:this.StartDate,
      EndDate:this.EndDate,
      Rounds:this.Rounds,
      Category:this.Category,
      Website:this.Website



    };

    this.http.post(environment.API_URL+'tournament',val)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshList();
    });
  }

  updateClick(){
    var val={
      TournamentId:this.TournamentId,
      TournamentName:this.TournamentName,
      Place:this.Place,
      StartDate:this.StartDate,
      EndDate:this.EndDate,
      Rounds:this.Rounds,
      Category:this.Category,
      Website:this.Website

    };

    this.http.put(environment.API_URL+'tournament',val)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshList();
    });
  }

  deleteClick(id:any){
    if(confirm('Are you sure want to delete?')){
    this.http.delete(environment.API_URL+'tournament/'+id)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshList();
    });
    }
  }


}
