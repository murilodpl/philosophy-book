import { useEffect, useState } from "react"
import SearchContent from "../components/SearchContent"

export default function Search() {
    // Variables
    const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [dataSearch, setDataSearch] = useState({
        count: 0,
        results: []
    })

    // API Resquests
    useEffect(() => {
        setDataSearch({
            count: 0,
            results: []
        })

        fetch(`http://philosophyapi.herokuapp.com/api/ideas/?search=${search}&page=${currentPage}`)
            .then(res => res.json())
            .then(data => setDataSearch((prevData) => ({
                count: search != "" ? data.count : 0,
                previous: data.previous,
                next: data.next,
                results: search != "" ? [
                    ...data.results
                ] : []
            })))
    }, [search, currentPage])

    // Functions
    function handleChange(e) {
        const { value } = e.target
        setCurrentPage(1)
        setSearch(value)
    }

    function nextPage() {
        setCurrentPage(prevCP => prevCP + 1)
    }
    function previousPage() {
        setCurrentPage(prevCP => prevCP - 1)
    }

    // Console logs
    console.log(dataSearch)

    return (
        <section className="container my-8">
            <div className="mb-8">
                <label className="text-primary font-bold mb-2 block" htmlFor="searchWhat">Search for something:</label>
                <input className="w-full" type="text" id="searchWhat" onChange={handleChange} value={search} name="searchWhat" />
            </div>

            <SearchContent data={dataSearch} currentPage={currentPage} nextPage={nextPage} previousPage={previousPage} />
        </section>
    )
}