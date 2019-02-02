
import Bottom from '@/components/Bottom';
import Title from '@/components/Title';

const claimRouter = {
    path: '/claimIndex',
    components: {
      default:()=> import('@/views/claim/index'), 
      title:Title,
      
    },
    children:[
      {
        name:"claim",
        path: `/claim/:id`,
        component: ()=> import('@/views/claim/claim'),
        meta:{title:'我的理赔'}
        
      },
    {
        path: '/myClaim',
        components:{
          default:()=> import('@/views/claim/myClaim'),
          bottom:Bottom
        } ,
        meta:{title:'理赔申请详情'},
      },
      {
        path: '/claimPerson',
        components:{
          default:()=> import('@/views/claim/claimPerson'),
          bottom:Bottom
        } ,
        meta:{title:'就诊人信息'},
      },
      {
        path: '/progress',
        components:{
          default:()=>  import('@/views/claim/claimProgress'),
          bottom:Bottom
        } ,
        meta:{title:'理赔进度'},
      },
      {
        path: '/uploadInfo',
        components:{
          default:()=>import('@/views/claim/uploadInfo'),
          bottom:Bottom
        } ,
        meta:{title:'已上传凭证'},
      },
      {
        path: '/checkDetail',
        components:{
          default:()=> import('@/views/claim/checkDetail'),
          bottom:Bottom
        } ,
        meta:{title:'发票赔付明细'},
      }
  ],
  meta:{title:'我的理赔'},
}
  
  export default claimRouter