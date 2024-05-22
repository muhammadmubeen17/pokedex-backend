import { defineType, defineField } from 'sanity'

export const pokemonType = defineType({
  type: "document",
  name: "pokemonType",
  fields: [
    defineField({
      type: "string",
      name: "name",
    }),
    defineField({
      type: "slug",
      name: "slug",
      options: { source: "name" },
    }),
    defineField({
      type: "image",
      name: "image",
      options: { hotspot: true },
    }),
    // defineField({
    //   type: "text",
    //   name: "description",
    // }),
    defineField({
      type: "string",
      name: "color",
    }),
  ],
});

