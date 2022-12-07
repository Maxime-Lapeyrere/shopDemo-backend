export default {
    name: 'product',
    type:'document',
    title:'Product',
    fields: [
        {
            name:'title',
            type:'string',
            title:'Title',
            validation: Rule => Rule.required()
        },
        {
            name:'desc',
            type:'string',
            title:'Desc',
            validation: Rule => Rule.required()
        },
        {
            name:'img',
            type:'image',
            title:'Img',
            validation: Rule => Rule.required(),
            options:{
                hotspot: true,
                metadata: [
                    'blurhash',   // Default: included
                    'lqip',       // Default: included
                    'palette',    // Default: included
                    'exif',       // Default: not included
                    'location',   // Default: not included
                  ],
            }
        },
        {
            name:'img2',
            type:'image',
            title:'Img2',
            options:{
                hotspot: true,
                metadata: [
                    'blurhash',   // Default: included
                    'lqip',       // Default: included
                    'palette',    // Default: included
                    'exif',       // Default: not included
                    'location',   // Default: not included
                  ],
            }
        },
        {
            name:'price',
            type:'number',
            title:'Price',
            validation: Rule => Rule.required().positive().precision(2)
        },
        {
            name:'isNew',
            type:'boolean',
            title:'New Collection',
            initialValue:true,
            validation: Rule => Rule.required()
        },
        {
            name:"categories",
            type:"array",
            title:"Categories",
            of: [{type:'reference', to:{type:"category"}}]
        },
        {
            name: 'subCategories',
            title:'subCategories',
            type: 'array',
            of: [{type: 'reference', to:{type:'subCategory'}}]
        },
        {
            name: 'type',
            title:'Type',
            type: 'string',
            options: {
            list:[{title: 'Featured', value: 'featured'},{title: 'Trending', value: 'trending'},{title: 'Normal', value: 'normal'}]
            }
        },
        {
            name:"slug",
            type:"slug",
            title:"Slug",
            options:{
                source : "title",
                maxLength: 96,
            }
        },
    ]

}