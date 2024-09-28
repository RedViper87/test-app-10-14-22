import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
  turn = 'X';
  p1bg = 'rgb(0, 200, 0)';
  p2bg = 'rgb(200, 0, 0)';

  handleClick() {
    this.whoseTurnIsIt();
  }

  whoseTurnIsIt() {
    let currentTurn = this.turn;
    if (this.turn == 'X') {this.turn = 'O';}
    else {this.turn = 'X';}

    return currentTurn;
  }
}
