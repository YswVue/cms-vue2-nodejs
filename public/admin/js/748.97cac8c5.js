"use strict";(self["webpackChunkvue2_cms_admin"]=self["webpackChunkvue2_cms_admin"]||[]).push([[748],{3748:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var i=function(){var e=this,t=e._self._c;return t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"list_head",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("公告列表")])]),t("el-table",{attrs:{data:e.tableData}},[t("el-table-column",{attrs:{prop:"notice_id",label:"#"}}),t("el-table-column",{attrs:{prop:"title",label:"标题"}}),t("el-table-column",{attrs:{label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.loacleTimestamp(t.row.create_date))+" ")]}}])}),t("el-table-column",{attrs:{label:"编辑时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.loacleTimestamp(t.row.update_date))+" ")]}}])}),t("el-table-column",{attrs:{prop:"is_sticky",label:"是否置顶"},scopedSlots:e._u([{key:"default",fn:function(a){return[0===a.row.is_sticky?t("el-tag",{attrs:{type:"info",plain:"",size:"mini"}},[e._v("正常")]):t("el-tag",{attrs:{type:"success",plain:"",size:"mini"}},[e._v("置顶")])]}}])}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-link",{attrs:{href:`#/notice/edit/${a.row.notice_id}`}},[t("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"notice:list:edit",expression:"'notice:list:edit'"}],attrs:{type:"primary",icon:"el-icon-edit",plain:"",size:"mini"}},[e._v("编辑")])],1),t("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"notice:list:switch",expression:"'notice:list:switch'"}],attrs:{type:1===a.row.is_sticky?"info":"success",icon:"el-icon-switch-button",plain:"",size:"mini"},on:{click:function(t){return e.handleUp(a.row,a.$index)}}},[e._v(" "+e._s(0==a.row.is_sticky?"置顶":"取消")+" ")]),t("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"notice:list:remove",expression:"'notice:list:remove'"}],attrs:{plain:"",size:"mini",icon:"el-icon-delete",type:"danger"},on:{click:function(t){return e.handleRemove(a.row.notice_id,a.$index)}}},[e._v("删除")])]}}])})],1),t("el-pagination",{attrs:{"current-page":e.currentPage,background:"",layout:"prev, pager, next",total:100},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)},s=[],n=a(9551),l={data(){return{tableData:[],currentPage:1}},created(){this.loadList()},computed:{loacleTimestamp(){return e=>new Date(e).toLocaleString()}},methods:{async loadList(){let{status:e,msg:t,data:a}=await n.qX.list({pagesize:3});e&&(this.tableData=a)},handleUp(e,t){let{notice_id:a,is_sticky:i}=e;this.$confirm(`此操作将${1===this.tableData[t].is_sticky?"取消置顶":"置顶"}该标签,是否继续?, 是否继续?`,{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{i=1===i?0:1;let{status:e,msg:s}=await n.qX.up({notice_id:a,is_sticky:i});if(e){let e=1===this.tableData[t].is_sticky?0:1;this.tableData[t].is_sticky=e,this.$message.success(s)}else this.$message.error(s)})).catch((()=>{this.$message.info("已取消操作")}))},handleRemove(e,t){this.$confirm("此操作将永久删除该公告, 是否继续?","确认删除",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then((async()=>{let{status:a,msg:i}=await n.qX.remove({notice_id:e});a?(this.tableData.splice(t,1),this.$message.success(i)):this.$message.error(i)})).catch((()=>{this.$message.info("已取消删除")}))},async handleCurrentChange(){let{status:e,data:t}=await n.qX.list({pagesize:3,pageindex:this.currentPage});e&&(this.tableData=t)}}},r=l,c=a(1001),o=(0,c.Z)(r,i,s,!1,null,"ef794e60",null),u=o.exports}}]);
//# sourceMappingURL=748.97cac8c5.js.map