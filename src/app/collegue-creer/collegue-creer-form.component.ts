import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue-creer',
  templateUrl: './collegue-creer-form.component.html',
  styleUrls: ['./collegue-creer-form.component.css']
})
export class CollegueCreerFormComponent implements OnInit {
  creerCollegue: Collegue = {
    nom: 'Doe',
    prenoms: 'John',
    dateDeNaissance: new Date(1900, 1, 1),
    email: 'john.doe@inconnu.fr',
    photoUrl: 'Image'
  };
  erreurTechnique = false;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  creer(): void{
    this.dataService.creerCollegue(this.creerCollegue).subscribe(
      col => {
        this.creerCollegue = {};
      },
      error => this.erreurTechnique = true
    );
  }
  }

