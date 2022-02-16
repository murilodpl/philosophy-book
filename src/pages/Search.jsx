import { useEffect, useState } from "react"
import SearchContent from "../components/SearchContent"

export default function Search() {
    // Variables
    const [search, setSearch] = useState("")
    const [dataSearch, setDataSearch] = useState({
        count: 0,
        urlApi: null,
        results: []
    })

    // API Resquests
    useEffect(() => {
        fetch(`http://philosophyapi.herokuapp.com/api/ideas/?search=${search}`)
            .then(res => res.json())
            .then(data => setDataSearch((prevData) => ({
                count: search != "" ? data.count : 0,
                urlApi: data.next,
                results: search != "" ? [
                    ...data.results
                ] : []
            })))

        return () => {
            setDataSearch(prevData => ({ ...prevData, urlApi: null }))
        }
    }, [search])

    // Functions
    function handleChange(e) {
        const { value } = e.target
        setSearch(value)
    }

    // Console logs
    console.log(dataSearch)

    return (
        <section className="container my-8">
            <div className="mb-8">
                <label className="text-primary font-bold mb-2 block" htmlFor="searchWhat">Search for something:</label>
                <input className="w-full" type="text" id="searchWhat" onChange={handleChange} value={search} name="searchWhat" />
            </div>

            <SearchContent data={dataSearch} />
        </section>
    )
}