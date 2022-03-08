/*
 * @Description:
 * @Wiki:
 * @Author: 李明宇
 * @Date: 2022-03-03 23:38:24
 */

export type PromiseFunction<T = any> = (...arg: any[]) => Promise<T>;

export type PromiseReturnType<P> = P extends Promise<infer V> ? V : never;

/**
 * 将一些属性变为可选
 */
export type SomeRequired<T, K extends keyof T> = {
  [P1 in Exclude<keyof T, K>]: T[P1];
} & { [P in K]-?: T[P] };
