
// original way 
// export default function Todo({id,task}){
//     return (
//        <ul>
//          <li>Task:{id}    Name:{task}</li>
//        </ul>
//     )
// }


// if else condition 
// export default function Todo({isDone,task}){
// if(isDone === 'true'){
//     return ( 
//         <li>Completed: {task}</li>
//     )
// }
//     else{
//         return (
//         <li>In progress: {task}</li>
//         )
//     }
// }


// ternary operator 
// export default function Todo({task,isDone}){
//         return (
//         <li> {isDone ? 'Completed' : 'In progress' }: {task}</li>
//         )
//     }


// conditional &&
// export default function Todo({isDone,task}){
//     return (
//        <ul>
//          <li>Name:{task} {isDone && 'done'}</li>
//        </ul>
//     )
// }


// conditional || 
// export default function Todo({isDone,task}){
//     return (
//        <ul>
//          <li>Name:{task} {isDone || 'do it'}</li>
//        </ul>
//     )
// }


// with variable 
export default function Todo({isDone,task}){
let listItem ;
if(isDone){
    listItem = <li> {task}: Done </li>
}
else{
    listItem = <li> {task}: Not Done </li>
}
return listItem ;
}
