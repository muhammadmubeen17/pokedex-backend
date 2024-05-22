import { defineType, defineField, defineArrayMember } from 'sanity'

export const pokemon = defineType({
  type: "document",
  name: "pokemon",
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
      type: "number",
      name: "rank",
      title: "Rank",
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block'
        }
      ]
    }),
    defineField({
      type: "image",
      name: "image",
      options: { hotspot: true },
    }),
    defineField({
      type: "array",
      name: "types",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "pokemonType" }],
        }),
      ],
    }),
    defineField({
      type: "object",
      name: "stats",
      fields: [
        defineField({
          type: "number",
          name: "hp",
        }),
        defineField({
          type: "number",
          name: "attack",
        }),
        defineField({
          type: "number",
          name: "defense",
        }),
        defineField({
          type: "number",
          name: "specialAttack",
        }),
        defineField({
          type: "number",
          name: "specialDefense",
        }),
        defineField({
          type: "number",
          name: "speed",
        }),
      ],
    }),
    defineField({
      type: "array",
      name: "evolutions",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "pokemon" }],
        }),
      ],
    }),
  ],
});

