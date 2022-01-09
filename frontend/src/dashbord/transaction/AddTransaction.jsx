
import './../styles/transactionform.css'

// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' }
//   ]

export const AddTransaction = () => {
    return (
      <div className="transaction-form-container"> 
      
     <div className="header top">Add Customer</div>

        <div className ="deposit-form-content">   
        
          <div className="form-group">
              <input placeholder='Name'/>
              <input placeholder='Phone'/>
              <input placeholder='Address'/>
              <button type="submi"  className="add-customer-btn"> add customer</button>

          


        </div> 
      </div>

          <div className="header bottom">Add Transaction</div>
       
        
         <div className ="deposit-form-content">
      

           <div className="form-group">
             
              <select className="select" value="">
                <option value="">Customer Name</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>

          

        

         
             
              <select className="select">

              <option value="">Account</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
           

            <select class="select">
              <option value="">Receiving Account</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              
           

           
             
            <select class="select">
              <option value="">Paying  Account</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>

           <div className="form-group">
             <input placeholder='Amount'/>

           <input placeholder='Paid'/>

            <input placeholder='Due'/>

           <input  placeholder='note'/>

        </div>

        <button type="submit" >add transaction</button>
   
         
         </div>
      </div>
    );
  };