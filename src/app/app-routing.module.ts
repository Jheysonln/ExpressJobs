import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './presentation/features/info/about-us/about-us.component';
import { ContactUsComponent } from './presentation/features/info/contact-us/contact-us.component';
import { UserProfileComponent } from './presentation/features/info/user-profile/user-profile.component';
import { BaseAuthComponent } from './presentation/layout/base-auth/base-auth.component';
import { BaseLoggedComponent } from './presentation/layout/base-logged/base-logged.component';

const routes: Routes = [
    {
        path: '', redirectTo: 'auth', pathMatch: 'full'
    },
    {
        path:'auth',
        component:BaseAuthComponent,
        children:[
            {
                path:'login',
                loadChildren:() => import('./presentation/features/auth/login/login.module').then(
                    (m) => m.LoginModule
                )
            },
            {
                path:'signup',
                loadChildren:() => import('./presentation/features/auth/signup/signup.module').then(
                    (m) => m.SignupModule
                )
            },
            {path:'',redirectTo:'login',pathMatch:"prefix"}
        ]
    },
    {
        path:'',
        component:BaseLoggedComponent,
        children:[
            {
                path:'home',
                data: { breadcrumb: 'home' } ,
                loadChildren:() => import('./presentation/features/page/home/home.module').then(
                    (m) => m.HomeModule
                )
            },
            {
                path:'search-service',
                data: { breadcrumb: 'Search Service' } ,
                loadChildren:() => import('./presentation/features/page/search-service/search-service.module').then(
                    (m) => m.SearchServiceModule
                )
            },
            {
                path:'ranking',
                data: { breadcrumb: 'ranking' } ,
                loadChildren:() => import('./presentation/features/page/ranking/ranking.module').then(
                    (m) => m.RankingModule
                )
            },
            {
                path:'offers',
                data: { breadcrumb: 'offers' } ,
                loadChildren:() => import('./presentation/features/page/offers/offers.module').then(
                    (m) => m.OffersModule
                )
            },
            {
                path:'history',
                data: { breadcrumb: 'Histoy Orders' } ,
                loadChildren:() => import('./presentation/features/page/orders-history/orders-history.module').then(
                    (m) => m.OrdersHistoryModule
                )
            },
            {
                path:'services',
                data: { breadcrumb: 'Services Provided' } ,
                loadChildren:() => import('./presentation/features/page/services-provided/services-provided.module').then(
                    (m) => m.ServicesProvidedModule
                )
            },
            {
                path:'maintenance',
                loadChildren:() => import('./presentation/features/maintenance/maintenance.module').then(
                    (m) => m.MaintenanceModule
                )
            },
            {
                path:'reports',
                loadChildren:() => import('./presentation/features/reports/reports.module').then(
                    (m) => m.ReportsModule
                )
            },
            {
                path:'aboutUs',
                data: { breadcrumb: 'About Us' } ,
                component:AboutUsComponent
            },
            {
                path:'contactUs',
                data: { breadcrumb: 'Contact Us' } ,
                component:ContactUsComponent
            },
            {
                path:'profile',
                data: { breadcrumb: 'Profile' } ,
                component:UserProfileComponent
            },
            {path:'',redirectTo:'home',pathMatch:"prefix"}
        ]
    },
    {
        path:'**',
        redirectTo:'auth',
        pathMatch:'full'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }