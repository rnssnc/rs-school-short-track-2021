/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainCounter = {};

  domains.map((domain) => domain.split('.').reverse().map((subDomain) => `.${subDomain}`).reduce((acc, subDomain) => {
    const dom = acc + subDomain;
    if (Object.prototype.hasOwnProperty.call(domainCounter, dom)) domainCounter[dom]++;
    else domainCounter[dom] = 1;

    return acc + subDomain;
  }, ''));

  return domainCounter;
}

module.exports = getDNSStats;
