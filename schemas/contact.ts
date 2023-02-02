/* Schema for services content */
export default {
    name: 'contact-section',
    type: 'document',
    title: 'Contact Section',
    fields: [
        {
            name: 'phrase',
            type: 'string',
            title: 'Contact Phrase'
        },
        {
            name: 'email',
            type: 'string',
            title: 'Contact Email'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Contact Image'
        },
    ]
}