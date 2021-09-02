import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public hora: any;
  public minuto: string;
  public segundo: string;
  public ampm: string;

  constructor() {}

  ngOnInit(){
    setInterval(() =>{
      const data = new Date();
      this.updateDate(data);
    }, 1000);

  }
  private updateDate(data: Date){
      const horas = data.getHours();

      this.ampm = horas >= 12 ? 'PM' : 'AM';

      this.hora = horas % 12;
      this.hora = this.hora ? this.hora : 12;

      this.hora = this.hora < 10 ? '0' + this.hora : this.hora;

      const minutos = data.getMinutes();
      this.minuto = minutos < 10 ? '0' + minutos : minutos.toString();

      const segundos = data.getSeconds();
      this.segundo = segundos < 10 ? '0' + segundos : segundos.toString();
  }
}
