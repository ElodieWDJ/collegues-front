import { CollegueCreerFormComponent } from './../collegue-creer/collegue-creer-form.component';
// import { matricules } from './../mock/matricules.mock';
import { Injectable } from '@angular/core';
import { c2 } from './../mock/collegues.mock';
import { collegueTab } from './../mock/matricules.mock';
import { Collegue } from './../models/Collegue';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { map, tap } from 'rxjs/operators';

interface CollegueBack {
  id: number;
  matricule: string;
  nom: string;
  prenom: string;
  email: string;
  dateDeNaissance: string;
  photoUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subCollegueSelectionne = new Subject<Collegue>();

  constructor(private http: HttpClient) { }

  rechercherParNom(nom: string): Observable<string[]> {
    return this.http.get<string[]>(`${environment.backendUrl}/collegues?nom=${nom}`);
  }

  recupererCollegueCourant(): Observable<Collegue> {
    return this.subCollegueSelectionne.asObservable();
  }

  selectionnerMatricule(matricule: string): Observable<Collegue> {
    return this.http.get<CollegueBack>(`${environment.backendUrl}/collegues/${matricule}`)
      .pipe(
        map(colBack => new Collegue(colBack.matricule, colBack.nom, colBack.prenom, colBack.email,
          new Date(colBack.dateDeNaissance), colBack.photoUrl)),
        tap(collegue => this.subCollegueSelectionne.next(collegue))
      );
  }

  creerCollegue(col: CollegueCreerFormComponent): Observable<Collegue> {
    return this.http.post<CollegueBack>(
      `${environment.backendUrl}/collegues`,
      col)
      .pipe(
        map(colBack => new Collegue(colBack.matricule, colBack.nom, colBack.prenom, colBack.email,
          new Date(colBack.dateDeNaissance), colBack.photoUrl)));
  }

}
