import {Component, Input, OnInit} from '@angular/core';
import {Participant} from "../types/participant";

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  @Input() participant!: Participant;

  constructor() { }

  ngOnInit(): void {
  }

}
