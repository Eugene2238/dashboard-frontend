import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from '../models/Category';
import { Widget } from '../models/Widget';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  constructor(private http: HttpClient) {}

  getTemplates() {
    return this.http.get<Category[]>(environment.baseUrl + 'api/template/');
  }

  addWidget(widget: Widget) {
    return this.http.post<Widget>(environment.baseUrl + 'api/widget', widget);
  }

  getWidget(id: string) {
    return this.http.get<Widget>(environment.baseUrl + 'api/widget/' + id);
  }

  removeWidget(id: string) {
    return this.http.delete<Widget>(environment.baseUrl + 'api/widget/' + id);
  }

  editWidget(widget: Widget) {
    return this.http.put<Widget>(environment.baseUrl + 'api/widget/' + widget._id, widget);
  }
}
