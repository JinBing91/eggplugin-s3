'use strict';

/**
 * egg-s3 default config
 * @member Config#s3
 */
exports.s3 = {
  app: true,
  agent: false,
  // Single client
  client: {
    credentials: {
      accessKeyId: '',
      secretAccessKey: '',
    },
    region: '',
    bucket: '',
    prefix: '',
  },
};
