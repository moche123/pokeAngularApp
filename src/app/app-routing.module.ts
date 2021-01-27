import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageComponent } from './components/manage/manage.component';
import { ResultComponent } from './components/result/result.component';
import { VoteComponent } from './components/vote/vote.component';
import { NovoteagainGuard } from './guards/novoteagain.guard';
import { VoteGuard } from './guards/vote.guard';
const routes: Routes = [
  {
    path: '', 
    redirectTo: 'manage', 
    pathMatch: 'full'
  },
  {
    path:'manage',
    component: ManageComponent,
    canActivate: [NovoteagainGuard],
    canDeactivate: [NovoteagainGuard]
  },
  {
    path:'vote',
    component: VoteComponent,
    canActivate: [VoteGuard],
  },
  { 
    path:'result',
    component: ResultComponent,
    canActivate: [VoteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
