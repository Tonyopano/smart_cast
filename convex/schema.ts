import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { View } from "lucide-react";

export default defineSchema({
    podcasts: defineTable({
        audioStorageId: v.optional(v.id('_storage')),
        user: v.id('users'),
        podcastDescription: v.string(),
        audioUrl: v.optional(v.string()),
        imageUrl: v.optional(v.string()),
        imageStorageId: v.optional(v.string()),
        author: v.string(),
        authorId: v.string(),
        authorImageUrl: v.string(),
        voiceprompt: v.string(),
        imageprompt: v.string(),
        voiceType: v.string(),
        audioDuration: v.number(),
        views: v.number(),
    })
        .searchIndex('search_author', {searchField: 'author' })
        .searchIndex('search_title', {searchField: 'podcastTitle' })
        .searchIndex('search_body', {searchField: 'podcastDescription' }),
    users: defineTable({
        email: v.string(),
        imageUrl: v.string(),
        clerkId: v.string(),
        name: v.string(),
    })
})