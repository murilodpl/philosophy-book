import { useEffect, useState } from "react"
import Loading from "../components/Loading"

export default function Philosopher() {
    // Variables
    const [philosophers, setPhilosophers] = useState({})
    const [reset, setReset] = useState(false)

    // API Resquests
    useEffect(() => {
        const philosopherId = Math.ceil(Math.random() * 12) // The api has 12 philosophers
        fetch(`https://philosophyapi.herokuapp.com/api/philosophers/${philosopherId}`)
            .then(res => res.json())
            .then(data => {
                setPhilosophers(data)
            })
    }, [reset])

    // Console logs
    // console.log(philosophers)

    // Functions
    function resetPhilosopher() {
        setPhilosophers({})
        setReset(prevReset => !prevReset)
    }

    // Components population
    const loading = Object.keys(philosophers).length > 0
    const ideas = (philosophers.ideas) ? philosophers.ideas.map((idea, index) => <p key={index} className={`${(philosophers.ideas.length - 1) == index ? "" : "border-b border-gray-300 mb-2 pb-2 "}`}><q>{idea}</q></p>) : ""

    return (
        loading ?
            <section className="container my-8">
                <div className="pb-4 md:grid md:grid-cols-2">
                    <div className="mb-4 text-center">
                        <img className="mx-auto self-center rounded-xl max-h-[350px]" src={philosophers.photo} alt={philosophers.name} />
                        <button className="border text-bloodRed border-bloodRed transition-all px-4 py-1 mt-4 hover:bg-bloodRed hover:border-cgray hover:text-cgray hover:transition-all" onClick={resetPhilosopher}>Reset Philosopher</button>
                    </div>

                    <div className="text-secondary self-center">
                        <h2 className="text-primary font-bold text-lg mb-4">{philosophers.name} <small className="text-secondary">({philosophers.born_date} - {philosophers.death_date})</small></h2>
                        <p className="mb-2"><strong>Nationality:</strong> {philosophers.nationality}</p>
                        <p className="mb-2"><strong>Era:</strong> {philosophers.era}</p>

                        {(philosophers.school.length > 0) && <ul className="list-disc list-inside mb-2">
                            <strong>Schools:</strong>
                            {philosophers.school.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>}
                        {(philosophers.books.length > 0) && <ul className="list-disc list-inside">
                            <strong>Books:</strong>
                            {philosophers.books.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>}
                    </div>
                </div>

                {(ideas.length > 0) && <div className="text-secondary text-sm">
                    <fieldset className="border border-solid border-gray-300 p-3">
                        <legend className="font-bold">Ideas ({ideas.length})</legend>
                        {ideas}
                    </fieldset>
                </div>}
            </section>
            :
            <Loading />
    )
}