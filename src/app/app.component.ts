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
  // comedyCards = null;
  // categories = null;
  contents = [];
  card = null;

  constructor(private http: HttpClient){
    this.http.get('http://localhost:9091/searchQuery?title=batman').toPromise().then(
      data => {
        // this.comedyCards = [];
        // this.categories = {};
        // for(var x in data){
        //   var content = data[x];
        //   let card = new Card(content);
        //   console.log(card);
        //   if (card.getGenres().indexOf("comedy")>-1){
        //     this.comedyCards.push(card);
        //     console.log("added!");
        //   }
        // }
        // this.categories.comedyCards = this.comedyCards;

        var parsedData = JSON.parse(JSON.stringify(data));
        for(var i = 0; i < parsedData.length; i++){
          var obj = parsedData[i];
          let card = new Card(obj);
          console.log(card);
        this.contents.push(card);
        }
      }
    );
  }

}
