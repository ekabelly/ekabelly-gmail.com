import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ErrorPageComponent } from './layout/error-page/error-page.component';
import { StoreComponent } from './layout/store/store.component';
import { TestComponent } from './layout/test/test.component';

const appRoute: Routes = [
    { path: 'store/:storeId', component: StoreComponent, pathMatch: 'full' }, //localhost:4200/
    { path: 'test', component: TestComponent },
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