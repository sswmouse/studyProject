<!--
 * @Author: yerun sswmouse@163.com
 * @Date: 2025-09-25 18:01:10
 * @LastEditors: yerun sswmouse@163.com
 * @LastEditTime: 2025-09-25 18:07:03
 * @FilePath: /studyProject/baidu/src/components/common/searchCard.vue
 * @Description: 搜索组件
-->
<template>
    <div class="search-component">
        <el-form
            :model="form"
            label-width="100px"
        >
            <el-row :gutter="20">
                <el-col
                    v-for="(item, index) in config"
                    :key="index"
                    :span="item.span || 8"
                >
                    <el-form-item :label="item.label">
                        <!-- 输入框类型 -->
                        <el-input
                            v-if="item.type === 'input'"
                            v-model="form[item.engName]"
                            :placeholder="item.placeholder || '请输入'"
                            :maxlength="item.maxlength"
                            :minlength="item.minlength"
                            clearable
                        />

                        <!-- 选择器类型 -->
                        <el-select
                            v-else-if="item.type === 'select'"
                            v-model="form[item.engName]"
                            :placeholder="item.placeholder || '请选择'"
                            clearable
                        >
                            <el-option
                                v-for="option in item.options"
                                :key="option.value"
                                :label="option.label"
                                :value="option.value"
                            />
                        </el-select>

                        <!-- 日期选择器类型 -->
                        <el-date-picker
                            v-else-if="item.type === 'date'"
                            v-model="form[item.engName]"
                            :type="item.dateType || 'date'"
                            :placeholder="item.placeholder || '请选择日期'"
                            clearable
                        />

                        <!-- 数字输入框类型 -->
                        <el-input-number
                            v-else-if="item.type === 'number'"
                            v-model="form[item.engName]"
                            :min="item.min"
                            :max="item.max"
                            :placeholder="item.placeholder || '请输入数字'"
                            clearable
                        />
                    </el-form-item>
                </el-col>

                <el-col
                    :span="24"
                    style="text-align: right"
                >
                    <el-button
                        type="primary"
                        @click="handleSearch"
                    >搜索</el-button>
                    <el-button @click="handleReset">重置</el-button>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'SearchComponent',
    props: {
        form: {
            type: Object,
            required: true
        },
        config: {
            type: Array,
            required: true,
            validator: (value) => {
                return value.every(
                    (item) =>
                        item.type &&
                        item.engName &&
                        item.label
                )
            }
        }
    },
    methods: {
        handleSearch() {
            this.$emit('search', this.form)
        },
        handleReset() {
            this.$emit('reset')
        }
    }
}
</script>

<style scoped>
.search-component {
    padding: 20px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
