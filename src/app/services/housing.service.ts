import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../model/IProperty';
import { Property } from '../model/Property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent: number){
    return this.http.get('data/properties.json').pipe(
      map(data=>{
        const propertiesArray: Array<IProperty> =[];
        for (const id in data)
        {
          if(data.hasOwnProperty(id) && data[id].SellRent === SellRent)
          {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );

    return this.http.get<IProperty[]>('data/properties.json');
  }

  addProperty(property: Property){
    localStorage.setItem('newProp', JSON.stringify(property));
  }
}
