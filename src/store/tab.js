import Cookie from "js-cookie"
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

        ], // 面包屑数据
        menu: []
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
        },
        // 设置menu的数据
        setMenu(state, val) {
            state.menu = val
            Cookie.set('menu', JSON.stringify(val))
        },
        // 动态注册路由
        addMenu(state, router) {
            // 判断缓存中是否有数据

            if (!Cookie.get('menu')) return
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
                // 组装动态路由的数据
            const menuArray = []
            menu.forEach(item => {
                if (item.children) {
                    item.children = item.children.map(item => {
                        item.component = () =>
                            import (`../views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                } else {
                    item.component = () =>
                        import (`../views/${item.url}`)
                    menuArray.push(item)
                }
            });
            console.log(menuArray, 'menuArray')
                // 路由的动态添加
            menuArray.forEach(item => {
                router.addRoute('Main', item)
            })
        }
    }
}