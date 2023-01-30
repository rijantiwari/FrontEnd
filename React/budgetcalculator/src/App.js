
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';
import { v4 as uuidv4 } from 'uuid';
import { useState,useEffect } from 'react';
// const initialExpenses=[
//     {id:uuidv4(),charge:"rent",amount:1500},
//     {id:uuidv4(),charge:"Car Payment",amount:500},
//     {id:uuidv4(),charge:"Credit Card Bill",amount:1200},
// ];

const initialExpenses= localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem("expenses")): [];
function App() {
    // ********************** state values *********************
    // all expenses, add expenses
    const[expenses, setExpenses]=useState(initialExpenses);
    // single expense 
    const [charge, setCharge] = useState('');
    // single amount 
    const [amount, setAmount] = useState('');
    // alert
    const[alert, setAlert] = useState({show:false})
    // edit 
    const [edit, setEdit] = useState(false);
    // edit item 
    const [id, setId] = useState(0);
 // ********************** UseEffect *********************
 useEffect(()=>{
  console.log("We called useeffect")
  localStorage.setItem('expenses',JSON.stringify(expenses));  
 },[expenses]);
 // ********************** Functionality *********************
//  handle charge
 const handleCharge= (e) =>{
     setCharge(e.target.value);
 }
//  handle amount
 const handleAmount= (e) =>{
     setAmount(e.target.value);
 }
//  handle alert
 const handleAlert = ({type, text}) => {
    setAlert({show:true,type, text});
    setTimeout(()=>{
        setAlert({show:false}); 
    },3000)
 }
//  handle submit
 const handleSubmit = e =>{
    e.preventDefault();
    if(charge !== '' && amount > 0){
        if(edit){
                let temExpenses = expenses.map((item)=>{
                    return item.id === id ?{...item, charge, amount} :item;
                });
                setExpenses(temExpenses);
                setEdit(false);
                 handleAlert({type:"success", text:"Item Edited"});   
        }
        else{
        const singleExpense = { id: uuidv4(), charge,amount};
        setExpenses([...expenses, singleExpense]);
        handleAlert({type:"success", text:"item added"});
        }
      
        setCharge('');
        setAmount(' ');
    }
    else{
        // handle alert called 
        handleAlert({type:"danger",text:`Charge can't be empty value and amount value has to be bigger than zero `})

    }
 }
//  Clear all items
const clearItems = () =>{
    setExpenses([]);
    handleAlert({type:"danger", text:" all item deleted"})
}
// handle Delete
const handleDelete = (id) => {
console.log(`item Deleted: ${id}`);
let temExpenses = expenses.filter((item)=>item.id !== id );
setExpenses(temExpenses);
handleAlert({type:"danger", text:"item deleted"})
}
// handle Edit
const handleEdit = (id) =>{
    let expense = expenses.find((item) => item.id === id );
    let{charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
}
    return (
        <>
        {alert.show  && <Alert type={alert.type} text={alert.text} /> }
        <h1> budget calculator</h1>
        <main className='App'>
            <ExpenseForm charge={charge} amount={amount} handleCharge={handleCharge}
            handleAmount={handleAmount} 
            handleSubmit={handleSubmit}
            edit= {edit}
            />
           <ExpenseList expenses={expenses} handleDelete={handleDelete} handleEdit={handleEdit} clearItems={clearItems}/>
        </main>
        <h1>
            total spending: <span className='total'>
                $ {expenses.reduce((acc,curr)=>{
                    return (acc += parseInt(curr.amount));
                },0)}
            </span>
        </h1>
        </>
        
    );
}

export default App;