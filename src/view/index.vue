<template>
    <div class="full flex centerVH">
        <div>
            <h1>这是首页</h1>
        </div>
        <div>
            <Button @click="_onLogout">退出登录</Button>
            <Button @click="_onGotoGrid">网格化管理</Button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
export default Vue.extend({
    name:'home',
    methods:{
        ...mapActions([
            'logout'
        ]),
        _onLogout(){
            this.logout().then(res=>{
                this.$router.push({
                    name: 'login'
                })
            })
        },
        _onGotoGrid(){
             this.$router.push({
                    name: 'grid_manager'
                })
        }
    }
})
</script>



