import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  // Bảng User
  users: defineTable({
    tokenIdentifier: v.string(), // ID duy nhất từ Clerk
    name: v.optional(v.string()),
    email: v.optional(v.string()),
    image: v.optional(v.string()),
  }).index("by_token", ["tokenIdentifier"]), // Index để tìm kiếm user nhanh hơn
  // 1. Bảng bài viết (Blogs/News)
  posts: defineTable({
    title: v.string(), // Tiêu đề bài viết
    slug: v.string(), // Đường dẫn thân thiện (ví dụ: 'bitcoin-vuot-nguong-100k')
    content: v.string(), // Nội dung bài viết (Markdown hoặc HTML)
    excerpt: v.string(), // Tóm tắt ngắn
    coverImageId: v.optional(v.id('_storage')), // Ảnh bìa bài viết
    category: v.string(), // Danh mục: 'News', 'Analysis', 'Tutorial'
    tags: v.array(v.string()), // Gắn thẻ: ['BTC', 'ETH', 'Layer2']
    authorId: v.string(), // ID người viết
    isPublished: v.boolean(), // Trạng thái xuất bản
  }).index('by_slug', ['slug']),

  // 2. Bảng Danh mục tiền điện tử (Để hiển thị giá hoặc thông tin nhanh)
  coins: defineTable({
    name: v.string(), // Ví dụ: Bitcoin
    symbol: v.string(), // Ví dụ: BTC
    logoId: v.optional(v.id('_storage')), // Logo của đồng coin
    coingeckoId: v.string(), // Để gọi API lấy giá thực tế
    description: v.string(),
  }).index('by_symbol', ['symbol']),

  // 3. Bảng Bình luận (Cực kỳ quan trọng cho tính tương tác)
  comments: defineTable({
    postId: v.id('posts'),
    authorName: v.string(),
    content: v.string(),
  }).index('by_post', ['postId']),
});
