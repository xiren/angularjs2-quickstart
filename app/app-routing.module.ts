import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SignInFormComponent } from './signIn/signIn-form.component'
import { SignUpFormComponent } from './signUp/signUp-form.component'
import { ContentComponent } from './content/content.component'
import { ContainerComponent } from './container/container.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ReportComponent } from './report/report.component'


const routes: Routes = [
    {
        path: '',
        redirectTo: 'signIn',
        pathMatch: 'full'
    },
    {
        path: 'signIn',
        component: SignInFormComponent
    },
    {
        path: 'signUp',
        component: SignUpFormComponent
    },
    {
        path: 'content',
        component: ContentComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch:'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'report',
                component: ReportComponent
            }]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}