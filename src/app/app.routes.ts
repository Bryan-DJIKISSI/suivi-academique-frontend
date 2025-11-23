import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FiliereComponent } from './filiere/filiere.component';
import { NiveauComponent } from './niveau/niveau.component';
import { EcComponent } from './ec/ec.component';
import { UeComponent } from './ue/ue.component';
import { SalleComponent } from './salle/salle.component';

export const routes: Routes = [
    {path: "", component:ContentComponent},
    {path: "inscription", component:InscriptionComponent},
    {path: "connexion", component:ConnexionComponent},
    {path: "filiere", component:FiliereComponent},
    {path: "niveau", component:NiveauComponent},
    {path: "ec/:data", component:EcComponent},
    {path: "ec/", component:EcComponent},
    {path: "ue", component:UeComponent},
    {path: "salle", component:SalleComponent},



];
