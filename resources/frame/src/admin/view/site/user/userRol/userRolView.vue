<template>
    <div class="user-rol-box">
      <div class="user-rol-table">
        <el-table
          :data="tableData"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55"
            :selectable="checkSelectable">
          </el-table-column>

          <el-table-column
            label="级别名称">
            <template slot-scope="scope">
              <el-input maxlength="20" v-model="scope.row._data.name"></el-input>
            </template>
          </el-table-column>

          <el-table-column
            width="100"
            label="显示组名">
            <template slot-scope="scope">
            <el-switch
            :disabled="scope.row._data.id === '7'"
            v-model="scope.row._data.isDisplay"
            active-color="#336699"
            inactive-color="#bbbbbb">
          </el-switch>
            </template>
          </el-table-column>
          
          <!-- <el-table-column
            width="100">
            <template slot-scope="scope">
              <el-button v-if="scope.row._data.id !== '7' && scope.row._data.id !== '1'" :disabled="addStatus && tableData.length-1 === scope.$index" type="text" @click="$router.push({path:'/admin/rol-permission',query:{id:scope.row._data.id,name:scope.row._data.name,title:'其他设置',names:'other'}})">允许购买</el-button>
            </template>
          </el-table-column> -->

          <el-table-column>
            <template slot-scope="scope">
              <el-button v-if="scope.row._data.id !== '1'" :disabled="addStatus && tableData.length-1 === scope.$index" type="text" @click="$router.push({path:'/admin/rol-permission',query:{id:scope.row._data.id,name:scope.row._data.name}})">设置</el-button>
            <el-popover
              width="100"
              placement="top"
              :ref="`popover-${scope.$index}`"
            >
              <p>确定删除该项吗？</p>
              <div style="text-align: right; margin: 10PX 0 0 0 ">
                <el-button
                  type="danger"
                  size="mini"
                  @click="
                    scope._self.$refs[`popover-${scope.$index}`].doClose()
                  "
                >
                  取消
                </el-button>
                <el-button
                  type="primary"
                  size="mini"
                  @click="
                    singleDelete(scope.$index,scope.row._data.id);
                    scope._self.$refs[`popover-${scope.$index}`].doClose();
                  "
                  >确定</el-button
                >
              </div>
              <el-button slot="reference" v-if="scope.row._data.id !== '1' && scope.row._data.id !== '6' && scope.row._data.id !== '7' && scope.row._data.id !== '10' && scope.row._data.default !== 1" type="text">删除</el-button>
            </el-popover>
            </template>
          </el-table-column>

          <el-table-column
            min-width="115">
            <template slot-scope="scope">
              <el-radio v-model="radio" @change="radioChange(scope.row,scope.$index)" v-if="scope.row._data.id != 1 && scope.row._data.id !== '6' && scope.row._data.id !== '7'" :label="scope.row._data.id">设为加入站点的默认级别</el-radio>
            </template>
          </el-table-column>

        </el-table>
      </div>

      <TableContAdd cont="新增" @tableContAddClick="addList"></TableContAdd>

      <Card class="footer-btn">
        <el-button type="primary" :loading="btnLoading" size="medium" @click="submitClick" >提交</el-button>
        <el-button  size="medium" :loading="delLoading" :disabled="deleteStatus" @click="deleteClick" >删除</el-button>
      </Card>

    </div>
</template>

<script>
import '../../../../scss/site/module/userStyle.scss';
import userRolCon from '../../../../controllers/site/user/userRol/userRolCon';
export default {
    name: "user-rol-view",
  ...userRolCon
}
</script>
