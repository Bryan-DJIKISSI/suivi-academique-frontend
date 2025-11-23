import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ec',
  imports: [],
  templateUrl: './ec.component.html',
  styleUrl: './ec.component.css'
})
export class EcComponent {
  donnee?: string;
  constructor(private route: ActivatedRoute, private router:Router){
    this.donnee = route.snapshot.paramMap.get('data')!;
    if(Number.parseInt(this.donnee, 10) >50) {
      this.router.navigate(['salle']);
    }else {
      this.router.navigate(['ec', this.donnee]);
    }
   /* this.route.params.subscribe(params => {
        this.donnee=params['data'];
    });*/
  }
}


