import { ElButton, ElSelect, ElInput, ElDropdownMenu, ElDropdown, ElDropdownItem } from 'element-plus'
/* import 'element-plus/lib/theme-chalk/el-button.css'
import 'element-plus/lib/theme-chalk/el-select.css'
import 'element-plus/lib/theme-chalk/el-input.css' */
import 'element-plus/lib/theme-chalk/index.css'


const plugins = [ElButton, ElSelect, ElInput, ElDropdownMenu, ElDropdown, ElDropdownItem]

export default function (app) {
  for (const plugin of plugins) {
    app.use(plugin)
  }
}