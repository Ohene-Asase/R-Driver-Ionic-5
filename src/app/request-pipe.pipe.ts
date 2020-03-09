import { Pipe, PipeTransform } from '@angular/core';
import { IRequest } from './Interfaces';

@Pipe({
  name: 'requestFilter'
})
export class RequestPipePipe implements PipeTransform {

  transform(requests: IRequest[], searchTerm: string): IRequest[] {
     if(!requests || !searchTerm){
       return requests;
     }
     return requests.filter( req => 
      req.destination.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 );

     }

}
