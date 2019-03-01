import Vue from 'vue'
import Router from 'vue-router'
import Notice from '@/components/Notice';
import Flow from '@/components/Flow';
import Title from '@/components/Title';
import HomeTitle from '@/components/HomeTitle';
import Bottom from '@/components/Bottom';
import Login from '@/views/login';
import claimRouter from './modules/claim'


Router.prototype.togo = function (path) {
  this.isleft = true
  this.isright = false
  this.push(path)
}
// 需要右方向动画的路由用this.$router.goRight
Router.prototype.goRight = function (path) {
  this.isright = true
  this.isleft = false
  this.push(path)
}
// 需要返回按钮动画的路由用this.$router.goBack()，返回上一个路由
Router.prototype.goBack = function () {
  this.isBack = true
  this.go(-1)
}
// 点击浏览器返回按钮执行，此时不需要路由回退
Router.prototype.togoback = function () {
  this.isright = true
  this.isleft = false
}
Vue.use(Router)

const routes = [
  {
  path: '',
  components: {
    default:Login,
    title:HomeTitle,
  },
  redirect:'/notice',
  children:
   [
    { path: 'notice', 
      component:  Notice,
    },
    {
      path: 'flow',
      component: Flow
    } ]
}, {
  path: '/family',
  components: {
    default:()=> import('@/views/family/index'), 
    title:Title,
   
  },
  meta:{title:'家庭保障'}
}, {
  path: '/member',
  components: {
    default:()=> import('@/views/member/index'), 
    title:Title,
  
  },
  meta:{title:'家庭成员'}
}, {
  path: '/material',
  components: {
    default:()=> import('@/views/material/index'),
    title:Title,
  
  },
  meta:{title:'证照资料'}
},
{
  path: '/detail',
  components: {
    default:()=> import('@/views/detail/index'),
    title:Title,
   
  },
  meta:{title:'保单详情'}
},
{
  path: '/upload',
  components: {
    default:()=> import('@/views/upload/index'),
    title:Title,
  
  },
  meta:{title:'上传附件'},
},
{
  path: '/apply',
  components: {
    default:()=> import('@/views/apply/index'),
    title:Title,
  },
  meta:{title:'理赔申请'},
},
claimRouter,
];



export default new Router({
  base:'/ci-wap/',
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
  },
  routes: routes,
})
