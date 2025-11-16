import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';

export const routes: Routes = [
    {path: "", component:ContentComponent},
    {path: "inscription", component:InscriptionComponent},
    {path: "connexion", component:ConnexionComponent},
    


];
