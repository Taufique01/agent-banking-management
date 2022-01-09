import React,{useMemo} from "react";
import AccountTableData from './AccountTableData.json'
import { useTable,useGlobalFilter,usePagination }  from 'react-table'

import  '../styles/accountsummary.css'


const  accountSummaryColumn= [
    {
     Header:'Id',
     accessor:'id'
    },    
    {
     Header:'Account Name',
     accessor:'account_name'

    },
    {
        Header:'Balance',
        accessor:'balance'
   }];
 
 


export  const AccountTable=()=>{
    const columns = useMemo(()=>accountSummaryColumn,[])
    const data = useMemo(()=>AccountTableData,[])
 
    const { 
      getTableProps
     ,getTableBodyProps,
      headerGroups,
      page, 
      nextPage,
      previousPage,
      prepareRow,
      pageOptions,
      state,
      setGlobalFilter,
     } = useTable({columns,data},useGlobalFilter,usePagination)
   
     const {pageIndex,globalFilter} =state

   
     return (
          <> 
            <div className="search-container">
              <div className="left-side">
               Account Summary
              </div>
               <input placeholder='search.....' value={globalFilter || ''} className="search-customer" 
               onChange={(e)=>setGlobalFilter(e.target.value)}
                />
            </div>

            <table {...getTableProps} className="account-summery-table" >

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
           <span>
            page{''}
             <strong>
              {pageIndex+1} of {pageOptions.length}
            </strong>
             page{''}
            </span>

           <button onClick={()=>previousPage()}>Pre page</button>
           <button onClick={()=>nextPage()}>Next page</button>
   </div>

        </>
    )
}