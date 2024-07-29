export default function ArchiveLayout({ archive, latest }) {
    console.log(latest);
    return <div>
        <h1>New Archive</h1>
        <section>{archive}</section>
        <hr/>
        <section>{latest}</section>
    </div>
}
