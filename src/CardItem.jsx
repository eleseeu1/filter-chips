export default function CardItem({title, tags}) {
    return (
        <div className="card">
            <h3>{title}</h3>
            {tags.map(tag=>{
                return <p key = {tag}>{tag}</p>
            })}
        </div>
    )
}