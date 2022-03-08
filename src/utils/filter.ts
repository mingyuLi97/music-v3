/**
 * @description: 将数字转换为带单位的
 * @param {string} num
 * @return {*}
 * @example
 *  numFilter(10000) => 1万
 */
export function numFilter(num: string | number): string {
  if (!num) return '';
  const n = +num;
  if (n < 10000) {
    return n.toString();
  }

  function handle(target: number, unit: number): string {
    return (target / unit).toFixed(target % unit === 0 ? 0 : 1);
  }

  if (n >= 10 ** 8) {
    return handle(n, 10 ** 8) + '亿';
  }

  if (n >= 10 ** 4) {
    return handle(n, 10 ** 4) + '万';
  }
}
