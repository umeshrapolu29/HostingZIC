import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BaseLayoutComponent} from './Layout/base-layout/base-layout.component';
import {PagesLayoutComponent} from './Layout/pages-layout/pages-layout.component';

// DEMO PAGES

// Dashboards

import {AnalyticsComponent} from './DemoPages/Dashboards/analytics/analytics.component';

// Pages

import {ForgotPasswordBoxedComponent} from './DemoPages/UserPages/forgot-password-boxed/forgot-password-boxed.component';
import {LoginBoxedComponent} from './DemoPages/UserPages/login-boxed/login-boxed.component';
import {RegisterBoxedComponent} from './DemoPages/UserPages/register-boxed/register-boxed.component';

// Elements

import {StandardComponent} from './DemoPages/Elements/Buttons/standard/standard.component';
import {DropdownsComponent} from './DemoPages/Elements/dropdowns/dropdowns.component';
import {CardsComponent} from './DemoPages/Elements/cards/cards.component';
import {ListGroupsComponent} from './DemoPages/Elements/list-groups/list-groups.component';
import {TimelineComponent} from './DemoPages/Elements/timeline/timeline.component';
import {IconsComponent} from './DemoPages/Elements/icons/icons.component';

// Components

import {AccordionsComponent} from './DemoPages/Components/accordions/accordions.component';
import {TabsComponent} from './DemoPages/Components/tabs/tabs.component';
import {CarouselComponent} from './DemoPages/Components/carousel/carousel.component';
import {ModalsComponent} from './DemoPages/Components/modals/modals.component';
import {ProgressBarComponent} from './DemoPages/Components/progress-bar/progress-bar.component';
import {PaginationComponent} from './DemoPages/Components/pagination/pagination.component';
import {TooltipsPopoversComponent} from './DemoPages/Components/tooltips-popovers/tooltips-popovers.component';

// Tables

import {TablesMainComponent} from './DemoPages/Tables/tables-main/tables-main.component';

// Widgets

import {ChartBoxes3Component} from './DemoPages/Widgets/chart-boxes3/chart-boxes3.component';

// Forms Elements

import {ControlsComponent} from './DemoPages/Forms/Elements/controls/controls.component';
import {LayoutComponent} from './DemoPages/Forms/Elements/layout/layout.component';

// Charts

import {ChartjsComponent} from './DemoPages/Charts/chartjs/chartjs.component';
import { DummyComponent } from './dummy/dummy.component';
import { ApplicationcontrolComponent } from './applicationcontrol/applicationcontrol.component';

import { UsersComponent } from './Dashboards/users/users.component';
import { ControlComponent } from './DemoPages/Dashboards/control/control.component';
import { Funny1Component } from './DemoPages/Elements/funny1/funny1.component';


import { ESRComponent } from './DemoPages/Elements/esr/esr.component';
import { ResourcesComponent } from './DemoPages/Elements/resources/resources.component';
import { Dialogbox1Component } from './DemoPages/Elements/dialogbox1/dialogbox1.component';

import { RegistrationformComponent } from './registrationform/registrationform.component';
import { LoginformComponent } from './loginform/loginform.component';
import { PostingComponent } from './DemoPages/Elements/posting/posting.component';
import { HomepageComponent } from './DemoPages/Elements/homepage/homepage.component';
import { Dialogbox2Component } from './DemoPages/Element/dialogbox2/dialogbox2.component';
import { FreindrequestComponent } from './DemoPages/Elements/freindrequest/freindrequest.component';
import { FriendsComponent } from './DemoPages/Elements/friends/friends.component';
import { FrienddetailsComponent } from './DemoPages/Elements/frienddetails/frienddetails.component';
import { PhotosComponent } from './DemoPages/Elements/photos/photos.component';

import { ResetpasswordComponent } from './DemoPages/Elements/resetpassword/resetpassword.component';
import { MessengerComponent } from './DemoPages/Elements/messenger/messenger.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { Forget1passwordComponent } from './DemoPages/Elements/forget1password/forget1password.component';
import { FriendslistComponent } from './DemoPages/Elements/friendslist/friendslist.component';



