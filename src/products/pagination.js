const Pagination = ({paginationSettongs, setPaginationSettings}) => {
    const {
        page_index,
        page_length,
        total_products_cnt
    } = paginationSettongs
    const onPgNumbers = (pg_length) => {
        const pg_index = Math.floor(page_index*page_length/pg_length)
        setPaginationSettings({
            ...paginationSettongs, 
            page_index:pg_index, 
            page_length:pg_length
        })
    }
    const onPgIndex = (pg_index) => {
        setPaginationSettings({...paginationSettongs, page_index:pg_index-1})
    }
    let pageination_txt = []//new Array(Math.ceil(total_products_cnt/page_length))
    for(let i = 0; i < Math.ceil(total_products_cnt/page_length); i++){
        pageination_txt.push(i+1)
    }
    return (
        <div id="products-pagination" className="pagination">
            <div className="paginate-btn-group">
                {
                    pageination_txt.map((x) => {
                        if(x === page_index+1)
                            return (
                                <button key = {"key-"+x} className="paginate-btn active" >{x}</button>
                            )
                        else 
                            return <button 
                                key = {"key-"+x}
                                id = {x}
                                className="paginate-btn" 
                                onClick = {(event)=> onPgIndex(event.target.id)}
                            >{x}</button>
                    })
                }
            </div>
            <div>
                <select className="paginate-length" onChange={(event)=>onPgNumbers(event.target.value)}>
                <option>10</option>
                <option>20</option>
                <option>30</option>
                </select>
            </div>
        </div>
    )
}

export default Pagination