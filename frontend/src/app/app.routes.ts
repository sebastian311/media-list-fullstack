import { Routes } from '@angular/router';
import { DashboardComponent } from './smart-components/dashboard/dashboard.component';
import { AuthenticationComponent } from './smart-components/authentication/authentication.component';
import { UserInfoComponent } from './smart-components/user-info/user-info.component';
import { MyListComponent } from './smart-components/my-list/my-list.component';
import { WelcomeComponent } from './dumb-components/welcome-component/welcome-component.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent, 
        children: [
            { path: '', component: WelcomeComponent },
            { path: 'my-list', component: MyListComponent },
            { path: 'authorize', component: AuthenticationComponent },
            { path: 'user-info', component: UserInfoComponent },
        ]
    }
];
