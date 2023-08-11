import { g, auth, config } from '@grafbase/sdk'

/* const post = g.model('Post', {
  title: g.string(),
  slug: g.string().unique(),
  content: g.string().optional(),
  publishedAt: g.datetime().optional(),
  comments: g.relation(() => comment).optional().list().optional(),
  likes: g.int().default(0),
  tags: g.string().optional().list().length({ max: 5 }),
  author: g.relation(() => user).optional()
}).search()

const comment = g.model('Comment', {
  post: g.relation(post),
  body: g.string(),
  likes: g.int().default(0),
  author: g.relation(() => user).optional()
}) */

const User = g.model('User', {
  name: g.string().length({ min: 2, max: 21 }),
  email: g.email().unique(),
  bio: g.string().length({ min: 10, max: 250 }).optional(),
  portfolioUrl: g.url().optional(),
  githubUrl: g.url().optional(),
  twitterUrl: g.url().optional(),
  posts: g.relation(() => Post).list().optional()
})

const Post = g.model('Post', {
  title: g.string().length({ min: 3, max: 100 }).search(),
  description: g.string().length({ max: 500 }).search(),
  image: g.url().list(),
  createdBy: g.relation(() => User)
})

export default config({
  schema: g
})
