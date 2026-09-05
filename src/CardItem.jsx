export default function CardItem({title, tags}) {
    return (
        <>
            <h3>{title}</h3>
            {tags.map(tag=>{
                return <p key={tag}>{tag}</p>
            })}
        </>
    )
}
