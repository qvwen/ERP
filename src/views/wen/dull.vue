<template>
  <div>
  <el-form ref="form" :model="form" label-width="80px">


    <el-col :span="10">
    <el-form-item label="物料区间">
      <el-input></el-input>
    </el-form-item>
    </el-col>

    <el-col :span="1">
      <span>&nbsp;</span>
    </el-col>
    
    <el-col :span="10">
      <el-form-item label="to">
      <el-input></el-input>
      </el-form-item>
    </el-col>

<el-col :span="1">
      <span>&nbsp;</span>
    </el-col>

    <el-col :span="1">
      <el-button  @click="open">选择</el-button>
    </el-col>

    <el-col :span="10">
    <el-form-item label="业务区间">
      <el-input></el-input>
    </el-form-item>
    </el-col>

    <el-col :span="1">
      <span>&nbsp;</span>
    </el-col>
    
    <el-col :span="10">
      <el-form-item label="to">
      <el-input></el-input>
      </el-form-item>
    </el-col>

<el-col :span="1">
      <span>&nbsp;</span>
    </el-col>

    <el-col :span="1">
      <el-button  @click="open">选择</el-button>
    </el-col>

    <el-col :span="24">
      <el-form-item label="日期选择">
    <el-radio-group>
      <el-radio label="最近入库日"></el-radio>
      <el-radio label="最新入库日"></el-radio>
    </el-radio-group>
  </el-form-item>
    </el-col>

        <el-col :span="11">
      <el-form-item label="呆滞日期">
      <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>

   <el-table
    stripe
    style="width: 100%">
    <el-table-column
      label="区间"
      width="180">
    </el-table-column>
    <el-table-column
      label="起始天数"
      width="180">
    </el-table-column>
    <el-table-column
      label="截至天数">
    </el-table-column>
    <el-table-column
      label="区间说明">
    </el-table-column>
  </el-table>  
   
    <el-col :span="24">
      <span>&nbsp;</span>
    </el-col>
    <el-col :span="24">
    <el-button type="primary">保存</el-button>
      <el-button>重置</el-button>
      <el-button type="primary">固定报表</el-button>
    </el-col>
  </el-form>
  </div>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
  }
</script>
