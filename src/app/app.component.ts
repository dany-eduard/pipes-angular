import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre = 'Daniel Eduardo Almagro';
  nombre2 = 'daNieL aLmAgRo';
  nombres = [
    'Daniel',
    'José',
    'Davis',
    'Leví',
    'Ana',
    'Marcela',
    'Maria',
    'Camila',
    'Sara',
    'Tatiana',
  ];
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pi = Math.PI;
  porcentaje = 0.4265;
  salario = 894132;
  fecha = new Date();
  idioma = 'es';
  mostrar = true;
  video = 'https://www.youtube.com/embed/HFdw1XDKbTM';
  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llegó la data');
    }, 4000);
  });

  persona = {
    nombre: 'Daniel',
    apellido: 'Almagro',
    edad: 19,
    direccion: {
      calle: '12',
      ciudad: 'El Concorde',
    },
  };
}
