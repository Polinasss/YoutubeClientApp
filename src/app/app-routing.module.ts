import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchItemComponent } from './search/search-item/search-item.component';

const routes: Routes = [
  {
    path: 'date',
    component: SearchResultsComponent,
    canDeactivate: [
      (component: SearchResultsComponent) => !component.canLeave
    ],
  },
  {
    path: 'search-item/:id',
    component: SearchItemComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
