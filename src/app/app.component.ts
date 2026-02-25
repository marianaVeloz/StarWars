import { Component } from '@angular/core';
import { SwapiService } from './services/swapi.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Coincide con el HTML
  section: 'people' | 'planets' | 'starships' = 'people';
  characterId: number | null = null;

  loading = false;
  errorMessage = '';

  person: any = null;
  planet: any = null;
  starship: any = null;

  homeworldName = '';
  placeholderText: string = 'Ej: 1 (Luke Skywalker)';

  constructor(private swapi: SwapiService) {}

  clearInput() {
  this.characterId = null;
}
  
  updatePlaceholder() {
  if (this.section === 'people') {
    this.placeholderText = 'Ej: 1 (Luke Skywalker)';
  }
  else if (this.section === 'planets') {
    this.placeholderText = 'Ej: 3 (Yavin IV)';
  }
  else if (this.section === 'starships') {
    this.placeholderText = 'Ej: 9 (Death Star)';
  }
}


ngOnInit() {
  this.updatePlaceholder();
}

  // Coincide con el HTML: lo busca load()
  load() {
    this.errorMessage = '';
    this.loading = true;

    // limpiar tarjetas
    this.person = null;
    this.planet = null;
    this.starship = null;
    this.homeworldName = '';

    const id = Number(this.characterId);

    //Buscar por id
    if (!id || id < 1) {
      this.loading = false;
      this.errorMessage = 'Ingresa un ID válido (>= 1).';
      return;
    }
    
    // Personaje
    if (this.section === 'people') {
      this.swapi.getPersonById(id).subscribe({
        next: (p) => {
          this.person = p;

          // Referencia al planeta (homeworld) solo en people
          if (p?.homeworld) {
            this.swapi.getPlanetByUrl(p.homeworld).subscribe({
              next: (pl) => (this.homeworldName = pl?.name || 'Desconocido'),
              error: () => (this.homeworldName = 'Desconocido')
            });
          }

          this.loading = false;
          this.clearInput();
        },
        error: () => {
          this.loading = false;
          this.errorMessage = 'No se encontró el personaje con ese ID.';
          this.clearInput();
        }
      });
      return;
    }

//Planeta
    if (this.section === 'planets') {
      this.swapi.getPlanetById(id).subscribe({
        next: (pl) => {
          this.planet = pl;
          this.loading = false;
          this.clearInput();
        },
        error: () => {
          this.loading = false;
          this.errorMessage = 'No se encontró el planeta con ese ID.';
          this.clearInput();
        }
      });
      return;
    }

    // Naves
    this.swapi.getStarshipById(id).subscribe({
      next: (s) => {
        this.starship = s;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.errorMessage = 'No se encontró la nave con ese ID.';
      }
    });
    
  }
}