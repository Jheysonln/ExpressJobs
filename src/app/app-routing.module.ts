import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './shared/auth/auth.component';
import { SharedComponent } from './shared/shared.component';

const routes: Routes = [
    {
        path:'',
        component:SharedComponent,
        children:[
            {
                path:'dashboard',
                loadChildren:() => import('./page/dashboard/dashboard.module').then(
                    (m) => m.DashboardModule
                )
            },
            {
                path:'aplication',
                loadChildren:() => import('./page/aplication/aplication.module').then(
                    (m) => m.AplicationModule
                )
            },
            {
                path:'widget',
                loadChildren:() => import('./page/widgets/widgets.module').then(
                    (m) => m.WidgetsModule
                )
            },
            {
                path:'ecommerce',
                loadChildren:() => import('./page/ecommerce/ecommerce.module').then(
                    (m) => m.EcommerceModule
                )
            },
            {
                path:'components',
                loadChildren:() => import('./page/components/components.module').then(
                    (m) => m.ComponentsModule
                )
            },
            {
                path:'content',
                loadChildren:() => import('./page/content/content.module').then(
                    (m) => m.ContentModule
                )
            },
            {
                path:'icon',
                loadChildren:() => import('./page/icons/icons.module').then(
                    (m) => m.IconsModule
                )
            },
            {
                path:'forms',
                loadChildren:() => import('./page/forms/forms.module').then(
                    (m) => m.FormsModule
                )
            },
            {
                path:'tables',
                loadChildren:() => import('./page/tables/tables.module').then(
                    (m) => m.TablesModule
                )
            },
            // {
            //     path:'authentication',
            //     loadChildren:() => import('./page/authentication/authentication.module').then(
            //         (m) => m.AuthenticationModule
            //     )
            // },
            // {
            //     path:'auth',
            //     loadChildren:() => import('./shared/auth/auth.module').then(
            //         (m) => m.AuthModule
            //     )
            // },
            {
                path:'userprofile',
                loadChildren:() => import('./page/user-profile/user-profile.module').then(
                    (m) => m.UserProfileModule
                )
            },
            {
                path:'timeline',
                loadChildren:() => import('./page/timeline/timeline.module').then(
                    (m) => m.TimelineModule
                )
            },
            {
                path:'errors',
                loadChildren:() => import('./page/errors/errors.module').then(
                    (m) => m.ErrorsModule
                )
            },
            {
                path:'faq',
                loadChildren:() => import('./page/faq/faq.module').then(
                    (m) => m.FaqModule
                )
            },
            {
                path:'pricing',
                loadChildren:() => import('./page/pricing/pricing.module').then(
                    (m) => m.PricingModule
                )
            },
            {
                path:'charts',
                loadChildren:() => import('./page/charts/charts.module').then(
                    (m) => m.ChartsModule
                )
            },
            {
                path:'maps',
                loadChildren:() => import('./page/maps/maps.module').then(
                    (m) => m.MapsModule
                )
            },
            {path:'',redirectTo:'dashboard',pathMatch:"prefix"}
        ]
    },
    {
        path:'auth',
        component:AuthComponent,
        children:[
            {
                path:'signin',
                loadChildren:() => import('./shared/auth/signin/signin.module').then(
                    (m) => m.SigninModule
                )
            },
            
            {
                path:'signup',
                loadChildren:() => import('./shared/auth/signup/signup.module').then(
                    (m) => m.SignupModule
                )
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }