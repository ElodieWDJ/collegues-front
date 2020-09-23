import { colleguemock } from './../mock/collegues.mock';
import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  @Input()col: Collegue;

  modeAffichage = true;

  constructor() { }

  ngOnInit(): void {
  }
  // Fonction appelée lors du clic
  // tslint:disable-next-line: typedef
  modifierCollegue(){
    this.modeAffichage = false;
  }
  // tslint:disable-next-line: typedef
  creerCollegue(){
    alert('Création d’un nouveau collègue');
  }
  validerCollegue(): void {
    this.modeAffichage = true;
  }


}
