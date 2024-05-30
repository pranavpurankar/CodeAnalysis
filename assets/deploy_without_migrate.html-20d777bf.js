import{_ as s,r as t,o as i,c as d,a as e,b as o,d as c,w as n,e as _}from"./app-abd48091.js";const a={},r=e("p",null,"在实际的生产环境的部署过程中，团队的MySQL的管理员可能不会给到应用账号create等比较敏感的权限，这种情况下，我们可以通过手动迁移数据的方式起到和等同Django migrate的效果。",-1),u=e("p",null,"操作步骤：",-1),h=e("li",null,[o("进入Server服务工作目录后（假设工作目录为 "),e("code",null,"/data/CodeAnalysis/server/"),o("，以下路径均为工作目录内的相对路径）")],-1),p=e("code",null,"vi ./scripts/config.sh",-1),S=e("li",null,[o("执行"),e("code",null,"bash ./scripts/deploy.sh init"),o("：初始化DB、安装依赖和运行初始化脚本")],-1),m=e("li",null,[o("使用MySQLDump工具导出表结构与数据："),e("code",null,"mysqldump -u user -p –databases codedog_main codedog_analysis codedog_file codedog_login > codedog_all.sql")],-1),y=_("<li>在生产环境建数据库，详情见：<code>server/sql/init.sql</code></li><li>连接MySQL，导入数据： <ul><li>临时关闭外键检查: <code>SET SESSION FOREIGN_KEY_CHECKS=0</code>，否则会因为数据中有外键关联导致导入失败</li><li>导入表结构与数据: <code>source /youdir/codedog_all.sql;</code></li><li>开启外键检查: <code>SET SESSION FOREIGN_KEY_CHECKS=1</code></li></ul></li><li>启动服务: 直接执行 <code>bash ./scripts/deploy.sh start</code>，无需执行 <code>init</code>方法，否则会导致数据重复写入</li>",3);function g(E,f){const l=t("RouterLink");return i(),d("div",null,[r,u,e("ol",null,[h,e("li",null,[o("在开发环境一个有全部权限的MySQL地址，初始化数据（MySQL版本运行版本：5.7） "),e("ul",null,[e("li",null,[o("执行"),p,o("：填写一个有全部权限的MySQL数据库地址和Redis信息以及根据需要调整配置信息，主要的工程配置已提供默认值，字段说明可以查看"),c(l,{to:"/zh/guide/server/"},{default:n(()=>[o("文档")]),_:1})]),S,m])]),y])])}const L=s(a,[["render",g],["__file","deploy_without_migrate.html.vue"]]);export{L as default};
