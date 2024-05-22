import { defineType, defineField, defineArrayMember } from 'sanity'

export const team = defineType({
  type: "document",
  name: "team",
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
      type: "text",
      name: "description",
    }),
    defineField({
      type: "image",
      name: "image",
      options: { hotspot: true },
    }),
    defineField({
      type: "array",
      name: "pokemons",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "pokemon" }],
        }),
      ],
    }),
  ],
});

