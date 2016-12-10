'use strict';

const BasicController = require('slet-basiccontroller')
// https://github.com/koa-modules/multer
const multer = require('koa-multer')

module.exports = class UploadController extends BasicController{
  constructor(app, ctx, next) {
    super(app, ctx, next)
    
    if (!this.app.opts.upload) {
      console.log('please give a upload config')
      return;
    }
    
    // 定义global filter
    this.global_filter = ['koa-bodyparser']
    
    // 定义中间件
    this.upload = multer(this.app.opts.upload) 
  }
}