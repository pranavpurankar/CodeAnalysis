import{_ as a,r as l,o as r,c as d,a as e,b as s,d as i,e as m}from"./app-abd48091.js";const o={},c=e("h1",{id:"在-centos-安装-mysql",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#在-centos-安装-mysql","aria-hidden":"true"},"#"),s(" 在 CentOS 安装 MySQL")],-1),t=e("h2",{id:"注意",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#注意","aria-hidden":"true"},"#"),s(" 注意")],-1),u={href:"https://cloud.tencent.com/product/cdb",target:"_blank",rel:"noopener noreferrer"},y=m(`<h2 id="环境" tabindex="-1"><a class="header-anchor" href="#环境" aria-hidden="true">#</a> 环境</h2><p>CentOS 7.3 版本</p><h2 id="安装-mysql-yum源" tabindex="-1"><a class="header-anchor" href="#安装-mysql-yum源" aria-hidden="true">#</a> 安装 mysql yum源</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wget https://repo.mysql.com//mysql57-community-release-el7-11.noarch.rpm
yum localinstall mysql57-community-release-el7-11.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装成功后，查看MySQL版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum repolist all | grep mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出结果：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql-cluster-7.5-community/x86_64   MySQL Cluster 7.5 Community    禁用
mysql-cluster-7.5-community-source   MySQL Cluster 7.5 Community -  禁用
mysql-cluster-7.6-community/x86_64   MySQL Cluster 7.6 Community    禁用
mysql-cluster-7.6-community-source   MySQL Cluster 7.6 Community -  禁用
!mysql-connectors-community/x86_64   MySQL Connectors Community     启用:    221
mysql-connectors-community-source    MySQL Connectors Community - S 禁用
!mysql-tools-community/x86_64        MySQL Tools Community          启用:    135
mysql-tools-community-source         MySQL Tools Community - Source 禁用
mysql-tools-preview/x86_64           MySQL Tools Preview            禁用
mysql-tools-preview-source           MySQL Tools Preview - Source   禁用
mysql55-community/x86_64             MySQL 5.5 Community Server     禁用
mysql55-community-source             MySQL 5.5 Community Server - S 禁用
mysql56-community/x86_64             MySQL 5.6 Community Server     禁用
mysql56-community-source             MySQL 5.6 Community Server - S 禁用
!mysql57-community/x86_64            MySQL 5.7 Community Server     启用:    544
mysql57-community-source             MySQL 5.7 Community Server - S 禁用
mysql80-community/x86_64             MySQL 8.0 Community Server     禁用
mysql80-community-source             MySQL 8.0 Community Server - S 禁用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装mysql" tabindex="-1"><a class="header-anchor" href="#安装mysql" aria-hidden="true">#</a> 安装MySQL</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum install mysql-community-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>1.如遇以下报错，可尝试运行<code>yum install mysql-community-server --nogpgcheck</code>安装<br> Public key for mysql-community-libs-compat-5.7.37-1.el7.x86_64.rpm is not installed<br> Failing package is: mysql-community-libs-compat-5.7.37-1.el7.x86_64 GPG Keys are configured as: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql<br> 2.如遇以下报错，可执行<code>yum module disable mysql</code>后重试安装<br> All matches were filtered out by modular filtering for argument: mysql-community-serve<br> Error: Unable to find a match: mysql-community-server</p></blockquote><h2 id="配置mysql服务" tabindex="-1"><a class="header-anchor" href="#配置mysql服务" aria-hidden="true">#</a> 配置MySQL服务</h2><p>安装好的MySQL配置文件路径是<code>/etc/my.cnf</code>，这里可以根据需要调整，比如可以调整：</p><ul><li>datadir：MySQL存放数据的路径，如果有额外挂载磁盘，可以考虑指向相关路径</li></ul><h2 id="启动mysql服务" tabindex="-1"><a class="header-anchor" href="#启动mysql服务" aria-hidden="true">#</a> 启动MySQL服务</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>确认MySQL正常启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl status mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看生成 MySQL root用户临时密码：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>grep &#39;temporary password&#39; /var/log/mysqld.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="修改root用户密码" tabindex="-1"><a class="header-anchor" href="#修改root用户密码" aria-hidden="true">#</a> 修改root用户密码</h3><p>连接MySQL服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ mysql -uroot -p
# 输出上述查询到的临时密码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改root用户的密码（下面是改成 <code>Password@2021</code>，这里根据自行需要进行调整）：</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;Password@2021&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>`,26),v={href:"https://dev.mysql.com/doc/refman/5.7/en/linux-installation-yum-repo.html",target:"_blank",rel:"noopener noreferrer"};function h(b,p){const n=l("ExternalLinkIcon");return r(),d("div",null,[c,t,e("p",null,[s("本文档仅供参考，不适用于正式环境部署，正式环境建议使用专业的MySQL服务（比如"),e("a",u,[s("腾讯云的MySQL产品"),i(n)]),s("）")]),y,e("ul",null,[e("li",null,[e("a",v,[s("Installing MySQL on Linux Using the MySQL Yum Repository"),i(n)])])])])}const S=a(o,[["render",h],["__file","install_mysql_on_centos.html.vue"]]);export{S as default};
