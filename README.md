sohu-cloudscape-nodejs-test
===========================

这是一个简单的测试搜狐PaaS平台云景的测试项目

##siege测试结果：

```
$siege -b -c100 -t 60S http://address.sohuapps.com

Transactions:          10893 hits
Availability:         100.00 %
Elapsed time:          59.09 secs
Data transferred:         0.35 MB
Response time:            0.50 secs
Transaction rate:       184.35 trans/sec
Throughput:           0.01 MB/sec
Concurrency:           91.64
Successful transactions:       10893
Failed transactions:             0
Longest transaction:         12.08
Shortest transaction:         0.08
```