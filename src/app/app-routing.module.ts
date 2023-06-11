import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckLoginGuardGuard } from './core/guards/check-login-guard.guard';
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
                canActivate: [CheckLoginGuardGuard], 
                data: { breadcrumb: 'Home' ,allowedRoles: ['ROLE_ADMIN','ROLE_USERWORKER','ROLE_USER'] }, 
                loadChildren:() => import('./presentation/features/page/home/home.module').then(
                    (m) => m.HomeModule
                )
            },
            {
                path:'search-service',
                canActivate: [CheckLoginGuardGuard], 
                data: { breadcrumb: 'Search Service' ,allowedRoles: ['ROLE_ADMIN','ROLE_USERWORKER','ROLE_USER'] }, 
                loadChildren:() => import('./presentation/features/page/search-service/search-service.module').then(
                    (m) => m.SearchServiceModule
                )
            },
            {
                path:'ranking',
                canActivate: [CheckLoginGuardGuard], 
                data: { breadcrumb: 'Ranking' ,allowedRoles: ['ROLE_ADMIN','ROLE_USERWORKER','ROLE_USER'] }, 
                loadChildren:() => import('./presentation/features/page/ranking/ranking.module').then(
                    (m) => m.RankingModule
                )
            },
            {
                path:'offers',
                canActivate: [CheckLoginGuardGuard], 
                data: { breadcrumb: 'Offers' ,allowedRoles: ['ROLE_ADMIN','ROLE_USERWORKER','ROLE_USER'] }, 
                loadChildren:() => import('./presentation/features/page/offers/offers.module').then(
                    (m) => m.OffersModule
                )
            },
            {
                path:'history',
                canActivate: [CheckLoginGuardGuard], 
                data: { breadcrumb: 'Histoy Orders' ,allowedRoles: ['ROLE_ADMIN','ROLE_USERWORKER','ROLE_USER'] }, 
                loadChildren:() => import('./presentation/features/page/orders-history/orders-history.module').then(
                    (m) => m.OrdersHistoryModule
                )
            },
            {
                path:'services',
                canActivate: [CheckLoginGuardGuard], 
                data: { breadcrumb: 'Services Provided' ,allowedRoles: ['ROLE_ADMIN','ROLE_USERWORKER'] }, 
                loadChildren:() => import('./presentation/features/page/services-provided/services-provided.module').then(
                    (m) => m.ServicesProvidedModule
                )
            },
            {
                path:'maintenance',
                canActivate: [CheckLoginGuardGuard], 
                data: { breadcrumb: 'Maintenance' ,allowedRoles: ['ROLE_ADMIN'] }, 
                loadChildren:() => import('./presentation/features/maintenance/maintenance.module').then(
                    (m) => m.MaintenanceModule
                )
            },
            {
                path:'reports',
                canActivate: [CheckLoginGuardGuard], 
                data: { breadcrumb: 'Reports' ,allowedRoles: ['ROLE_ADMIN'] }, 
                loadChildren:() => import('./presentation/features/reports/reports.module').then(
                    (m) => m.ReportsModule
                )
            },
            {
                path:'aboutUs',
                canActivate: [CheckLoginGuardGuard], 
                data: { breadcrumb: 'About Us' ,allowedRoles: ['ROLE_ADMIN','ROLE_USERWORKER','ROLE_USER'] }, 
                component:AboutUsComponent
            },
            {
                path:'contactUs',
                canActivate: [CheckLoginGuardGuard], 
                data: { breadcrumb: 'Contact Us' ,allowedRoles: ['ROLE_ADMIN','ROLE_USERWORKER','ROLE_USER'] }, 
                component:ContactUsComponent
            },
            {
                path:'profile',
                canActivate: [CheckLoginGuardGuard], 
                data: { breadcrumb: 'Profile' ,allowedRoles: ['ROLE_ADMIN','ROLE_USERWORKER','ROLE_USER'] }, 
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