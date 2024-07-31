const users = [];

export async function GET(req) {
    return new Response(JSON.stringify(users), { headers: { 'Content-type': 'application/json' } });
}

export async function POST(req) {
    const body = await req.json();
    const user = { ...body, id: new Date().toISOString() }
    users.push(user);

    return new Response(JSON.stringify(user), { headers: { 'Content-Type': 'application/json' } });
}
