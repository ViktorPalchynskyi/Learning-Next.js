export default function UserPersonalPage({ params }) {
    const { id } = params;

    return (
        <div>
            <h1>Personal Page</h1>
            <p>Id: {id && id.join('/')}</p>
        </div>
    );
}
