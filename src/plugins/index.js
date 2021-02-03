import { ElButton, ElSelect, ElInput } from 'element-plus'
import 'element-plus/lib/theme-chalk/el-button.css'
import 'element-plus/lib/theme-chalk/el-select.css'
import 'element-plus/lib/theme-chalk/el-input.css'


const plugins = [ElButton, ElSelect, ElInput]

export default function (app) {
  for (const plugin of plugins) {
    app.use(plugin)
  }
}