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
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Tabs,
    TabPane,
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    Switch,
    DatePicker,
    TimePicker,
    TimeSelect,
    Slider,
    Tooltip,
    Popover,
    Breadcrumb,
    BreadcrumbItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Collapse,
    CollapseItem,
    Tag,
    Tree,
    Card,
    Carousel,
    CarouselItem,
    Loading,
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
    Dialog,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Tabs,
    TabPane,
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    Switch,
    DatePicker,
    TimePicker,
    TimeSelect,
    Slider,
    Tooltip,
    Popover,
    Breadcrumb,
    BreadcrumbItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Collapse,
    CollapseItem,
    Tag,
    Tree,
    Card,
    Carousel,
    CarouselItem,
    Loading
];

elementList.forEach(item => {
    Vue.use(item);
});

// 挂载全局方法
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;