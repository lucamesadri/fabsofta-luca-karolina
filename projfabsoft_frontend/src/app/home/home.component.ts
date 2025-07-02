import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [BaseChartDirective],
  providers: [provideCharts(withDefaultRegisterables())]
})
export class HomeComponent implements OnInit {
  public chartData: ChartConfiguration['data'] = {
    labels: ['Filmes registrados', 'Avaliações feitas', 'Amizades feitas'],
    datasets: [
      { data: [0, 0, 0], label: 'Total' }
    ],
  };

  public chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Estatísticas Gerais do Sistema' }
    }
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    Promise.all([
      this.http.get<any[]>('http://localhost:8080/api/v1/filmes').toPromise().catch(() => []),
      this.http.get<any[]>('http://localhost:8080/api/v1/avaliacoes').toPromise().catch(() => []),
      this.http.get<any[]>('http://localhost:8080/api/v1/amizades').toPromise().catch(() => [])
    ]).then(([filmes, avaliacoes, amizades]) => {
      this.chartData = {
        labels: ['Filmes registrados', 'Avaliações feitas', 'Amizades feitas'],
        datasets: [
          { data: [
              Array.isArray(filmes) ? filmes.length : 0,
              Array.isArray(avaliacoes) ? avaliacoes.length : 0,
              Array.isArray(amizades) ? amizades.length : 0
            ], label: 'Total' }
        ]
      };
    });
  }
}