const cards =[
    {
        id:'card-1',
        title: 'Learning how to create card'
    },
    {
        id:'card-2',
        title: 'Learning to add a card'
    },
    {
        id:'card-3',
        title: 'Learning to init the card'
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