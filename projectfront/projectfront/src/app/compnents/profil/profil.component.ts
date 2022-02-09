import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  @Input() employeeInput:any;
  @Output() newMatches:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
