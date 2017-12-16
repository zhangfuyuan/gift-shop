/**
 * Created by Jeffrey on 2017/12/7.
 */
const isPro = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
  baseUrl: isPro ? 'https://easy-mock.com/' : 'api/'
}
