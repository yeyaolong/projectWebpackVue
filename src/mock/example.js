import Mock from 'mockjs'
// import { param2Obj } from '@/utils'

export default {
  // 登录
  login: config => {
    return Mock.mock({
      'code': 200,
      'data': {
        'message': 'success',
        'entity': {
          'name': '@cname',
          "img":'/images/xxx/xxx.jpg'
        }
      }
    })
  },


  user : confit => {
    return Mock.mock({
      'code': 200,
      'data': {
        'message': 'success',
        'entity':{
          'name': '@cname',
          'area': '@province(true)',
          'identity': "超级管理员"
        }
      }
    })
  },
  getTable : confit => {
    return Mock.mock({
        "code": 200,
        "data": {
          'message':'success',
          'list|5-20': [{
            "date": '@date("yyyy-MM-dd")',
            "name": '@cname',
            "address": '@county(true)'
          }]
        }
    });
  },
  getOptions : config => {
    return Mock.mock({
      "code": 200,
      "data": {
        'message': 'success',
        'list|5-7': [{
          "label": '@province()',
          "value": '@natural(10, 100)',
          "children|5-8": [{
            "label": '@city()',
            "value": '@natural(10, 100)',
            "children|5-5": [{
              "label": '@county()',
              "value": '@natural(10, 100)'
            }]
          }]
        }],
        "places|9-18": [{
          "label": '@province()',
          "value": '@natural(10, 100)'
        }]
      }
    })
  },
  getArticleDetail:config=>{
    return Mock.mock({
      "code": 200,
      "data": {
        'message': 'success',
        'entity':{
          "title": '@ctitle(5,20)',
          "time": '@datetime()',
          "detail": '@cparagraph(35,200)'
        }
      }
    })
  },
  getDemoList: config => {
    return Mock.mock({
      "code": 200,
      "data": {
        'message': 'success',
        'list|3-8': [{
          "title": '@ctitle(5,10)',
          "time": '@datetime()',
          "name":'@cname()',
          "text": '@csentence(5, 10)'
        }]
      }
    })
  },
  getDirectiveMenu: config => {
    return Mock.mock({
      'code': 200,
      'data': {
        'message': 'success',
        'directiveList': ['v-text', 'v-html', 'v-show', 'v-if', 'v-for', 'v-on', 'v-bind', 'v-model', 'v-slot', 'v-pre', 'v-cloak', 'v-once']
      }
    })
  }

}
