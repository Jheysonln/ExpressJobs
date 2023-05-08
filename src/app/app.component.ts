import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExpressJobs';

  loading: boolean = true;

  ngOnInit() {
    timer(1000).subscribe(() => this.loading = false);
  }
}
