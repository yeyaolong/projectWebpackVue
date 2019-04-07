import $http from "@/server";    // $http方法
import api from "../resource";   // 获取请求url路径

const $ajaxLogin = {
    /**
     * [login 登录]
     * @Author   HUHL
     * @DateTime 2018-03-23T14:51:04+0800
     * @param    {[type]}                 params   [description]
     * @param    {Function}               callback [description]
     * @return   {[type]}                          [description]
     */
    login: function (params, callback) {
        $http.post(api.login, params).then(function (res) {
            callback(res.data);
        })
    },
    /**
     * [getPhonePwd 获取手机短信验证码]
     * @Author   HUHL
     * @DateTime 2018-03-23T14:51:04+0800
     * @param    {[type]}                 params   [description]
     * @param    {Function}               callback [description]
     * @return   {[type]}                          [description]
     */
    getPhonePwd: function (params, callback) {
        $http.post(api.login, params).then(function (res) {
            callback(res.data);
        })
    }
};
export default $ajaxLogin;
