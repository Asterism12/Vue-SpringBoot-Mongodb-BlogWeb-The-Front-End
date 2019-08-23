<template>
    <div class="Nav">
        <div id="Navi">
            <nav>
                <p @click="toggle()"><router-link to="/Main">首页</router-link></p>
                <p @click="toggle()"><router-link to="/UserMain">用户空间</router-link></p>
            </nav>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
    export default {
        name: "Nav",
        data: function(){
            return{
                active:0,
                arr:[
                    "首页",
                    "用户空间"
                ],
            };
        },
        methods:{
            setTab:function(name, index, menus){
                this.nowIndex = index;
                this.menu_index = index + 1;
            },
            toggle: function(){
                this.active
            }
        }
    }
</script>

<style scoped>
    .router-link-active{
        color:brown;
        font-size: 16px;
    }
    .Nav{
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ffff;
        text-align: left;
    }
    nav img{
        width: 50px;
        height: 50px;
        padding: 5px;
        margin: 5px;
    }
    .Navi{
        width: 100%;
        overflow: hidden;
    }
    .Navi nav{
        padding: 0 10px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        overflow: auto;
        background-color: rgba(49,193,123,0.4);
    }
    .Navi p{
        text-align: center;
        font-size: 16px;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        padding: 10px;
        margin: 5px;
        color: #e5e5e5;
    }
    .Navi p a{
        color: #e5e5e5;
        text-decoration: none;
    }
    .Navi p a active{
        color: white;
    }
    .Navi .fixadd{
        position: absolute;
        right: -4px;
        background-color: rgba(49,193,123,0.4);
    }
</style>
