import './book.css'
export default function BookStore({data}){
    // console.log(data)
return (
    <div className="book">
   <li> Book Name = {data.name} </li>
   <li> Book Price = {data.price} </li>
    </div>
)
}