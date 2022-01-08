import React,{useMemo} from "react";
import TransactionData from './transactiondata.json'
import { useTable,useGlobalFilter,usePagination }  from 'react-table'
import  '../styles/accountsummary.css'


const  transactionTableColumn= [
    {
     Header:'Id',
     accessor:'id'
    },    
    {
     Header:'Customar Name',
     accessor:'customar_name'

    },
    {
        Header:'Trasnsaction Type',
        accessor:'transaction_type'
   },
   {
    Header:'Receiving',
    accessor:'receiving_account'},
    {
    Header:'Paying Acoount',
    accessor:'paying_account'},
    {
        Header:'Ammount',
        accessor:'ammount'},
     {
     Header:'Pay',
    accessor:'pay'},
    {
        Header:'Due',
       accessor:'due'}
     
       
    


];
 
 

export  const  TransactionTable=()=> {

    const columns = useMemo(()=>transactionTableColumn,[])
      const data = useMemo(()=>TransactionData,[])
      
const { 
  getTableProps
  ,getTableBodyProps,
   headerGroups,
   page, 
   nextPage,
   previousPage,
   prepareRow,
   state,
   setGlobalFilter,
  } = useTable({columns,data},useGlobalFilter,usePagination)

  const {globalFilter} =state
    
     
    return (
        <>
         <div className="search-container">
          <div className="left-side">
            Transaction Table
          </div>
         <input placeholder='search ...' value={globalFilter || ''} className="search-customer" 
           onChange={(e)=>setGlobalFilter(e.target.value)}
         />

         </div>

        <table {...getTableProps()} className='customer-list-table'>
            <thead className="header">
               {
       headerGroups.map(headerGroup => (
       
        <tr {...headerGroup.getHeaderGroupProps()}>
          {
          headerGroup.headers.map(column => (
            
            <th {...column.getHeaderProps()}>
              {
              column.render('Header')}
            </th>
          ))}
          <th>Actions</th>
        </tr>
      ))}
            </thead>

            <tbody {...getTableBodyProps()} className="table-body">
       {
       page.map(row => {
         
         prepareRow(row)
         return (
          
           <tr {...row.getRowProps()}>
             {
             row.cells.map(cell => {
                  return (
                 <td {...cell.getCellProps()}>
                  
                    {(cell.render('Cell'))}
                 </td>
               )
             })
             
             
             }

             <td><i class='bx bx-edit-alt'></i></td>
           </tr>
         )
       })}
     </tbody>
        </table>
        <div className="pagination-btn">
          <button onClick={()=>previousPage()}>Pre page</button>
          <button onClick={()=>nextPage()}>Next page</button>
        </div>
        </>
    )
}