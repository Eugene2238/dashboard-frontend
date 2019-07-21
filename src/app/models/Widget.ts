import { User } from './User';
import { Dashboard } from './Dashboard';
import { Template, TemplateModel } from './Template';
import { WidgetSettings, WidgetSettingsModel } from './WidgetSettings';
import { WidgetResult, WidgetResultModel } from './WidgetResult';


export interface Widget {
  _id?: string;

  settings: WidgetSettings;
  result?: WidgetResult;
  template: Template;
  user: User;
  dashboard: Dashboard;
  createdAt: Date;
  updatedAt: Date;
}

export class WidgetModel {
  _id?: string;
  settings: WidgetSettings = new WidgetSettingsModel();
  result?: WidgetResult = new WidgetResultModel();
  template: Template = new TemplateModel();
  user: User;
  dashboard: Dashboard;
  createdAt: Date;
  updatedAt: Date;
}
