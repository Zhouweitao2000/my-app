<template>
    <div class="manage">
        <el-dialog title="新增用户" :visible.sync="dialogVisible" width="50%">
            <!-- 用户表单区域 -->
            <el-form ref="form" :inline="true" :model="form" label-width="80px">
                <el-form-item label="姓名">
                    <el-input
                        placeholder="请输入姓名"
                        v-model="form.name"
                    ></el-input>
                </el-form-item>

                <el-form-item label="年龄">
                    <el-input
                        placeholder="请输入年龄"
                        v-model="form.age"
                    ></el-input>
                </el-form-item>

                <el-form-item label="性别">
                    <el-select v-model="form.sex" placeholder="请选择活动区域">
                        <el-option label="男" value="1"></el-option>
                        <el-option label="女" value="0"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="出生日期">
                    <el-date-picker
                        v-model="form.birth"
                        type="date"
                        placeholder="选择日期"
                    >
                    </el-date-picker>
                </el-form-item>

                <el-form-item label="地址">
                    <el-input
                        placeholder="请输入地址"
                        v-model="form.addr"
                    ></el-input>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false"
                    >确 定</el-button
                >
            </span>
        </el-dialog>
        <div class="manage-header">
            <el-button type="primary" @click="dialogVisible = true">
                + 新增
            </el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false,
            form: {
                name: "",
                age: "",
                sex: "",
                birth: "",
                addr: "",
            },
        };
    },
};
</script>

<style>
</style>