import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnChanges {
  @Input({ required: true }) activeTab: number;
  @Input({ required: true }) tabs: number[];
  @Output() onClickPagination = new EventEmitter();
  // tabs: number[] = [0, 1, 2, 3, 4];

  ngOnChanges(changes: SimpleChanges): void {
    // if (this.activeTab === 4) this.activeTab = 1;
    // if (this.activeTab === 3) this.activeTab = 0;
    // else this.activeTab += 2;
  }
}
