## Admin端

+ 创建 Template
+ 创建 Instance

## 所见即所得
编辑--预览

## 数据结构

表单模版Template
```json
{
  title: '',     // 表单标题
  items: [{      // 表单资料项
    name: '',    // 资料项名称
    type: '',    // 资料的类型，text或radio等等
    options: [], // 资料值的可选项 
    value: ''    // 最终值
  }]
}
```

已填表单Instance
```json
{
	vid: '', // 验证信息
	createTime: '', // 提交时间
	template: {}, // 表单
	flag: '', // 旗帜，可以代表处理状态
}
```

## TODO 
标旗帜

优先目标: 完成基础框架，再做优化。
