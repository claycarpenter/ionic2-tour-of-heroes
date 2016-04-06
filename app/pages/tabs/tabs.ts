import {Page} from 'ionic-angular';
import {DashboardPage} from '../dashboard/dashboard.page';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  dashboardTabRoot: any = DashboardPage;
}
