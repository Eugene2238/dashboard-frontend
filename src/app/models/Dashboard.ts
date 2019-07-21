import { User } from './User';
import { Widget } from './Widget';

export interface Dashboard {
  _id?: string;
  title: string;
  description?: string;
  widgets: Widget[];
  user: User;
  createdAt: Date;
  updatedAt: Date;
}

export class DashboardModel {
  _id?: string;
  title: string;
  description?: string;
  widgets: Widget[];
  user: User;
  createdAt: Date;
  updatedAt: Date;
}
