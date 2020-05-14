module.exports = {
  /**
   * @description 网站标题
   */
  title: 'sz-mall',

  baseUel: 'http://127.0.0.1:8080',
  /**
   * @description 是否显示 tagsView
   */
  tagsView: true,
  /**
   * @description 固定头部
   */
  fixedHeader: true,
  /**
   * @description 记住密码状态下的token在Cookie中存储的天数，默认1天
   */
  tokenCookieExpires: 1,
  /**
   * @description 记住密码状态下的密码在Cookie中存储的天数，默认1天s
   */
  passCookieExpires: 1,
  /**
   * @description 是否只保持一个子菜单的展开
   */
  uniqueOpened: true,
  /**
   * @description token key
   */
  tokenKey: 'sz-token',

  userKey: 'user',
  /**
   * @description 请求超时时间，毫秒（默认1分钟）
   */
  timeout: 600000,
  /**
   * @description 是否显示logo
   */
  sidebarLogo: true,
  /**
   * 是否显示设置的底部信息
   */
  showFooter: true,
  /**
   * 底部文字，支持html语法
   */
  footerTxt: '© 2020 sz <a href="" ></a>',
  /**
   * 备案号
   */
  caseNumber: '蜀ICP备20013568号-1'
}
