import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ContextMenuComponent } from 'ngx-contextmenu';
import { LayoutStateModel } from '../state/layout';
import { Store } from '@ngxs/store';
import { UpdateSplitSizes } from '../state/layout';
import { debounce } from 'ellib/lib/utils';

/**
 * Splittable component
 */

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'elterm-splittable',
  templateUrl: 'splittable.html',
  styleUrls: ['splittable.scss']
})

export class SplittableComponent {

  @Input() layout: LayoutStateModel;
  @Input() menu: ContextMenuComponent;
  @Input() swapWith: string;

  private updateSplitSizes: Function;

  /** ctor */
  constructor(private store: Store) {
    this.updateSplitSizes = debounce(this._updateSplitSize, 500);
  }

  /** Whenever the split size changes */
  onSplitSizeChange(event: {gutterNum: number,
                            sizes: number[]}): void {
    this.updateSplitSizes(this.layout.id, event.sizes);
  }

  // private methods

  private _updateSplitSize(id: string,
                           sizes: number[]): void {
    this.store.dispatch(new UpdateSplitSizes({id, sizes}));
  }

}
