import { ElButton, ElSelect, ElInput, ElDropdownMenu, ElDropdown, ElDropdownItem, ElScrollbar, ElMenu, ElMenuItem, ElSubmenu, ElMenuItemGroup } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'


const plugins = [ElButton, ElSelect, ElInput, ElDropdownMenu, ElDropdown, ElDropdownItem, ElScrollbar, ElMenu, ElMenuItem, ElSubmenu, ElMenuItemGroup]

export default function (app) {
  for (const plugin of plugins) {
    app.use(plugin)
  }
}