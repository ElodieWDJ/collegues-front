import { DataService } from './../services/data.service';
// import { matricules } from './../mock/matricules.mock';
import { Component, OnInit } from '@angular/core';
import { colleguesTab } from '../mock/matricules.mock';



@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {
  affichageListe = false;
  matriculeNonTrouve = false;
  erreurTechnique = false;
  matricules: string[];
  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
  }
  rechercherCollegue(): void {
    this.matricules = null;
    this.matricules = null; // effacer les matricules affichés
    this.dataSrv.rechercherParNom(nomSaisi)
      .subscribe(matriculesBack => {
        this.erreurTechnique = false;
        if (matriculesBack.length > 0) {
          this.matriculeNonTrouve = false;
          this.matricules = matriculesBack;
        } else {
          this.matriculeNonTrouve = true;
        }

      },
        error => this.erreurTechnique = true);
  }

  selectionner(matricule: string): void {
    this.dataSrv.selectionnerMatricule(matricule)
      .subscribe(() => { },
        error => this.erreurTechnique = true);
  }

    }

