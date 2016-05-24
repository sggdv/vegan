## Admin端

+ 创建 Template
+ 创建 Instance

## 所见即所得
编辑--预览

## 数据结构

表单模版Template
```js
{
  title: '',     // 表单标题
  items: [{      // 表单资料项
    name: '',    // 资料项名称
    type: '',    // 资料的类型，text或radio等等
    options: [{  // 资料值的可选项 
			key: '',
			value: ''
		}],          
    value: ''    // 最终值
  }],
	createTime: '',// 创建时间
}
```

已填表单Instance
```js
{
	vid: '', // 验证信息
	createTime: '', // 提交时间
	template: {}, // 表单
	flag: '', // 旗帜，可以代表处理状态
}
```

## TODO 
+ 推送方式
+ Email
+ 标旗帜
+ 归档
+ 导出
+ Client端的输入限制

