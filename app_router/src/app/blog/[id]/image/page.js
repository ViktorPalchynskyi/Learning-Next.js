export default function BlogImagePage({ params }) {
    const { id } = params;

    return (
        <div>
            <h1>Image for blog number {id}</h1>
        </div>
    );
}
