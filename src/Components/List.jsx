

function List ({lists}){

    return (
        <>
        <ul>
            {lists.map((list, key)=>{
                return (
                    <li key={list}>{list}</li>      
                )
            })}
        </ul>
        </>
    )
}

export default List