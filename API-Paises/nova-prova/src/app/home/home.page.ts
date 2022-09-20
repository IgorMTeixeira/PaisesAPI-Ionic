import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CountryService } from '../api/country.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  countries: any = {};

  constructor(
    private countryService: CountryService,
    private toastController: ToastController
  ) {
    this.getCountries();
  }

  private async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 4000,
    });
    toast.present();
  }

  getPaisesNaoIndependentes() {
    this.countries = this.countries.filter((country) => !country.independent);
    this.exibirMensagem(
      `Existem ${this.countries.length} países Não Independentes.`
    );
  }

  getCountries() {
    this.countryService
      .getAll()
      .then((country) => {
        //função anonima
        this.countries = country;
      })
      .catch((erro) => {
        console.log(erro);
      });
    this.exibirMensagem(`Existem ${this.countries.length} países no total.`);
  }
}
