import {fetch} from 'config/index'

export const getUpload= (id,type)=>fetch(`/personSecurity/personSecurityAndImageInfo/${id}/${type}`,
{
    'type':'get',
 });

 

export const uploadImage= (data)=>fetch(`/upload/imageUpload`,
{
   'type':'post',
    data:data,
 });

 