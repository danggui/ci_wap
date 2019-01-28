import {fetch} from 'config/index'

export const getMember= (id)=>fetch(`/personSecurity/familyDetails/${id}`,
{
    'type':'get',
 });

 