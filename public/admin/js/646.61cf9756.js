"use strict";(self["webpackChunkvue2_cms_admin"]=self["webpackChunkvue2_cms_admin"]||[]).push([[646],{2770:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var s=function(){var e=this,t=e._self._c;return t("el-card",[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[e._v("发布公告")])]),t("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"status-icon":"","label-width":"100px"}},[t("el-form-item",{attrs:{prop:"title",label:"标题"}},[t("el-input",{model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),t("el-form-item",{attrs:{prop:"is_sticky",label:"置顶"}},[t("el-radio-group",{model:{value:e.form.is_sticky,callback:function(t){e.$set(e.form,"is_sticky",t)},expression:"form.is_sticky"}},[t("el-radio",{attrs:{label:1}},[e._v("是")]),t("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1),t("el-form-item",{attrs:{prop:"content",label:"内容"}},[t("Editor",{attrs:{mode:e.mode},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.handleRelease}},[e._v("发布公告")])],1)],1)],1)},l=[],i=(r(7658),r(9551)),a=r(51),o={components:{Editor:a.Z},data(){return{mode:"simple",form:{title:"",is_sticky:"",content:""},rules:{title:[{required:!0,message:"请填写公告标题",trigger:"blur"}],is_sticky:[{required:!0,message:"请选择是否置顶",trigger:"blur"}],content:[{required:!0,message:"请输入公告内容",trigger:"blur"}]}}},created(){document.title="发布公告"},methods:{async handleRelease(){try{let e=await this.$refs.form.validate();if(e){let{status:e,msg:t,data:r}=await i.qX.release({...this.form});e?(this.$message.success(t),this.$router.push("/notice/list")):this.$message.error(t)}}catch(e){}}}},n=o,m=r(1001),c=(0,m.Z)(n,s,l,!1,null,null,null),u=c.exports}}]);
//# sourceMappingURL=646.61cf9756.js.map