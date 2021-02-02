import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelazioneComponent } from './relazione/relazione.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  { path: 'relazione', component: RelazioneComponent },
  { path: 'data-chart', component: ChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
