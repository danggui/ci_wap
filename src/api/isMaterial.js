import {fetch} from 'config/index'

export const isMaterial= (id)=>{
  return fetch(`/claim/claimMaterial/${id}`,{'type':'get'});
}
