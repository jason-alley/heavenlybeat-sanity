/* Schema for services content */
export default {
    name: 'services',
    type: 'document',
    title: 'Services',
    fields: [
        {
            name: 'service',
            type: 'string',
            title: 'Service Title'
        },
        {
            name: 'description',
            type: 'string',
            title: 'description'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Service Image'
        },
        {
            name: 'price',
            type: 'string',
            title: 'Price'
        },
        {
            name: 'duration',
            type: 'string',
            title: 'Duration'
        }
    ]
}