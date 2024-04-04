import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CatFactsListComponent} from "./cat-facts/cat-facts-list/cat-facts-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CatFactsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
