import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Card } from './models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StreamLetModelsFrontEnd';
  content = [];
  card = null;

  constructor(private http: HttpClient){
    this.http.get('http://localhost:9091/searchQuery?title=talladega').toPromise().then(
      data => {
        








        let card = new Card(data);
        console.log(card);

        this.content.push(card);
      }
    );
  }

}
