# 通用API
采用RESTful架构。

RESTFul最重要的一个设计原则就是，客户端与服务器的交互在请求之间
是无状态的，也就是说，当涉及到用户状态时，每次请求都要带上身份验
证信息。

# OAuth2.0认证机制。 
OAuth在"客户端"与"服务提供商"之间，设置了一个授权层（authorization 
layer）。"客户端"不能直接登录"服务提供商"，只能登录授权层，以此将
用户与客户端区分开来。"客户端"登录授权层所用的令牌（token），与用
户的密码不同。用户可以在登录的时候，指定授权层令牌的权限范围和有效
期。

"客户端"登录授权层以后，"服务提供商"根据令牌的权限范围和有效期，向
"客户端"开放用户储存的资料。

* 用户打开客户端以后，客户端要求用户给予授权。
* 用户同意给予客户端授权。
* 客户端使用上一步获得的授权，向认证服务器申请令牌。
* 认证服务器对客户端进行认证以后，确认无误，同意发放令牌。 
* 客户端使用令牌，向资源服务器申请获取资源。
* 资源服务器确认令牌无误，同意向客户端开放资源。

# 可选技术
* spring security oauth2

## API

Admin端

+ 创建 Template
+ 查询 Template
+ 创建 Instance
+ 查询 Instance
+ 处理 Instance

Client端

+ 查询 Instance
+ 修改 Instance

## FIXME
提交instance时，自动记录时间。
