define({ "api": [
  {
    "type": "POST",
    "url": "/v1/xlink-truliva-rest/RestSaleRentOrderDetailed/exportSaleRentOrderDetailedList",
    "title": "售租明细列表导出接口",
    "name": "exportSaleRentOrderDetailedList",
    "group": "RestSaleRentOrderDetailedController",
    "description": "<p>售租明细列表导出接口</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页，从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询对象</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateMax",
            "description": "<p>创建日期最大值</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateMin",
            "description": "<p>创建日期最小值</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.customName",
            "description": "<p>大客户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "query.orderAmountMax",
            "description": "<p>订单总额最大值</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "query.orderAmountMin",
            "description": "<p>订单总额最小值</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.orderId",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.productFieldName",
            "description": "<p>产品过滤字段名   产品型号productModel/产品料号productPn</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.productFieldValue",
            "description": "<p>产品过滤字段值</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": true,
            "field": "sort",
            "description": "<p>排序对象</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"page\": 0,\n  \"query\": {\n    \"createDateMax\": 0,\n    \"createDateMin\": 0,\n    \"customName\": \"string\",\n    \"orderAmountMax\": 0,\n    \"orderAmountMin\": 0,\n    \"orderId\": \"string\",\n    \"orderType\": \"string\",\n    \"productFieldName\": \"string\",\n    \"productFieldValue\": \"string\"\n  },\n  \"size\": 0,\n  \"sort\": [\n    {\n      \"createDate\": \"desc\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/truliva/controller/RestSaleRentOrderDetailedController.java",
    "groupTitle": "RestSaleRentOrderDetailedController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-truliva-rest/RestSaleRentOrderDetailed/listSaleRentOrderDetailed",
    "title": "租售明细列表查询接口",
    "name": "listSaleRentOrderDetailed",
    "group": "RestSaleRentOrderDetailedController",
    "description": "<p>租售明细列表查询接口</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页，从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>每页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateMax",
            "description": "<p>创建日期最大值</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateMin",
            "description": "<p>创建日期最小值</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.customName",
            "description": "<p>大客户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "query.orderAmountMax",
            "description": "<p>订单金额最大值</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "query.orderAmountMin",
            "description": "<p>订单金额最小值</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.orderId",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.orderType",
            "description": "<p>订单类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.productFieldName",
            "description": "<p>产品过滤字段名   产品型号productModel/产品料号productPn</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.productFieldValue",
            "description": "<p>产品过滤字段值</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": true,
            "field": "sort",
            "description": "<p>排序对象</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"page\": 0,\n  \"query\": {\n    \"createDateMax\": 0,\n    \"createDateMin\": 0,\n    \"customName\": \"string\",\n    \"orderAmountMax\": 0,\n    \"orderAmountMin\": 0,\n    \"orderId\": \"string\",\n    \"orderType\": \"string\",\n    \"productFieldName\": \"string\",\n    \"productFieldValue\": \"string\"\n  },\n  \"size\": 0,\n  \"sort\": [\n    {\n      \"createDate\": \"desc\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.count",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.list",
            "description": "<p>数据列表</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.list.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.customName",
            "description": "<p>客户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.list.num",
            "description": "<p>产品订购数量</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.orderAmount",
            "description": "<p>订单总额</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.orderId",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.orderType",
            "description": "<p>订单类型</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.productAmount",
            "description": "<p>产品总额</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.productModel",
            "description": "<p>产品型号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.serviceAmount",
            "description": "<p>服务费总额</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": {\n    \"count\": 0,\n    \"current_page\": 0,\n    \"list\": [\n      {\n        \"createDate\": 0,\n        \"customName\": \"string\",\n        \"num\": 0,\n        \"orderAmount\": 0,\n        \"orderId\": \"string\",\n        \"orderType\": \"string\",\n        \"productAmount\": 0,\n        \"productModel\": \"string\",\n        \"productPn\": \"string\",\n        \"serviceAmount\": 0\n      }\n    ],\n    \"per_page\": 0\n  },\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-03-20T02:58:02.480Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/truliva/controller/RestSaleRentOrderDetailedController.java",
    "groupTitle": "RestSaleRentOrderDetailedController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-truliva-rest/RestSaleRentOrderDetailed/saleRentOrderDetailedCount",
    "title": "统计接口",
    "name": "saleRentOrderDetailedCount",
    "group": "RestSaleRentOrderDetailedController",
    "description": "<p>统计接口</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页，从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询对象</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateMax",
            "description": "<p>创建日期最大值</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateMin",
            "description": "<p>创建日期最小值</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.customName",
            "description": "<p>大客户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "query.orderAmountMax",
            "description": "<p>订单总额最大值</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "query.orderAmountMin",
            "description": "<p>订单总额最小值</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.orderId",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.orderType",
            "description": "<p>订单类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.productFieldName",
            "description": "<p>产品过滤字段名   产品型号productModel/产品料号productPn</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.productFieldValue",
            "description": "<p>产品过滤字段值</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>每页大小</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"page\": 0,\n  \"query\": {\n    \"createDateMax\": 0,\n    \"createDateMin\": 0,\n    \"customName\": \"string\",\n    \"orderAmountMax\": 0,\n    \"orderAmountMin\": 0,\n    \"orderId\": \"string\",\n    \"orderType\": \"string\",\n    \"productFieldName\": \"string\",\n    \"productFieldValue\": \"string\"\n  },\n  \"size\": 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.orderAmount",
            "description": "<p>订单总额</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.productAmount",
            "description": "<p>产品总额</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.serviceAmount",
            "description": "<p>服务总额</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": {\n    \"orderAmount\": 0,\n    \"productAmount\": 0,\n    \"serviceAmount\": 0\n  },\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-03-20T03:02:05.940Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/truliva/controller/RestSaleRentOrderDetailedController.java",
    "groupTitle": "RestSaleRentOrderDetailedController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-truliva-rest/RestServiceDeferredDetailed/exportServiceDeferredDetailed",
    "title": "服务费递延列表导出接口",
    "name": "exportServiceDeferredDetailed",
    "group": "RestServiceDeferredDetailedController",
    "description": "<p>服务费递延列表导出接口</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页，从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询对象</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateMax",
            "description": "<p>创建日期最大值</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateMin",
            "description": "<p>创建日期最小值</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.customName",
            "description": "<p>大客户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "query.deferredAmountMax",
            "description": "<p>递延收益总额最大值</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "query.deferredAmountMin",
            "description": "<p>递延收益总额最小值</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.orderId",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.orderType",
            "description": "<p>订单类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.productFieldName",
            "description": "<p>产品过滤字段名   产品型号productModel/产品料号productPn</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.productFieldValue",
            "description": "<p>产品过滤字段值</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>每页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": true,
            "field": "sort",
            "description": "<p>排序对象</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"page\": 0,\n  \"query\": {\n    \"createDateMax\": 0,\n    \"createDateMin\": 0,\n    \"customName\": \"string\",\n    \"deferredAmountMax\": 0,\n    \"deferredAmountMin\": 0,\n    \"orderId\": \"string\",\n    \"orderType\": \"string\",\n    \"productFieldName\": \"string\",\n    \"productFieldValue\": \"string\"\n  },\n  \"size\": 0,\n  \"sort\": [\n    {\n      \"createDate\": \"desc\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/truliva/controller/RestServiceDeferredDetailedController.java",
    "groupTitle": "RestServiceDeferredDetailedController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-truliva-rest/RestServiceDeferredDetailed/listServiceDeferredDetailed",
    "title": "服务费递延明细列表查询接口",
    "name": "listServiceDeferredDetailed",
    "group": "RestServiceDeferredDetailedController",
    "description": "<p>服务费递延明细列表查询接口</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页，从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询对象</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateMax",
            "description": "<p>创建日期最大值</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateMin",
            "description": "<p>创建日期最小值</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.customName",
            "description": "<p>大客户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "query.deferredAmountMax",
            "description": "<p>递延收益总额最大值</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "query.deferredAmountMin",
            "description": "<p>递延收益总额最小值</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.orderId",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.orderType",
            "description": "<p>订单类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.productFieldName",
            "description": "<p>产品过滤字段名   产品型号productModel/产品料号productPn</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.productFieldValue",
            "description": "<p>产品过滤字段值</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>每页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": true,
            "field": "sort",
            "description": "<p>排序对象</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"page\": 0,\n  \"query\": {\n    \"createDateMax\": 0,\n    \"createDateMin\": 0,\n    \"customName\": \"string\",\n    \"deferredAmountMax\": 0,\n    \"deferredAmountMin\": 0,\n    \"orderId\": \"string\",\n    \"orderType\": \"string\",\n    \"productFieldName\": \"string\",\n    \"productFieldValue\": \"string\"\n  },\n  \"size\": 0,\n  \"sort\": [\n    {\n      \"createDate\": \"desc\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.count",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.list",
            "description": "<p>数据列表</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.list.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.customName",
            "description": "<p>大客户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.deferredProfitAmount",
            "description": "<p>递延收益总额</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.deferredProfitBalance",
            "description": "<p>主营业务收入</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.maincampBusinessIncome",
            "description": "<p>递延收益余额</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.orderId",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.orderType",
            "description": "<p>订单类型</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.productModel",
            "description": "<p>产品型号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": {\n    \"count\": 0,\n    \"current_page\": 0,\n    \"list\": [\n      {\n        \"createDate\": 0,\n        \"customName\": \"string\",\n        \"deferredProfitAmount\": 0,\n        \"deferredProfitBalance\": 0,\n        \"maincampBusinessIncome\": 0,\n        \"orderId\": \"string\",\n        \"orderType\": \"string\",\n        \"productModel\": \"string\",\n        \"productPn\": \"string\"\n      }\n    ],\n    \"per_page\": 0\n  },\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-03-20T03:04:12.766Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/truliva/controller/RestServiceDeferredDetailedController.java",
    "groupTitle": "RestServiceDeferredDetailedController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-truliva-rest/RestServiceDeferredDetailed/serviceDeferredDetailedCount",
    "title": "服务费递延收益统计接口",
    "name": "serviceDeferredDetailedCount",
    "group": "RestServiceDeferredDetailedController",
    "description": "<p>服务费递延收益统计接口</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页，从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询对象</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateMax",
            "description": "<p>创建日期最大值</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateMin",
            "description": "<p>创建日期最小值</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.customName",
            "description": "<p>大客户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "query.deferredAmountMax",
            "description": "<p>递延收益总额最大值</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "query.deferredAmountMin",
            "description": "<p>递延收益总额最小值</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.orderId",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.orderType",
            "description": "<p>订单类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.productFieldName",
            "description": "<p>产品过滤字段名   产品型号productModel/产品料号productPn</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.productFieldValue",
            "description": "<p>产品过滤字段值</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>每页大小</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"page\": 0,\n  \"query\": {\n    \"createDateMax\": 0,\n    \"createDateMin\": 0,\n    \"customName\": \"string\",\n    \"deferredAmountMax\": 0,\n    \"deferredAmountMin\": 0,\n    \"orderId\": \"string\",\n    \"orderType\": \"string\",\n    \"productFieldName\": \"string\",\n    \"productFieldValue\": \"string\"\n  },\n  \"size\": 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.deferredAmount",
            "description": "<p>递延收益总金额</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.deferredProfitBalance",
            "description": "<p>主营业务收入</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.maincampBusinessIncome",
            "description": "<p>递延收益总余额</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": {\n    \"deferredAmount\": 0,\n    \"deferredProfitBalance\": 0,\n    \"maincampBusinessIncome\": 0\n  },\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-03-20T03:06:44.647Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/truliva/controller/RestServiceDeferredDetailedController.java",
    "groupTitle": "RestServiceDeferredDetailedController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  }
] });
