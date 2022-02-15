export default function Philosopher(props) {
    const loading = Object.keys(props.data).length > 0

    return (
        loading ? 
        <div className="pb-4 md:grid md:grid-cols-2">
            <img className="mx-auto self-center mb-4 rounded-xl max-h-[350px]" src={props.data.photo} alt={props.data.name} />

            <div className="text-secondary self-center">
                <h2 className="text-primary font-bold text-lg mb-4">{props.data.name} <small className="text-secondary">({props.data.born_date} - {props.data.death_date})</small></h2>
                <p className="mb-2"><strong>Nationality:</strong> {props.data.nationality}</p>
                <p className="mb-2"><strong>Era:</strong> {props.data.era}</p>
                
                {(props.data.school.length > 0) && <ul className="list-disc list-inside mb-2">
                    <strong>Schools:</strong>
                    {props.data.school.map((item, index) => <li key={index}>{item}</li>)}
                </ul>}
                {(props.data.books.length > 0) && <ul className="list-disc list-inside">
                    <strong>Books:</strong>
                    {props.data.books.map((item, index) => <li key={index}>{item}</li>)}
                </ul>}
            </div>
        </div>
            : 
            <div className="text-center"><h2>Loading</h2></div>
    )
}