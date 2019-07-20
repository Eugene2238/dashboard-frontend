import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from '../models/Category';
import { Widget } from '../models/Widget';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  constructor(private http: HttpClient) {}

  getTemplates() {
    return this.http.get<Category[]>('/api/template/');
  }

  addWidget(widget: Widget) {
    return this.http.post<Widget>('/api/widget', widget);
  }

  getWidget(id: string) {
    return this.http.get<Widget>('/api/widget/' + id);
  }

  removeWidget(id: string) {
    return this.http.delete<Widget>('/api/widget/' + id);
  }

  editWidget(widget: Widget) {
    return this.http.put<Widget>('/api/widget/' + widget._id, widget);
  }
}
