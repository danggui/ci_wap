import {fetch} from 'config/index'

export const isMaterial= (id)=> fetch('/claim/claimMaterial',{
    'type':'get',
    params:id
  });