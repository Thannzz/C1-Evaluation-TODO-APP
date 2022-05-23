import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

const Task = ({id,text,done,count}) => {
  
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">{text}</div>
      {/* Counter here */}
      <Counter />
      <button data-cy="task-remove-button">Remove</button>
    </li>
  );
};

export default Task;








//{data.map((item)=>{
  //return <GroceryItem key={item.id} {...item} />
//})}


// const GroceryItem = (props) => {
//   console.log(props)
//   const {title,imgURL,mrp,sellingPrice}=props
// return (
//   <div id='box'>
//       <img className='pics' src={imgURL} alt='pics'/>
//       <h4>{title}</h4>
//       <div><p>Price : {mrp}</p></div>
//       <div><p>Selling Price : {sellingPrice}</p></div>
//       <CartButton />
//   </div>
// )
// }
