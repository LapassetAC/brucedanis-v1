export default {
  name: 'product',
  title: 'Illustrations',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: "URL de la page de l'illustration",
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
    },
    {
      name: 'mainImage',
      title: 'Illustration principale',
      description: "Image de l'illustration visible sur la page d'accueil",
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
  ],
}
