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
                    <legend className="font-bold text-base">{(props.data.count > 0) ? `Search result: (${props.data.count})` : "No result"}</legend>

                    {
                        (searchElements.length > 0) &&
                        searchElements
                    }
                </fieldset>
            </div>
        </div>
    )
}