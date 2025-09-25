import Vue from 'vue';
import {
    Button,
    Select,
    Option,
    Input,
    Form,
    FormItem,
    Table,
    TableColumn,
    Pagination,
    Dialog,
    MessageBox,
    Message,
    Notification
} from 'element-ui';
const elementList = [
    Button,
    Select,
    Option,
    Input,
    Form,
    FormItem,
    Table,
    TableColumn,
    Pagination,
    Dialog
];
elementList.forEach(item => {
    Vue.use(item);
});
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;