exports.handler = (evt, ctx, cb) => {
  cb(null, {
    statusCode: 200,
    body: 'index hello world!',
  })
}
