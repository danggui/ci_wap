
import {fetch} from 'config/index'

export const getClaims= (id,type)=>fetch(`/claim/myAllClaims/${id}/${type}`,
{
    'type':'get',
 });

 export const generalClaim = (id) =>fetch(`/claim/claimAndSecurityDetail/${id}`,
 {
     'type':'get'
 });

 export const deleteClaim =(id) =>fetch(`/claim/claim/${(id)}`,
 {
     'type':'delete'
 })
