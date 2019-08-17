import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: "张三", role: {
        name: "管理员",
        jurisdiction: [
          { name: "共用资料", icon: "el-icon-folder", jurisdiction: [{ name: "基本资料", jurisdiction: [{ name: "部门设定" }, { name: "项目设定" }, { name: "币别设定" }] }, { name: "物料资料", jurisdiction: [{ name: "部门设定" }, { name: "项目设定" }, { name: "币别设定" }] }, { name: "往来资料", jurisdiction: [{ name: "部门设定" }, { name: "项目设定" }, { name: "币别设定" }] }, { name: "科目资料", jurisdiction: [{ name: "部门设定" }, { name: "项目设定" }, { name: "币别设定" }] }] },
          { name: "采购管理", icon: "el-icon-folder-add", jurisdiction: [{ name: "基本资料" }, { name: "采购作业" }, { name: "分摊作业" }, { name: "科目资料" }] },
          { name: "销售模块", icon: "el-icon-folder-remove", jurisdiction: [{ name: "基本资料" }, { name: "销售作业" }, { name: "金税接口" }] },
          { name: "库存管理", icon: "el-icon-folder-checked", jurisdiction: [{ name: "基本资料" ,jurisdiction: [{ name: "库存进出明细" }]}, { name: "其他入库" ,jurisdiction: [{ name: "库存呆滞" }]}, { name: "调拨盘点作业",jurisdiction: [{ name: "调拨单" },{name:"盘点单"}]}, { name: "调价作业",jurisdiction: [{ name: "调价单" }] }] },
          { name: "账款管理", icon: "el-icon-folder-opened", jurisdiction: [{ name: "冲款作业" }, { name: "其他应收作业",jurisdiction: [{ name: "应付账单明细表" }] }] }
        ]
      }
    }
  },
  mutations: {

  },
  actions: {

  }
})
