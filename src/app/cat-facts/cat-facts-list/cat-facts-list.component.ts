import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CatFactsApiService } from '../../services/cat-facts-api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { CatFact } from '../../models/interfaces/cat-fact.interface';
import { CatFactsResponse } from '../../models/interfaces/cat-facts-response.interface';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cat-facts-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './cat-facts-list.component.html',
  styleUrl: './cat-facts-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatFactsListComponent {
  page$: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  isLastPage$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  catFacts$?: Observable<CatFact[]>;

  constructor(private catFactsApiService: CatFactsApiService) {}

  loadMore(): void {
    this.page$.next(this.page$.value + 1);
  }
}
