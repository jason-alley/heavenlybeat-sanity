/* Schema for hero content */
export default {
    name: 'hero',
    type: 'document',
    title: 'Hero',
    fields: [
        {
            name: 'phrase',
            type: 'string',
            title: 'CTA Phrase'
        },
        {
            name: 'content',
            type: 'string',
            title: 'Content'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Hero Image'
        }     
    ]
}