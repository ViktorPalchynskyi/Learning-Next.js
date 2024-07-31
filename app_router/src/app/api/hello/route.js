export async function GET(req) {
    console.log(req);

    return new Response(JSON.stringify({ message: 'Hello world' }), {
        headers: {
            'Content-type': 'application/json',
        },
    });
}
