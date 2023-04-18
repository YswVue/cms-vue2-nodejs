"use strict";(self["webpackChunkvue2_cms_admin"]=self["webpackChunkvue2_cms_admin"]||[]).push([[973],{5969:function(e,a,t){t.d(a,{Z:function(){return m}});var r=function(){var e=this,a=e._self._c;return a("el-upload",{staticClass:"avatar-uploader",attrs:{"on-success":e.handleUploadSuccess,"on-error":e.handleUploadError,"before-upload":e.beforeAvatarUpload,accept:"image/*","show-file-list":!1,data:e.data,action:e.action,headers:e.headers}},[e.picture?a("img",{staticClass:"avatar",attrs:{src:e.picture}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])},s=[],l={model:{prop:"picture",event:"change"},props:{data:{type:Object,default:()=>({type:"common"})},headers:{type:Object,default:()=>({Authorization:`Bearer ${sessionStorage.access_token}`})},action:{type:String,default:"/upload/common/"},picture:{type:String,default:""}},data(){return{}},methods:{beforeAvatarUpload(e){let a=/^image\/(jpeg||png)$/;const t=a.test(e.type),r=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),r||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&r},handleUploadError(e,a,t){let{status:r,message:s}=e;switch(r){case 400:let{status:e,msg:a}=JSON.parse(s);this.$message.error(a);break;case 401:let{code:t}=JSON.parse(s);this.$message.error(`错误代码401,${t},请重新登录`);break;default:break}},handleUploadSuccess(e,a,t){let{status:r,msg:s,src:l}=e;r&&(this.$emit("change",l),this.$message.success(s))}}},o=l,i=t(1001),n=(0,i.Z)(o,r,s,!1,null,"b38c2fa8",null),m=n.exports},973:function(e,a,t){t.r(a),t.d(a,{default:function(){return c}});var r=function(){var e=this,a=e._self._c;return a("el-card",{staticClass:"box-card"},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[e._v("账户资料")])]),a("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{attrs:{readonly:""},model:{value:e.form.username,callback:function(a){e.$set(e.form,"username",a)},expression:"form.username"}})],1),a("el-form-item",{attrs:{prop:"fullname",label:"姓名"}},[a("el-input",{model:{value:e.form.fullname,callback:function(a){e.$set(e.form,"fullname",a)},expression:"form.fullname"}})],1),a("el-form-item",{attrs:{label:"性别"}},[a("el-radio-group",{model:{value:e.form.sex,callback:function(a){e.$set(e.form,"sex",a)},expression:"form.sex"}},[a("el-radio",{attrs:{label:"男"}}),a("el-radio",{attrs:{label:"女"}})],1)],1),a("el-form-item",{attrs:{prop:"tel",label:"手机"}},[a("el-input",{model:{value:e.form.tel,callback:function(a){e.$set(e.form,"tel",a)},expression:"form.tel"}})],1),a("el-form-item",{attrs:{prop:"email",label:"邮箱"}},[a("el-input",{model:{value:e.form.email,callback:function(a){e.$set(e.form,"email",a)},expression:"form.email"}})],1),a("el-form-item",{attrs:{prop:"avatar",label:"头像"}},[a("ImgUpload",{attrs:{data:{type:"avatar"}},model:{value:e.form.avatar,callback:function(a){e.$set(e.form,"avatar",a)},expression:"form.avatar"}})],1),a("el-button",{attrs:{type:"primary"},on:{click:e.handleEdit}},[e._v("保存修改")])],1)],1)},s=[],l=t(5969),o=t(3822),i={name:"Info",components:{ImgUpload:l.Z},data(){return{form:{user_id:"",username:"",fullname:"",sex:"",role_id:"",tel:"",email:"",avatar:""},rules:{fullname:[{required:!0,message:"请输入姓名！",trigger:"blur"}],tel:[{required:!0,message:"请输入手机号！",trigger:"blur"},{pattern:/^1((3|5|8){1}\d{1}|70)\d{8}$/,message:"请正确输入手机号！",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱！",trigger:"blur"},{pattern:/^[a-zA-Z0-9][a-zA-Z0-9_]+\@[a-zA-Z0-9]+\.(com|cn|net|com.cn)$/i,message:"请正确输入邮箱！",trigger:"blur"}]}}},computed:{...(0,o.rn)("user",["profile"])},created(){this.form={...this.profile}},methods:{...(0,o.nv)("user",["edit_profile"]),async handleEdit(){try{let e=await this.$refs.form.validate();if(e){let{status:e,msg:a}=await this.edit_profile({...this.form});e?this.$message.success(a):this.$message.error(a)}}catch(e){this.$message.info(e)}}}},n=i,m=t(1001),u=(0,m.Z)(n,r,s,!1,null,"7ca8349c",null),c=u.exports}}]);
//# sourceMappingURL=973.28377f01.js.map