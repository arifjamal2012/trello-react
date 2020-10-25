const cards =[
    {
        id:'card-1',
        content: 'Learning how to create card'
    },
    {
        id:'card-2',
        content: 'Learning how to create card'
    },
    {
        id:'card-3',
        content: 'Learning how to create card'
    },
];

const data = {
    lists: {
        'list-1': {
            id: 'list-1',
            title: 'Todo',
            cards,
        },
    },
    listIds: ['list-1']
};

export default data;