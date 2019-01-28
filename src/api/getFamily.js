import {fetch} from 'config/index'

export const getFamily= (id,type)=>fetch(`/personSecurity/familSecurityDetail/${id}/${type}`,
{
    'type':'get',
 });

 