const routes: Routes = [

{path:'registration',component:RegistrationformComponent},
{path:'login',component:LoginformComponent},
{path:'forgetpassword',component:ForgetpasswordComponent},
{path:'forgetpassword1',component:Forget1passwordComponent},

{path:'resetpassword',component:ResetpasswordComponent},
  {
    path: '',
    component: BaseLayoutComponent,
    children: [

      // Dashboads

     
    
      {path:'applicationcontrol',component:ApplicationcontrolComponent, data: {extraParameter: 'dashboardsMenu'}},
      


      {path:'users',component:UsersComponent, data: {extraParameter: 'dashboardsMenu'}},
      {path:'control',component:ControlComponent, data: {extraParameter: 'dashboardsMenu'}},
     
   
     
      // Elements

      {path: 'elements/buttons-standard', component: StandardComponent, data: {extraParameter: 'elementsMenu'}},
      {path: 'elements/dropdowns', component: DropdownsComponent, data: {extraParameter: 'elementsMenu'}},
      {path: 'elements/icons', component: IconsComponent, data: {extraParameter: 'elementsMenu'}},
      {path: 'elements/cards', component: CardsComponent, data: {extraParameter: 'elementsMenu'}},
      {path: 'elements/list-group', component: ListGroupsComponent, data: {extraParameter: 'elementsMenu'}},
      {path: 'elements/timeline', component: TimelineComponent, data: {extraParameter: 'elementsMenu'}},
      {path:'elements/funny1',component:Funny1Component, data: {extraParameter: 'elementsMenu'}},
   
      {path:'elements/esr',component:ESRComponent,data:{extraParameter:'elementsMenu'}},
      {path:'elements/resources',component:ResourcesComponent,data:{extraParameter:'elementsmenu'}},
      {path:'elements/dialogbox',component:Dialogbox1Component,data:{extraParameter:'elementsmenu'}},
      {path:'elements/dialogbox2',component:Dialogbox2Component,data:{extraParameter:'elementsmenu'}},
      {path:'elements/posting',component:PostingComponent,data:{extraParameter:'elementsmenu'}},
      {path:'elements/homepage',component:HomepageComponent,data:{extraParameter:'elementsmenu'}},
      {path:'elements/freindrequests',component:FreindrequestComponent,data:{extraParameter:'elementsmenu'}},
      {path:'elements/friends',component:FriendsComponent,data:{extraParameter:'elementsmenu'}},
      {path:'elements/friendsdetails',component:FrienddetailsComponent,data:{extraParameter:'elementsmenu'}},
      {path:'elements/photos',component:PhotosComponent,data:{extraParameter:'elementsmenu'}},
      {path:'elements/messenger',component:MessengerComponent,data:{extraParameter:'elementsmenu'}},
      {path:'elements/friendslist',component:FriendslistComponent,data:{extraParameter:'elementsmenu'}},



      // Components

      {path: 'components/tabs', component: TabsComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/accordions', component: AccordionsComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/modals', component: ModalsComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/progress-bar', component: ProgressBarComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/tooltips-popovers', component: TooltipsPopoversComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/carousel', component: CarouselComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/pagination', component: PaginationComponent, data: {extraParameter: 'componentsMenu'}},
      {path:'components/dummy',component:DummyComponent},
     
    

      // Tables

      {path: 'tables/bootstrap', component: TablesMainComponent, data: {extraParameter: 'tablesMenu'}},

      // Widgets

      {path: 'widgets/chart-boxes-3', component: ChartBoxes3Component, data: {extraParameter: 'pagesMenu3'}},

      // Forms Elements

      {path: 'forms/controls', component: ControlsComponent, data: {extraParameter: 'formElementsMenu'}},
      {path: 'forms/layouts', component: LayoutComponent, data: {extraParameter: 'formElementsMenu'}},

      // Charts

      {path: 'charts/chartjs', component: ChartjsComponent, data: {extraParameter: ''}},

    ]

  },
  {
    path: '',
    component: PagesLayoutComponent,
    children: [

      // User Pages

      {path: 'pages/login-boxed', component: LoginBoxedComponent, data: {extraParameter: ''}},
      {path: 'pages/register-boxed', component: RegisterBoxedComponent, data: {extraParameter: ''}},
      {path: 'pages/forgot-password-boxed', component: ForgotPasswordBoxedComponent, data: {extraParameter: ''}},
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
