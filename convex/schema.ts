import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    userId: v.string(), //clerk id
    email: v.string(),
    name: v.string(),
    isPro: v.boolean(),
    proStartDate: v.optional(v.number()),
    lemonSqueezyCustomerId: v.optional(v.string()),
    lemonSqueezyOrderId: v.optional(v.string()),
  }).index("by_user_id", ["userId"]),

  codeExecutions: defineTable({
    userId: v.string(),
    language: v.string(),
    code: v.string(),
    output: v.optional(v.string()),
    error: v.optional(v.string()),
  }).index("by_user_id", ["userId"]),

  snippets: defineTable({
    snippetID: v.id("snippets"),
    userName: v.string(), // user name for easy access
    title: v.string(),
    language: v.string(),
    code: v.string(),
  }).index("by_snippet_id", ["snippetID"]),

  comments: defineTable({
    snippedId: v.id("snippets"),
    userId: v.string(),
    userName: v.string(),
    content: v.string(),
  }).index("by_snippet_id", ["snippedId"]),

  stars: defineTable({
    userId: v.id("users"),
    snippetId: v.id("snippets"),
  })
    .index("by_user_id", ["userId"])
    .index("by_snippet_id", ["snippetId"])
    .index("by_user_id_and_snippet_id", ["userId", "snippetId"]),
});
