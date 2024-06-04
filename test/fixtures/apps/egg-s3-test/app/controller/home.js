'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    try {
      await this.app.s3.downloadFile({ key: 'c1.png', localFile: 'aaa.png' });
    } catch (err) {
      this.ctx.logger.error(err);
    }
    this.ctx.body = 'hi, ' + this.app.plugins.s3.name;
  }
}

module.exports = HomeController;
