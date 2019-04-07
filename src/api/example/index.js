import $http from "@/server";    // $http方法 必须
import api from "../resource";   // 获取请求url路径 必须

const $ajaxExample = {
    /**
     * [getTable description]
     * @Author   HUHL
     * @DateTime 2018-03-23T14:51:04+0800
     * @param    {[type]}                 params   [{page,name,year,address,native}]
     * @param    {Function}               callback [回调]
     * @return   {[type]}                          [description]
     */
    getTable: function (params, callback) {
        console.log(params);
        $http.get(api.getTable, params).then(function (res) {
            callback(res.data);
        })
    },
    /**
     * [getOptions description]
     * @Author   HUHL
     * @DateTime 2018-03-23T14:51:04+0800
     * @param    {[type]}                 params   [description]
     * @param    {Function}               callback [description]
     * @return   {[type]}                          [description]
     */
    getOptions: function (params, callback) {
        $http.get(api.getOptions, params).then(function (res) {
            callback(res.data);
        })
    },
    /**
     * [getOptions description]
     * @Author   HUHL
     * @DateTime 2018-03-23T14:51:04+0800
     * @param    {[type]}                 params   [description]
     * @param    {Function}               callback [description]
     * @return   {[type]}                          [description]
     */
    getArticleDetail: function (params, callback) {
        $http.get(api.getArticleDetail, params).then(function (res) {
            callback(res.data);
        })
    },
    /**
     * [getOptions description]
     * @Author   HUHL
     * @DateTime 2018-03-23T14:51:04+0800
     * @param    {[type]}                 params   [description]
     * @param    {Function}               callback [description]
     * @return   {[type]}                          [description]
     */
    getDemoList: function (params, callback,errorCallback) {
        $http.get(api.getDemoList, params).then(function (res) {
            callback(res.data);
        }).catch(function (error) {
            console.log(error);
            if (typeof errorCallback==="function") {
                errorCallback(error);
            }
        });
    },

    getDirectiveMenu: function (params, callback, errorCallback) {
      $http.get(api.getDirectiveMenu, params).then(function (res) {
        callback(res.data);
      }).catch(function (error) {
        console.log(error);
        if (typeof errorCallback==="function") {
          errorCallback(error);
        }
      });
    }
};
export default $ajaxExample;
