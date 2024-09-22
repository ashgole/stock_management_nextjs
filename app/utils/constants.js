let rootPath = '';
if (process.env.NODE_ENV === 'development') {
  rootPath = 'http://localhost:3000'
} else {
  rootPath = 'https://ashabb-stock-management-nextjs.vercel.app'
}
export { rootPath };