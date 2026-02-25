// Importamos TestBed, que es la herramienta principal de Angular para configurar
// y crear un entorno de pruebas (testing environment).
import { TestBed } from '@angular/core/testing';

// Importamos el componente que vamos a probar.
import { AppComponent } from './app.component';

// describe define un "bloque de pruebas" para AppComponent.
// Es una función de Jasmine (el framework de testing que usa Angular por defecto).
describe('AppComponent', () => {

  // it define un caso de prueba individual.
  // El texto 'should create' describe lo que esperamos que pase.
  it('should create', () => {

    // Creamos un "fixture", que es un contenedor de pruebas para el componente.
    // El fixture nos permite acceder tanto al componente como a su plantilla (HTML).
    const fixture = TestBed.createComponent(AppComponent);

    // Obtenemos la instancia real del componente desde el fixture.
    const app = fixture.componentInstance;

    // expect es una aserción: verificamos que el componente exista (no sea null o undefined).
    // toBeTruthy() significa "esperamos que esto sea verdadero".
    expect(app).toBeTruthy();
  });
});
