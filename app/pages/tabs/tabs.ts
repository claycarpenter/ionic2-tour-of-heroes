import {Page} from 'ionic-angular';
import {Dashboard} from '../dashboard/dashboard';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  dashboardTabRoot: any = Dashboard;
}
