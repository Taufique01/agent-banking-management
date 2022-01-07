import React,{useMemo} from 'react'
import { useTable,useGlobalFilter,usePagination }  from 'react-table'
import customarlist from './../../dumpdata/customarlist.json'
import {customerColumnList} from './../tablesformat'
import './../styles/customerlist.css'

export const CustomarList = () => {
      const columns = useMemo(()=>customerColumnList,[])
      const data = useMemo(()=>customarlist,[])
      
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
        
         <input placeholder='search customer' value={globalFilter || ''} className="search-customer" 
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
