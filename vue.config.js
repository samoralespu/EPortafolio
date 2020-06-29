module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/EPortafolio/'
    : '/',
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false
      }
    }
  }
};
