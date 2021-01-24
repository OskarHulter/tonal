function importAll(r) {
  return r.keys().map((fileName: string) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
    meta: r(fileName)
  }))
}

export const posts = importAll(
  require.context("../pages/blog/", true, /\.mdx$/)
)