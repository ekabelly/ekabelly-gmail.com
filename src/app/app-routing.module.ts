import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ErrorPageComponent } from './layout/error-page/error-page.component';
import { StoreComponent } from './layout/store/store.component';

const appRoute: Routes = [
    { path: 'store', component: StoreComponent, pathMatch: 'full' }, //localhost:4200/
    { path: 'not-found', component: ErrorPageComponent },
    { path: '**',  redirectTo:'/not-found' }
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoute)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}