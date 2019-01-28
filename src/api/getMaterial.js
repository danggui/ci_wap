import {fetch} from 'config/index'

export const getMaterial= (id)=>fetch(`/personSecurity/familyCertificateInfo/${id}`,
{
    'type':'get',
 });

 