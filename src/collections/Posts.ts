import { CollectionConfig } from "payload/types";

const Posts:CollectionConfig = {
    slug: 'posts',
  labels: {
    singular: 'Post',
    plural: 'Posts',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
    },
    // Add more fields as needed
  ],

}

export default Posts;