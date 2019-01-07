import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentTypesComponent {
  pageData = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.data
      .pipe(
        flatMap( res => {
          return this.http.get(`assets/${res.name}.json`);
        })
      )
      .subscribe(data => this.pageData = data);
  }
}
