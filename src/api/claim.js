
import {fetch} from 'config/index'

export const getClaims= (id,type)=>fetch(`/claim/myClaim/${id}/${type}`,
{
    'type':'get',
 });

 export const generalClaim = (id) =>fetch(`/claim/claimAndSecurityDetail/${id}`,
 {
     'type':'get'
 });

