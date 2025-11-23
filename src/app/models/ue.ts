import { Ec } from "./ec"
import { Niveau } from "./niveau"

export class Ue {
 public code_ue?:string
 public label_ue?:string
 public desc_ue?:string
 public created_at?:Date
 public updated_at?:Date

 public code_niveau?:number
  niveau?:Niveau;

  uc?:Ec[]
}
