import {fetch} from 'config/index'

export const basicInfo= (id)=>fetch(`/personSecurity/familySecurity/${id}`,
{
    'type':'get',
 });

 