<template>
    <Menu id="menu" style="width:100%;height:100%;overflow: auto;" :theme="theme2" :open-names="['1']" accordion  @on-select="handleChange">
        <Submenu name="1">
            <template slot="title">
                <Icon type="ios-paper" />
                内容管理
            </template>
            <MenuItem name="1-1"><Icon type="ios-paper" />文章管理</MenuItem>
            <MenuItem name="1-2"><Icon type="ios-paper" />评论管理</MenuItem>
            <MenuItem name="1-3"><Icon type="ios-paper" />举报管理</MenuItem>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-people" />
                用户管理
            </template>
            <MenuItem name="2-1">新增用户</MenuItem>
            <MenuItem name="2-2">活跃用户</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-stats" />
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>

            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4-1"><Icon type="ios-paper" />文章管理</MenuItem>
        <Submenu name="5">
            <template slot="title">
                <Icon type="ios-filing" />
                Navigation Two
            </template>
            <MenuItem name="5-1">Option 5</MenuItem>
            <MenuItem name="2-2">Option 6</MenuItem>
            <Submenu name="6">
                <template slot="title">Submenu</template>
                <MenuItem name="6-1">Option 7</MenuItem>
                <MenuItem name="6-2">Option 8</MenuItem>
                <Submenu name="7">
                    <template slot="title">Submenu</template>
                    <MenuItem name="7-1">Option 7</MenuItem>
                    <MenuItem name="7-2">Option 8</MenuItem>
                </Submenu>
            </Submenu>
        </Submenu>
    </Menu>
</template>
<script>
    import router from '../../router/index'
    export default {
        name: "menus",
        ///跨组件属性
        inject: [],
        ///子组件
        components: {},
        ///组件属性
        props: {
            value: {
                state: {
                    type: String,
                    default: 'add'
                },
                data: {
                    type: Object,
                    default: {}
                }
            }
        },
        ///组件数据(状态)
        data() {
            return {}
        },
        ///组件的计算属性
        computed: {},

        ///组件方法
        methods: {
            loadMenu(){
               console.log(router);
            }
        },
        ///组件生命周期 挂载到了父节点上
        mounted() {
            this.loadMenu();
        },
        ///组件属性或数据的监听
        watch: {},

        ///组件生命周期 组件被销毁
        destroyed() {
        },

    }
</script>


<style scoped>
    .menus {
    }
</style>
