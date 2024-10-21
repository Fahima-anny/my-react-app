import BookStore from "./BookStore.jsx";

export default function Book({data}){
    console.log(data[0])
return (
<div>
<li>Total Books = {data.length}</li>
{
data.map(book => <BookStore data={book}></BookStore>)
}
</div>

)
}