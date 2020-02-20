import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgReduxModule} from '@angular-redux/store';
import {NgRedux, DevToolsExtension} from '@angular-redux/store';
import {rootReducer, ArchitectUIState} from './ThemeOptions/store';
import {ConfigActions} from './ThemeOptions/store/config.actions';
import {AppRoutingModule} from './app-routing.module';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';

// BOOTSTRAP COMPONENTS

import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {ChartsModule} from 'ng2-charts';

// LAYOUT

import {BaseLayoutComponent} from './Layout/base-layout/base-layout.component';
import {PagesLayoutComponent} from './Layout/pages-layout/pages-layout.component';
import {PageTitleComponent} from './Layout/Components/page-title/page-title.component';

// HEADER

import {HeaderComponent} from './Layout/Components/header/header.component';
import {SearchBoxComponent} from './Layout/Components/header/elements/search-box/search-box.component';
import {UserBoxComponent} from './Layout/Components/header/elements/user-box/user-box.component';

// SIDEBAR

import {SidebarComponent} from './Layout/Components/sidebar/sidebar.component';
import {LogoComponent} from './Layout/Components/sidebar/elements/logo/logo.component';

// FOOTER

import {FooterComponent} from './Layout/Components/footer/footer.component';

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

import {RegularComponent} from './DemoPages/Tables/regular/regular.component';
import {TablesMainComponent} from './DemoPages/Tables/tables-main/tables-main.component';

// Widgets

import {ChartBoxes3Component} from './DemoPages/Widgets/chart-boxes3/chart-boxes3.component';

// Forms Elements

import {ControlsComponent} from './DemoPages/Forms/Elements/controls/controls.component';
import {LayoutComponent} from './DemoPages/Forms/Elements/layout/layout.component';

// Charts

import {ChartjsComponent} from './DemoPages/Charts/chartjs/chartjs.component';

// Chart.js Examples

import {LineChartComponent} from './DemoPages/Charts/chartjs/examples/line-chart/line-chart.component';
import {BarChartComponent} from './DemoPages/Charts/chartjs/examples/bar-chart/bar-chart.component';
import {ScatterChartComponent} from './DemoPages/Charts/chartjs/examples/scatter-chart/scatter-chart.component';
import {RadarChartComponent} from './DemoPages/Charts/chartjs/examples/radar-chart/radar-chart.component';
import {PolarAreaChartComponent} from './DemoPages/Charts/chartjs/examples/polar-area-chart/polar-area-chart.component';
import {BubbleChartComponent} from './DemoPages/Charts/chartjs/examples/bubble-chart/bubble-chart.component';
import {DynamicChartComponent} from './DemoPages/Charts/chartjs/examples/dynamic-chart/dynamic-chart.component';
import {DoughnutChartComponent} from './DemoPages/Charts/chartjs/examples/doughnut-chart/doughnut-chart.component';
import {PieChartComponent} from './DemoPages/Charts/chartjs/examples/pie-chart/pie-chart.component';
import { DummyComponent } from './dummy/dummy.component';
import { ApplicationcontrolComponent } from './applicationcontrol/applicationcontrol.component';

import { UsersComponent } from './Dashboards/users/users.component';
import { ChartComponent } from './Charts/chart/chart.component';
import { ControlComponent } from './DemoPages/Dashboards/control/control.component';
import { DelementComponent } from './Elements/delement/delement.component';
import { FunnyComponent } from './Elements/funny/funny.component';
import { Funny1Component } from './DemoPages/Elements/funny1/funny1.component';


import { ESRComponent } from './DemoPages/Elements/esr/esr.component';
import { ResourcesComponent } from './DemoPages/Elements/resources/resources.component';
import { ChartModule } from 'angular2-chartjs';
// For MDB Angular Free
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import { Dialogbox1Component } from './DemoPages/Elements/dialogbox1/dialogbox1.component';
import { Dialogbox2Component } from './DemoPages/Element/dialogbox2/dialogbox2.component';

