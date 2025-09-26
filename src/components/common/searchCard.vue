<template>
    <div class="search-component">
        <el-form
            :model="innerValue"
            label-width="100px"
        >
            <el-row :gutter="20">
                <el-col
                    v-for="(item, index) in config"
                    :key="index"
                    :span="item.span || 8"
                    class="form-col"
                >
                    <el-form-item :label="item.label">
                        <!-- 输入框 -->
                        <el-input
                            v-if="item.type === 'input'"
                            v-model="innerValue[item.engName]"
                            placeholder="请输入"
                            clearable
                            class="full-width"
                        />

                        <!-- 选择器 -->
                        <el-select
                            v-else-if="item.type === 'select'"
                            v-model="innerValue[item.engName]"
                            placeholder="请选择"
                            clearable
                            class="full-width"
                        >
                            <el-option
                                v-for="option in item.options"
                                :key="option.value"
                                :label="option.label"
                                :value="option.value"
                            />
                        </el-select>

                        <!-- 日期选择器 -->
                        <el-date-picker
                            v-else-if="item.type === 'date'"
                            v-model="innerValue[item.engName]"
                            :type="item.dateType || 'date'"
                            placeholder="请选择日期"
                            clearable
                            class="full-width"
                        />

                        <!-- 数字输入框 -->
                        <el-input-number
                            v-else-if="item.type === 'number'"
                            v-model="innerValue[item.engName]"
                            :min="item.min"
                            :max="item.max"
                            placeholder="请输入数字"
                            clearable
                            class="full-width"
                        />
                    </el-form-item>
                </el-col>

                <!-- 操作按钮 -->
                <el-col
                    :span="24"
                    class="actions-col"
                >
                    <slot name="actions">
                        <el-button
                            type="primary"
                            @click="handleSearch"
                        >
                            搜索
                        </el-button>
                        <el-button @click="handleReset">
                            重置
                        </el-button>
                    </slot>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'SearchComponent',
    props: {
        value: {
            type: Object,
            required: true
        },
        config: {
            type: Array,
            required: true,
            validator: (arr) =>
                arr.every((item) => item.type && item.engName && item.label)
        }
    },
    data() {
        return {
            innerValue: { ...this.value } // 拷贝一份内部使用
        };
    },
    watch: {
        value: {
            handler(newVal) {
                this.innerValue = { ...newVal }; // 父组件更新时同步
            },
            deep: true
        }
    },
    methods: {
        handleSearch() {
            this.$emit('input', { ...this.innerValue }); // 同步父组件 v-model
            this.$emit('search', { ...this.innerValue });
        },
        handleReset() {
            const resetForm = {};
            Object.keys(this.innerValue).forEach((key) => (resetForm[key] = ''));
            this.innerValue = resetForm;
            this.$emit('input', { ...resetForm });
            this.$emit('reset');
        }
    }
};
</script>

<style lang="less" scoped>
.search-component {
    padding: 20px 40px 20px 0px;
    border-radius: 4px;

    .form-col {
        .full-width {
            width: 100%;
        }
    }

    .actions-col {
        text-align: right;
        margin-top: 10px;

        ::v-deep .el-button+.el-button {
            margin-left: 10px;
        }
    }
}
</style>