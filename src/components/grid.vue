<template>
    <div class="layout">
        <Layout>
            <Header class="header">
                <div class="logo" style="color: #f0f0f0;">
                    三人行，必有我师
                </div>
                <ul class="menu">
                    <li>
                        欢迎:三人行管理员
                    </li>
                    <li v-if="showFullScreenBtn">
                        <Icon :type="!isFullscreen ? 'ios-expand':'ios-contract'"/>
                    </li>
                    <li @click="_onDropOut">
                        <Icon type="ios-exit-outline" ></Icon>
                        退出
                    </li>
                </ul>
            </Header>
            <Row style="flex:1;overflow: auto;">
                <i-col span="4" style="height:100%;">
                    <menus></menus>
                </i-col>
                <i-col span="20" style="height:100%;">
                    <Breadcrumb  style="padding:15px;">
                        <BreadcrumbItem to="/">Home</BreadcrumbItem>
                        <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
                        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
                    </Breadcrumb>
                    <Content class="content" style="padding:0 15px 15px 15px;">
                        <router-view></router-view>
                    </Content>
                </i-col>
            </Row>
        </Layout>
    </div>
</template>
<script>
    import Menus from "./menus/menus-tem.vue";
    import {mapActions } from 'vuex'
    export default {
        name: "grid",
        ///跨组件属性
        inject: [],
        ///子组件
        components: {Menus},
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
            return {
                isFullscreen:false
            }
        },
        ///组件的计算属性
        computed: {
            showFullScreenBtn () {
                return window.navigator.userAgent.indexOf('MSIE') < 0
            }
        },

        ///组件方法
        methods: {
            ...mapActions([
                'logout'
            ]),
            handleFullscreen () {
                let main = document.body;
                if (this.isFullscreen) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen()
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen()
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen()
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen()
                    }
                } else {
                    if (main.requestFullscreen) {
                        main.requestFullscreen()
                    } else if (main.mozRequestFullScreen) {
                        main.mozRequestFullScreen()
                    } else if (main.webkitRequestFullScreen) {
                        main.webkitRequestFullScreen()
                    } else if (main.msRequestFullscreen) {
                        main.msRequestFullscreen()
                    }
                }
            },
            handleChange (value) {
                switch(value + ''){
                    case '1':{}break;
                    case '2':{this.handleFullscreen()}break;
                    case '3':{this.$store.dispatch('logout').then(()=>this.$router.push({name:'index'}))}break;
                }
            },
            _onDropOut(){
                this.logout().then(res=>{
                    this.$router.push({
                        name: 'login'
                    })
                })
            }
        },
        ///组件生命周期 挂载到了父节点上
        mounted() {

        },
        ///组件属性或数据的监听
        watch: {},

        ///组件生命周期 组件被销毁
        destroyed() {
        },

    }
</script>


<style scoped lang="less">
    .layout {
        display: flex;
        width: 100%;
        height: 100%;
        background-color:#000c17;
        flex-direction: column;  /* 子元素横向排列 */
        .logo{
            float: left;
        }
        .menu{
            float: right;
            background-color: transparent;
            color:#fff;
            li{
                float: left;
                padding:0 10px;
                list-style: none;
                cursor: pointer;
            }
        }
        #menu::-webkit-scrollbar {/*滚动条整体样式*/
            width: 0px;     /*高宽分别对应横竖滚动条的尺寸*/
            height: 1px;
        }
        #menu::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
            border-radius: 10px;
        }
        #menu::-webkit-scrollbar-track {/*滚动条里面轨道*/
            border-radius: 10px;
        }
    }
</style>
