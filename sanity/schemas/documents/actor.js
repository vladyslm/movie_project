const actor = {
    title: "Actor",
    name: "actor",
    type: "document",
    fields: [
        {
            title: "Full Name",
            name: "full_name",
            type: "string"
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            description: "unique actor's url",
            validation: (Rule) => Rule.required(),
            options: {
                source: "full_name",
                maxLength: 96
            }
        }
    ]
}

export default actor;
