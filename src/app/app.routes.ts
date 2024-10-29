import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path: '', redirectTo:'/home',pathMatch:'full' },
    { path: 'services', component: ServicesComponent },
    { path: 'contact', component: ContactComponent },
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports:[RouterModule]
})
export class appRoutingModule {}