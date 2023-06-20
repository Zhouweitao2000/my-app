export default {
    state: {
        isCollapse: false, // 菜单展开收起
        tabList: [{
                    path: "/",
                    name: "home",
                    label: "首页",
                    icon: "s-home",
                    url: "Home/Home",
                }

            ] // 面包屑数据
    },
    mutations: {
        // 修改菜单的展开方式
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        // 更新面包屑数据
        selectMenu(state, val) {
            console.log(val, 'val')
            if (val.name !== 'home') {
                const index = state.tabList.findIndex(item => item.name === val.name)
                if (index === -1) {
                    state.tabList.push(val)
                }
            }
        },
        // 删除指定tag数据
        closeTag(state, item) {
            console.log(item, 'item')
            const index = state.tabList.findIndex(val => val.name === item.name)
            state.tabList.splice(index, 1)
        }
    }
}