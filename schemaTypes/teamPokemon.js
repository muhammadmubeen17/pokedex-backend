import { defineType, defineField } from 'sanity'

export const teamPokemon = defineType({
  type: "object",
  name: "teamPokemon",
  fields: [
    defineField({
      type: "reference",
      name: "pokemon",
      to: [{ type: "pokemon" }],
    }),
    defineField({
      type: "string",
      name: "nickname",
    }),
    defineField({
      type: "number",
      name: "level",
    }),
  ],
});