import { RegistrationformComponent } from './registrationform/registrationform.component';
import { LoginformComponent } from './loginform/loginform.component';
import { PostingComponent } from './DemoPages/Elements/posting/posting.component';
import { HomepageComponent } from './DemoPages/Elements/homepage/homepage.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FreindrequestComponent } from './DemoPages/Elements/freindrequest/freindrequest.component';
import { FriendsComponent } from './DemoPages/Elements/friends/friends.component';
import { FrienddetailsComponent } from './DemoPages/Elements/frienddetails/frienddetails.component';
import { PhotosComponent } from './DemoPages/Elements/photos/photos.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ResetpasswordComponent } from './DemoPages/Elements/resetpassword/resetpassword.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MessengerComponent } from './DemoPages/Elements/messenger/messenger.component';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import{MatSnackBarModule} from '@angular/material';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { Forget1passwordComponent } from './DemoPages/Elements/forget1password/forget1password.component';

import { FriendslistComponent } from './DemoPages/Elements/friendslist/friendslist.component';




const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [

    // LAYOUT

    AppComponent,
    BaseLayoutComponent,
    PagesLayoutComponent,
    PageTitleComponent,
    
    // HEADER

    HeaderComponent,
    SearchBoxComponent,
    UserBoxComponent,

    // SIDEBAR

    SidebarComponent,
    LogoComponent,

    // FOOTER

    FooterComponent,

    // DEMO PAGES

    // Dashboards

    AnalyticsComponent,
    ControlComponent,

    // User Pages

    ForgotPasswordBoxedComponent,
    LoginBoxedComponent,
    RegisterBoxedComponent,

    // Elements

    StandardComponent,
    IconsComponent,
    DropdownsComponent,
    CardsComponent,
    ListGroupsComponent,
    TimelineComponent,

    // Components

    AccordionsComponent,
    TabsComponent,
    CarouselComponent,
    ModalsComponent,
    ProgressBarComponent,
    PaginationComponent,
    TooltipsPopoversComponent,

    // Tables

    RegularComponent,
    TablesMainComponent,

    // Dashboard Boxes

    ChartBoxes3Component,

    // Form Elements

    ControlsComponent,
    LayoutComponent,

    // CHARTS

    ChartjsComponent,

    // Chart.js Examples

    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    PolarAreaChartComponent,
    DynamicChartComponent,
    BubbleChartComponent,
    ScatterChartComponent,
    DummyComponent,
    ApplicationcontrolComponent,
    UsersComponent,
    ChartComponent,
    DelementComponent,
    FunnyComponent,
    Funny1Component,
    
    
    ESRComponent,
    ResourcesComponent,
   
    Dialogbox1Component,
    Dialogbox2Component,
   
    RegistrationformComponent,
    LoginformComponent,
    PostingComponent,
    HomepageComponent,
    FreindrequestComponent,
    FriendsComponent,
    FrienddetailsComponent,
    PhotosComponent, 
    ResetpasswordComponent, 
    MessengerComponent, ForgetpasswordComponent, Forget1passwordComponent, FriendslistComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgReduxModule,
    CommonModule,
    LoadingBarRouterModule,
    MatTableModule,
    MatProgressBarModule,
    MatDialogModule,
    MatInputModule,
    NgxPaginationModule,
    MatButtonModule,
    MatGridListModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatBadgeModule,
    // Angular Bootstrap Components

    PerfectScrollbarModule,
    NgbModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCardModule,
    
    // Charts
    MatSelectModule,
    ChartsModule,
    ChartModule,
    NgCircleProgressModule.forRoot()
  ],
  providers: [
    {
      provide:
      PERFECT_SCROLLBAR_CONFIG,
      // DROPZONE_CONFIG,
      useValue:
      DEFAULT_PERFECT_SCROLLBAR_CONFIG,
      // DEFAULT_DROPZONE_CONFIG,
    },
    ConfigActions,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private ngRedux: NgRedux<ArchitectUIState>,
              private devTool: DevToolsExtension) {

    this.ngRedux.configureStore(
      rootReducer,
      {} as ArchitectUIState,
      [],
      [devTool.isEnabled() ? devTool.enhancer() : f => f]
    );
  }
}
