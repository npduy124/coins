import { query, mutation } from './_generated/server';
import { v } from 'convex/values';

export const getLatestPosts = query({
  handler: async (ctx) => {
    return await ctx.db
      .query('posts')
      .filter((q) => q.eq(q.field('isPublished'), true))
      .order('desc')
      .take(10);
  },
});

export const createPost = mutation({
  args: {
    title: v.string(),
    content: v.string(),
    category: v.string(),
  },
  handler: async (ctx, args) => {
    // Logic tạo slug tự động từ title có thể viết ở đây
    const slug = args.title.toLowerCase().replace(/ /g, '-');

    await ctx.db.insert('posts', {
      title: args.title,
      slug: slug,
      content: args.content,
      category: args.category,
      excerpt: args.content.substring(0, 150),
      authorId: 'admin', // Tạm thời
      isPublished: true,
      tags: [],
    });
  },
});
