export default function BlogPost({ params }) {
    const { id } = params;

    return (
        <div>
            <h2>Blog Post {id}</h2>
            <p>This is the content of the blog post with ID {id}.</p>
        </div>
    );
}
