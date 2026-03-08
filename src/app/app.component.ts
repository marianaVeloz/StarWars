import { Component } from '@angular/core';
import { ProductService } from './services/post.service';
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

  constructor(private product: ProductService) {}

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
}