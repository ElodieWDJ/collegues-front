import { DataService } from './../services/data.service';
// import { colleguemock } from './../mock/collegues.mock';
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
  modeCreation = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.col = this.dataService.recupererCollegueCourant();
  }
  // Fonction appelée lors du clic
  // tslint:disable-next-line: typedef
  modifierCollegue(){
    this.modeAffichage = false;
  }
  // tslint:disable-next-line: typedef
  creerCollegue(){
    alert('Création d’un nouveau collègue');
    this.modeCreation = true;
  }
  validerCollegue(): void {
    this.modeAffichage = true;
  }


}
