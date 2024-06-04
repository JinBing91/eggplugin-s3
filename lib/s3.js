'use strict';

const assert = require('assert');
const S3 = require('s3-api');

module.exports = app => {
  app.addSingleton('s3', createOneClient);
};

function createOneClient(config, app) {
  const { credentials, endpoint } = config;

  assert(credentials.accessKeyId, `[egg-aws-s3] 'accessKeyId: ${credentials.accessKeyId}' is required on config`);
  assert(credentials.secretAccessKey, `[egg-aws-s3] 'secretAccessKey: ${credentials.secretAccessKey}' is required on config`);

  app.coreLogger.info('[egg-aws-s3] connecting %s', endpoint);
  const s3 = new S3(config);

  app.beforeStart(async () => {
    const { buckets } = await s3.listBuckets();
    app.coreLogger.info('[egg-aws-s3] listBuckets:', buckets);
    app.coreLogger.info('[egg-aws-s3] init instance success');
  });

  return s3;
}
