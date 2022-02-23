import Loading from './Loading'

export default function SearchContent(props) {
    const searchElements = props.data.results.map(item =>
        <fieldset key={item.id} className="border border-solid border-gray-300 mb-4  p-3">
            <legend className='font-bold'>{item.author}</legend>
            <p>{item.quote}</p>
        </fieldset>
    )

    return (
        <div>
            <div className="text-secondary text-sm">
                <fieldset className="border border-solid border-gray-300 p-3">
                    <legend className="font-bold text-base">
                        {
                            (props.data.count > 0) ? `Search result: (${props.data.count})` : "No result"
                        }
                    </legend>
                    
                    {
                        (searchElements.length > 0) &&
                        <div>
                            {searchElements}
                            <div className='flex justify-between items-center my-4'>
                                <button disabled={props.data.previous === null} onClick={props.previousPage} className='btn-bloodRed text-xs md:text-sm px-2'>Previous Page</button>
                                <span className='font-bold text-xs md:text-sm'>{`Page: ${props.currentPage} / ${Math.ceil(props.data.count / 15)}`}</span>
                                <button disabled={props.data.next === null} onClick={props.nextPage} className='btn-bloodRed text-xs md:text-sm px-2'>Next Page</button>
                            </div>
                        </div>
                    }
                </fieldset>
            </div>
        </div>
    )
}