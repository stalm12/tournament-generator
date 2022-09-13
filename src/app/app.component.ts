import {Component, OnInit} from '@angular/core';
import {Participant} from "./types/participant";
import {isElementScrolledOutsideView} from "@angular/cdk/overlay/position/scroll-clip";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private STORAGE_KEY = "participants"

  title = 'tournament-generator';
  inputTN: string = "";
  participants: Participant[] = [];


  ngOnInit(): void {
    let storedParticipants = localStorage.getItem(this.STORAGE_KEY);
    if(storedParticipants != null) {
      this.participants = JSON.parse(storedParticipants);
    }
  }

  import() {
    let lines = this.inputTN.split("\n");
    let allTn = lines.map(l => this.createTN(l.split("\t")))
    this.participants = allTn;
    this.saveToLocalStore();
    console.log(allTn);
  }

  createTN(input: string[]) {
    let [firstName, lastName, gradeString] = input;
    let grade = parseInt(gradeString.split(".")[0]);
    return {
      firstName,
      lastName,
      grade
    }
  }

  calculateNumberOfTnInPreRound(tn: number) {
    let sizeOfPreRound = this.calculateTournamentSize(tn);
    let sizeOfFirstRound = sizeOfPreRound / 2;
    return (tn - sizeOfFirstRound) * 2;
  }


  calculateTournamentSize(tn: number) {
    let size = 0
    for(let i = 1; size < tn; i++){
      size = Math.pow(2, i);
    }
    return size;
  }

  saveToLocalStore() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.participants));
  }
}
