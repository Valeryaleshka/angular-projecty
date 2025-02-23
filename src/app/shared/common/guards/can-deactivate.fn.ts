import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Promise<boolean>;
}

export const canDeactivateFunction: CanDeactivateFn<CanComponentDeactivate> = (
  component: CanComponentDeactivate
) => {
  const modal = inject(NzModalService);

  if (component.canDeactivate) {
    return component.canDeactivate();
  }

  return new Promise<boolean>(resolve => {
    modal.confirm({
      nzTitle: 'Are you sure you want to leave?',
      nzContent:
        'You have unsaved changes. Are you sure you want to navigate away?',
      nzOkText: 'Ok',
      nzCancelText: 'Cancel',
      nzOnOk: () => resolve(true),
      nzOnCancel: () => resolve(false),
    });
  });
};
