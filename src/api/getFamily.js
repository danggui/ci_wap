import {fetch} from 'config/index'

export const getFamily= (data)=> fetch('/personSecurity /familySecurity',{
    'type':'get',
    params:data
  });