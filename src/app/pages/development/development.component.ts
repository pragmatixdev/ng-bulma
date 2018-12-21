import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentTypesComponent implements OnInit {
  pageName;
  pageData = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.data.subscribe(res => this.pageName = res.name);
  }

  ngOnInit() {
    this.http.get(`assets/${this.pageName}.json`)
      .subscribe(res => this.pageData = res);
  }
}
