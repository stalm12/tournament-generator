import { Component } from '@angular/core';
import {Participant} from "./types/participant";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tournament-generator';
  inputTN: string = "";
  participants: Participant[] = [];

  import() {
    let lines = this.inputTN.split("\n");
    let allTn = lines.map(l => this.createTN(l.split("\t")))
    this.participants = allTn;
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
}
