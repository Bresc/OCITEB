import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 
import { FacDistanciaI01 } from '../models/fac-distancia-i01';
import { FacDistanciaI02 } from '../models/FacDistanciaI02';
import { FacDistanciaI03 } from '../models/fac-distancia-i03';
import { FacDistanciaI04 } from '../models/fac-distancia-i04';
import { FacDistanciaI05 } from '../models/fac-distancia-i05';
import { FacDistanciaI06 } from '../models/fac-distancia-i06';
import { FacDistanciaF03 } from '../models/fac-distancia-f03';
import { FacDistanciaC01 } from '../models/fac-distancia-c01';
import { FacDistanciaC02 } from '../models/fac-distancia-c02';
import { FacAgropecuariaI01 } from '../models/fac-agropecuaria-i01';
import { FacAgropecuariaI02 } from '../models/fac-agropecuaria-i02';
import { FacAgropecuariaI03 } from '../models/fac-agropecuaria-i03';
import { FacAgropecuariaI04 } from '../models/fac-agropecuaria-i04';
import { FacAgropecuariaI05 } from '../models/fac-agropecuaria-i05';
import { FacAgropecuariaI06 } from '../models/fac-agropecuaria-i06';
import { FacAgropecuariaF01 } from '../models/fac-agropecuaria-f01';
import { FacAgropecuariaF02 } from '../models/fac-agropecuaria-f02';
import { FacAgropecuariaF03 } from '../models/fac-agropecuaria-f03';
import { FacAgropecuariaC01 } from '../models/fac-agropecuaria-c01';
import { FacAgropecuariaC02 } from '../models/fac-agropecuaria-c02';
import { FacEducacionI01 } from '../models/fac-educacion';
import{FacCienciasC01} from '../models/fac-ciencias-c01';
import{FacCienciasC02} from '../models/fac-ciencias-c02';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  facDisI01Array: FacDistanciaI01[];
  facDisI02Array: FacDistanciaI02[];
  facDisI03Array: FacDistanciaI03[];
  facDisI04Array: FacDistanciaI04[];
  facDisI05Array: FacDistanciaI05[];
  facDisI06Array: FacDistanciaI06[];
  facDisF03Array: FacDistanciaF03[];
  facDisC01Array: FacDistanciaC01[];
  facDisC02Array: FacDistanciaC02[];
  facAgroI01Array: FacAgropecuariaI01[];
  facAgroI02Array: FacAgropecuariaI02[];
  facAgroI03Array: FacAgropecuariaI03[];
  facAgroI04Array: FacAgropecuariaI04[];
  facAgroI05Array: FacAgropecuariaI05[];
  facAgroI06Array: FacAgropecuariaI06[];
  facAgroF01Array: FacAgropecuariaF01[];
  facAgroF02Array: FacAgropecuariaF02[];
  facAgroF03Array: FacAgropecuariaF03[];
  facAgroC01Array: FacAgropecuariaC01[];
  facAgroC02Array: FacAgropecuariaC02[];
  facEduI01Array: FacEducacionI01[];
  facCienC01Array: FacCienciasC01[];
  facCienC02Array: FacCienciasC02[];

  constructor(private http: HttpClient) {
   }

  getFacDistanciaI01(){
    return this.http.get('http://localhost:3000/facDistancia/i01'); 
  }

  getFacDistanciaI02(){
    return this.http.get('http://localhost:3000/facDistancia/i02');
  }

  getFacDistanciaI03(){
    return this.http.get('http://localhost:3000/facDistancia/i03');
  }

  getFacDistanciaI04(){
    return this.http.get('http://localhost:3000/facDistancia/i04');
  }

  getFacDistanciaI05(){
    return this.http.get('http://localhost:3000/facDistancia/i05');
  }

  getFacDistanciaI06(){
    return this.http.get('http://localhost:3000/facDistancia/i06');
  }

  getFacDistanciaF03(){
    return this.http.get('http://localhost:3000/facDistancia/f03');
  }
  
  getFacDistanciaC01(){
    return this.http.get('http://localhost:3000/facDistancia/c01');
  }

  getFacDistanciaC02(){
    return this.http.get('http://localhost:3000/facDistancia/c02');
  }

  getFacAgropecuariaI01(){
    return this.http.get('http://localhost:3000/facAgro/i01');
  }

  getFacAgropecuariaI02(){
    return this.http.get('http://localhost:3000/facAgro/i02');
  }

  getFacAgropecuariaI03(){
    return this.http.get('http://localhost:3000/facAgro/i03');
  }
  
  getFacAgropecuariaI04(){
    return this.http.get('http://localhost:3000/facAgro/i04');
  }

  getFacAgropecuariaI05(){
    return this.http.get('http://localhost:3000/facAgro/i05');
  }

  getFacAgropecuariaI06(){
    return this.http.get('http://localhost:3000/facAgro/i06');
  }

  getFacAgropecuariaF01(){
    return this.http.get('http://localhost:3000/facAgro/f01');
  }

  getFacAgropecuariaF02(){
    return this.http.get('http://localhost:3000/facAgro/f02');
  }

  getFacAgropecuariaF03(){
    return this.http.get('http://localhost:3000/facAgro/f03');
  }

  getFacAgropecuariaC01(){
    return this.http.get('http://localhost:3000/facAgro/c01');
  }

  getFacAgropecuariaC02(){
    return this.http.get('http://localhost:3000/facAgro/c02');
  }

  getFacCienciasC01(){
    return this.http.get('http://localhost:3000/facCien/c01');
  }

  getFacCienciasC02(){
    return this.http.get('http://localhost:3000/facCien/c02');
  }

  getFacEducacionI01(){
    return this.http.get('http://localhost:3000/facEdu/i01');
  }






}
