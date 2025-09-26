<template>
    <div class="table-container">
        <search-card
            v-model="searchForm"
            :config="searchConfig"
            @search="onSearch"
            @reset="onReset"
        />
        <el-button
            type="primary"
            style="margin-bottom: 20px;"
            @click="handleAdd"
        >
            新增
        </el-button>
        <el-table
            :data="tableData"
            border
            style="width: 100%"
        >
            <el-table-column
                prop="name"
                label="姓名"
                width="180"
            ></el-table-column>
            <el-table-column
                prop="age"
                label="年龄"
                width="180"
            ></el-table-column>
            <el-table-column
                prop="address"
                label="地址"
            ></el-table-column>
            <el-table-column
                label="操作"
                width="180"
            >
                <template #default="scope">
                    <el-button
                        size="small"
                        @click="handleEdit(scope.$index, scope.row)"
                    >
                        编辑
                    </el-button>
                    <el-button
                        size="small"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                    >
                        删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 添加/编辑对话框 -->
        <el-dialog
            v-model="dialogVisible"
            :title="dialogTitle"
            width="30%"
        >
            <el-form
                :model="form"
                label-width="80px"
            >
                <el-form-item label="姓名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="年龄">
                    <el-input v-model="form.age"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button
                        type="primary"
                        @click="handleSubmit"
                    >确定</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script>
import { searchConfig } from './config';
export default {
    data() {
        return {
            searchConfig,
            searchForm: {},
            tableData: [
                {
                    name: '张三',
                    age: '25',
                    address: '北京市朝阳区'
                },
                {
                    name: '李四',
                    age: '30',
                    address: '上海市浦东新区'
                }
            ],
            dialogVisible: false,
            dialogTitle: '新增数据',
            form: {
                name: '',
                age: '',
                address: ''
            },
            currentIndex: -1
        };
    },
    methods: {
        handleAdd() {
            this.dialogTitle = '新增数据';
            this.form = {
                name: '',
                age: '',
                address: ''
            };
            this.currentIndex = -1;
            this.dialogVisible = true;
        },
        handleEdit(index, row) {
            this.dialogTitle = '编辑数据';
            this.form = JSON.parse(JSON.stringify(row));
            this.currentIndex = index;
            this.dialogVisible = true;
        },
        handleDelete(index) {
            this.$confirm('确认删除该记录吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.tableData.splice(index, 1);
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        handleSubmit() {
            if (this.currentIndex >= 0) {
                // 编辑操作
                this.tableData.splice(this.currentIndex, 1, JSON.parse(JSON.stringify(this.form)));
            } else {
                // 新增操作
                this.tableData.push(JSON.parse(JSON.stringify(this.form)));
            }
            this.dialogVisible = false;
            this.$message({
                type: 'success',
                message: '操作成功!'
            });
        },
        onSearch(form) {
            console.log('搜索条件:', form);
            // 这里可以添加实际的搜索逻辑
        },
        onReset() {
            console.log('搜索条件已重置');
            // 这里可以添加实际的重置逻辑
        }
    }
};
</script>

<style scoped>
.table-container {
    padding: 20px;
}
</style>
