/*
 * @Description:用户模块
 * @FilePath: \DTSMv3\src\api\user.js
 * @Date: 2022-01-24 15:22:06
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2022-01-24 16:06:49
 * @author: Lin_kangjing
 */
import { post } from '@/http/'
const api = {
  Login: '/auth/login',
  // get my info
  UserInfo: '/user/info',
  UserMenu: '/user/nav'
}

/**
 * @description: 登录接口
 * @param {*} parameter
 * @return {*}
 * @author: Lin_kangjing
 */
export function login (parameter) {
  return post(api.Login, parameter)
}
