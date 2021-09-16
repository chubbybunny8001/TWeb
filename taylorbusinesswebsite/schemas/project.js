export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
        name: 'title',
        type: 'string',
    },
    {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'name',
            maxLength: 96,
        },
    },
    {
        name: 'date',
        type: 'datetime',
    },
    {
        name: 'place',
        type: 'string',
    },
    {
        name: 'description',
        type: 'text',
    },
    {
        name: 'projectType',
        title: 'Project Type',
        type: 'string',
        options: {
            list: [
                {value: 'personal', title: 'Personal'},
                {value: 'residential', title: 'Residential'},
                {value: 'commercial', title: 'Commercial'},
                ],
        },
    },
    ]
}