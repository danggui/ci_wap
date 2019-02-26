var sexMap = new Map()
sexMap.set(5, "male");
sexMap.set(6, "female");


var labelMap = new Map()
labelMap.set("outpatients", "门诊病历本首页及病历");
labelMap.set("medicals","医疗费用原始凭证");
labelMap.set("costs","费用明细");
labelMap.set("inspects","检查报告");
labelMap.set("others","其他附件");
labelMap.set("summarys","出院小结");


export function getSex(key){
    if(sexMap.has(key)){
        return sexMap.get(key)
    }
    else{
        return "unsex"
    }
    
}


export function getLabel(key){
    if(labelMap.has(key)){
        return labelMap.get(key)
    }
    else{
        return ""
    }
    
}
