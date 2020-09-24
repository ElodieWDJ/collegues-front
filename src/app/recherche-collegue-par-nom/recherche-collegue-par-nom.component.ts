import { matricules } from './../mock/matricules.mock';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {
  affichageListe = false;
  matricules: string[] = matricules;
  constructor() { }

  ngOnInit(): void {
  }
  rechercherCollegue(): void {
    this.affichageListe = true;
    }
}
