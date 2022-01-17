const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  //rewrite는 redirect하지만 url은 변하지 않는다.
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*",
        permanent: false,
    }
  ]
  },
  //rewrite는 redirect하지만 url은 변하지 않는다.
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      }
    ]
  }
}