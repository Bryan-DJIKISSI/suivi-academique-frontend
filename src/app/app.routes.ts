import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FiliereComponent } from './filiere/filiere.component';
import { NiveauComponent } from './niveau/niveau.component';
import { EcComponent } from './ec/ec.component';
import { UeComponent } from './ue/ue.component';
import { SalleComponent } from './salle/salle.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {path: "", component:ContentComponent},
  {path: "inscription", component:InscriptionComponent},

  //Protection des routes
  {path: "filiere", component:FiliereComponent, canActivate: [authGuard]},
  {path: "niveau", component:NiveauComponent, canActivate: [authGuard]},
  {path: "ec/:data", component:EcComponent, canActivate: [authGuard]},
  {path: "ec/", component:EcComponent, canActivate: [authGuard]},
  {path: "ue", component:UeComponent, canActivate: [authGuard]},
  {path: "salle", component:SalleComponent, canActivate: [authGuard]},



];
