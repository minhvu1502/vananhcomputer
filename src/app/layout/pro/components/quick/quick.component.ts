import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { DrawerHelper } from '@delon/theme';
import { LayoutProWidgetQuickPanelComponent } from './quick-panel.component';

@Component({
  selector: 'layout-pro-quick',
  templateUrl: './quick.component.html',
  host: {
    '[class.alain-pro__header-item]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutProWidgetQuickComponent {
  constructor(private drawerHelper: DrawerHelper) {}

  @HostListener('click')
  show(): void {
    this.drawerHelper
      .create(``, LayoutProWidgetQuickPanelComponent, null, {
        size: 480,
        drawerOptions: {
          nzTitle: undefined,
          nzBodyStyle: {
            'min-height': '100%',
            padding: 0,
          },
        },
      })
      .subscribe();
  }
}
