import { Component } from '@angular/core';
import { Amizade } from '../model/amizade';
import { AmizadeService } from '../service/amizade.service';
@Component({
  selector: 'app-amizade',
  imports: [],
  templateUrl: './amizade.component.html',
  styleUrl: './amizade.component.css'
})
export class AmizadeComponent {

    public listaAmizades: Amizade[] = [];
    constructor(
        private amizadeService: AmizadeService
    ){}
        ngOnInit(): void {
          this.amizadeService.getAmizades().subscribe(resposta => {
            this.listaAmizades = resposta;
        })
    }
}
