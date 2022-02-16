/*
 * @Description: 登陆模块
 * @Author: 李明宇
 * @Date: 2022-02-14 22:09:50
 */

import service from '@/service';

interface LoginResponse {
  code: number;
  cookie: string;
  loginType: number;
  profile: {
    nickname: string;
    userId: number;
    userType: number;
    vipType: number;
  };
  token: string;
}

export function loginByCellphone(params: {
  phone: number;
  password?: string;
  captcha?: string;
}) {
  return service.get<any, LoginResponse>('/login/cellphone', {
    params
  });
}

// 调用此接口 ,传入手机号码, 可发送验证码
export function sentCaptcha(phone: number) {
  return service.get('/captcha/sent', {
    params: {
      phone
    }
  });
}

// 调用此接口 ,传入手机号码和验证码, 可校验验证码是否正确
export function verifyCaptcha(phone: number, captcha: number) {
  return service.get('/captcha/verify', {
    params: {
      phone,
      captcha
    }
  });
}
