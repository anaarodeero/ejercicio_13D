import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html'
})
export class Pagina1Component
  implements
    OnInit,
    OnDestroy
{

  nombre:string = "";

  constructor() {}
  ngOnInit(): void {
    this.nombre = "Ana";
    console.log("Inicializada la variable nombre a: " + this.nombre);
  }

  ngOnDestroy(): void {
    console.log("No se muestra el componente pagina1");
  }

}
