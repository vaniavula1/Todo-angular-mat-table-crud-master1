// routerConfig.ts

import { Routes } from '@angular/router';
import {AddDialogComponent} from './dialogs/add/add.dialog.component';
import {EditDialogComponent} from './dialogs/edit/edit.dialog.component';
import {DeleteDialogComponent} from './dialogs/delete/delete.dialog.component';



const appRoutes: Routes = [
  { path: 'add', 
    component: AddDialogComponent 
  },
  {
    path: 'edit',
    component: EditDialogComponent
  },
  { path: 'delete',
    component: DeleteDialogComponent
  }
];
export default appRoutes;