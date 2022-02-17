import { useEffect, useState } from "react"
import SearchContent from "../components/SearchContent"

export default function Search() {
    // Variables
    const [search, setSearch] = useState("life")
    const [dataSearch, setDataSearch] = useState({
        count: 0,
        results: []
    })

    // API Resquests
    useEffect(() => {
        let isTyping = false;

        const fetchMetaData = async () => {
            setDataSearch({
                count: 0,
                results: []
            })
            let allData = [];
            let count;
            let morePagesAvailable = true;
            let currentPage = 0;

            while (morePagesAvailable) {
                currentPage++;
                const response = await fetch(`http://philosophyapi.herokuapp.com/api/ideas/?search=${search}&page=${currentPage}`)
                let data = await response.json();
                count = data.count
                data.results.forEach(e => allData.unshift(e));
                morePagesAvailable = data.next !== null;
            }

            if (!isTyping) {
                setDataSearch(prevData => ({
                    count: count,
                    results: [...allData]
                }));
            }
        }

        fetchMetaData()
            .catch(console.error);

        // Callback function
        return () => isTyping = true;
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
            {/* Do a loading */}
        </section>
    )
}