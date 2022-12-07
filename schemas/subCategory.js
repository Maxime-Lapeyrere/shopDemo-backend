export default {
    name: 'subCategory',
    type:'document',
    title:'SubCategory',
    fields: [
        {
            name:'title',
            type:'string',
            title:'Title',
        },
        {
            name: 'category',
            title:'Categories',
            type: 'array',
            of: [{type: 'reference', to:{type:'category'}}]
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