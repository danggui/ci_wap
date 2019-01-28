var sexMap = new Map()
sexMap.set(5, "male");
sexMap.set(6, "female");

export function getSex(key){
    if(sexMap.has(key)){
        return sexMap.get(key)
    }
    else{
        return "unsex"
    }
    
}

