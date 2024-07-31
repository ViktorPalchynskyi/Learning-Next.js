const users = [
    {
        name: 'Viktor',
        age: 26,
        id: '2024-07-31T13:26:49.950Z',
    },
    {
        name: 'Viktor',
        age: 26,
        id: '2024-07-31T13:26:50.581Z',
    },
    {
        name: 'Viktor',
        age: 26,
        id: '2024-07-31T13:26:51.190Z',
    },
];

export async function GET(req, { params }) {
    const user = users.find((user) => user.id === params.id);

    if (user) {
        return new Response(JSON.stringify(user), { headers: { 'Content-Type': 'application/json' } });
    }
}

export async function DELETE(req, { params }) {
    users.filter((user) => user.id === params.id);

    return new Response('User deleted');
}
