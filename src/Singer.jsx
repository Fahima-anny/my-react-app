export default function Singer({details}){
    return (
        <ul>
            <li>Name: {details.name}</li>
            <li>Age: {details.age}</li>
        </ul>
    )
}