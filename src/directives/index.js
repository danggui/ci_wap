import Vue from 'vue'
Vue.directive('scroll-show',{
  inserted(el,binding){
      let scope = binding.arg || '200'
      window.addEventListener("scroll",function(e){
          if(this.scrollY>Number(binding.arg)){
              binding.value.value=true
          }else{
              binding.value.value=false
          }
      })
      
  }
})

Vue.directive('back-top',{
  inserted(el,binding){
      //console.log(binding)
      let e = binding.arg || 'click'
      el.addEventListener(e,function(){
        //  document.documentElement.scrollTop = document.body.scrollTop =0;
        toTop()
      })
  }
})

Vue.directive('input',{

  
})

function toTop(){
    let distance = document.documentElement.scrollTop || document.body.scrollTop; //获得当前高度
    let step = distance/15; //每步的距离
    (function jump(){
    if(distance > 0){
    distance-=step;
    window.scrollTo(0,distance);
    setTimeout(jump,10)
    }
    })();
    }
  