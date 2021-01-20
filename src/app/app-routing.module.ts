import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'feat1/comp1', pathMatch: 'full'},
  {path: 'feat1', loadChildren: () => import('./feat1/feat1.module').then(m => m.Feat1Module)},
  {path: '', loadChildren: () => import('./legacy/legacy.module').then(m => m.LegacyModule)}
  //{path: '', loadChildren: './legacy/legacy.module#LegacyModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    // Uncomment to enable preloading and prebootstrapping
    // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
