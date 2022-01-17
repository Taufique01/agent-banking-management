import React,{useMemo} from 'react'
import CostData from './cost.json'
import { useTable,useGlobalFilter,usePagination }  from 'react-table'
import './../styles/cost.css'

const  costTableColumn= [
    {
     Header:'Date',
     accessor:'date'
    },    
    {
     Header:'Account Name',
     accessor:'customer_name'

    },
    {
        Header:'Amount',
        accessor:'ammount'
   },
   {
    Header:'Note',
    accessor:'note'
}

];
 
export function Cost() {


    const columns = useMemo(()=>costTableColumn,[])
    const data = useMemo(()=>CostData,[])
 
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
        <div className="cost-container">
           <div className="cost-form">
             <div className="form-group">
               <select className="select" value="">
                <option value="">Account</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
               </select>
             
                <input name="note"  placeholder='note'/>
            
                <input name="amount"  placeholder='amount'/>

                <button>Add Cost</button>
              </div>

             </div>



           
           <div className="cost-table">
           <div className="search-container">
             
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
           </div>
           

        </div>
    )
}
