import { User } from './User';
import { Dashboard } from './Dashboard';
import { Template } from './Template';
import { WidgetSettings } from './WidgetSettings';
import { WidgetResult } from './WidgetResult';


export interface Widget {
  _id?: string;

  settings: WidgetSettings;
  result: WidgetResult;
  template: Template;
  user: User;
  dashboard: Dashboard;
  createdAt: Date;
  updatedAt: Date;
}

export class WidgetModel {
  // _id?: string;

  settings: WidgetSettings;
  result: WidgetResult;
  template: Template;
  user: User;
  dashboard: Dashboard;
  createdAt: Date;
  updatedAt: Date;
}
