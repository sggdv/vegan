# 目标
提供一个工具，协助电商企业从客户处收集订单所需要的资料。

# 应用场景
做过电子商务的，大多数会遇到预订某些产品是需要客户提供额外资料的情况。例如，交通类的车票。
预订车票，除了知道客人目的地外，还需要收集客人乘车日期、班次等等资料。再如，港澳通行证签注办理。
需要收集客人的姓名、性别、出生年月日、通行证编号、出生地、签发地、过关日期等等。

vegan的目标是力求为需要准确、高效地收集资料的场景提供一套成熟、稳定的解决方案和工具。

典型的实际应用场景

* 电商企业
* 培训报名
* 通行证签注
* 虚拟产品(激活序列号)

# 技术选型
NodeJS、Express、MongoDB、Bootstarp、React

# 工作原理
客户     --> 预览介绍 --> 填写资料

电商企业 --> 编辑介绍 
        --> 定义资料表格 --> 推送消息
        --> 整理资料 

## 编辑资料表格
* 定义各项资料名称、数据类型。

## 推送消息
* SMS
* E-mail
* Wechat

## 整理资料
* 删除没用的资料
* 导出资料
* 处理资料
* 归档活动

## 目录结构

admin  >> 后台管理 

client >> 客户网站

api    >> 为admin、client提供api支持

## 端口分配
admin  3000
client 3001
api    3002 

## 盈利模式
发布到淘宝服务市场。

## 开发过程
登陆跳转
编辑表单
对接淘宝
填写资料
处理归档

