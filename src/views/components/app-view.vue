<!--
    后台整体框架
    @author：huhl
    @createTime：2018-04-10 12:20
 -->
<template lang="html">
	<el-container class="app-container" >
		<app-header></app-header>
		<app-side></app-side>
    <el-main class="content">
      <router-view></router-view>
    </el-main>
	</el-container>
</template>

<script type="text/javascript">
import AppHeader from '@/views/components/header';
import AppFooter from '@/views/components/footer';
import AppSide from '@/views/components/sidebar';


// name 的命名，HTML 标签和 Vue 保留标签范围
// 区分大小写
var isHTMLTag = 'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template';

// 不区分大小写
var isSVG = 'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,' +
  'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view';

// 区分大小写
var isBuiltInTag = 'slot,component';

export default {
	// 递归调用  方便调试
  name: 'app-view',
  data () {
    return {

    }
  },
  components: {
    AppHeader,
    AppFooter,
    AppSide
  },
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/css/base.scss';
</style>