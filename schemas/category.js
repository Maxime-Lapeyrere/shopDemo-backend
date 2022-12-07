export default {
    name: 'category',
    type:'document',
    title:'Category',
    fields: [
        {
            name:'title',
            type:'string',
            title:'Title',
        },
        {
            name:'desc',
            type:'string',
            title:'Description',
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
            name:'bannerImg',
            type:'image',
            title:'Banner Img',
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