webpackJsonp([3],{17:function(t,e,o){var n,s;n=o(18),s=o(19),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},18:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(9),r=n(s);e["default"]={data:function(){return{project:{}}},route:{activate:function(){this.$parent.showProject=!0},deactivate:function(){this.$parent.showProject=!1},data:function(){var t=this;t.$parent.projectId=this.$route.params.id}},methods:{ok:function(){r["default"]["delete"]("/project/"+this.$route.params.id+"/quit.json",function(){toastr.success("操作成功")})}}}},19:function(t,e){t.exports=' <div class=db-view-quit> <button class="btn btn-danger" v-on:click=ok style="padding: 10px 100px">退出项目</button> </div> '}});