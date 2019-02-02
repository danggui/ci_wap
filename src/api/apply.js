import {fetch} from 'config/index'

export const showInfo = (id)=>fetch( `/personSecurity/familySecurityInfo/${id}`,
{
    'type':'get',
 });

export const showEditInfo = (id)=>fetch( `/claim/claim/${id}`,
{
    'type':'get',
 });


export const uploadImage = (data)=>fetch(`/upload/imageUpload`,
{
    'type':'post',
    data:data,
 });


export const updateImage =(id,code,kind)=>fetch(`/claim/claimImages/${id}/${code}/${kind}`,
{
    'type': 'get',
 });

export const  deleteImage = (id)=>fetch(`/accessory/accessoryFile/${id}`,
{
    'type': 'delete',
 });

export const  saveApply = (data)=>fetch( `/claim/claim`,
{
    'type': 'post',
     data
 });

export const  saveEdit =(data,id)=>fetch(`/claim/claim/${id}`,
{
    'type':'put',
     data
 });
