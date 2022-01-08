import Select from 'react-select';
import './../styles/transactionform.css'
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

export const AddTransaction = () => {
    return (
      <div className="transaction-form-container"> 
      
         
          <div className="add-btn"><button>+Add Customer</button></div>
         
          <div className="header">Add Transaction</div>
         <div className ="deposit-form-content">
      

           <div className="form-group">
              <label for="Customar Name">Customar Name:</label>
              <select class="select">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
            </div>

        

           <div className="form-group">
              <label for="Account">Account:</label>
              <select class="select"></select>
            </div>

           


            <div className="form-group">
              <label for="Account">Transaction Type:</label>
              <select class="select"/>
            </div>

            <div className="form-group">
              <label for="Account">Receiveing Account:</label>
              <select class="select"></select>
            </div>

            <div className="form-group">
              <label for="Account">Paying  Account::</label>
              <select class="select"></select>
            </div>

           <div className="form-group">
              <label for="ammount">Ammount:</label>
              <input/>
           </div>

           <div className="form-group">
              <label for="email">Pay:</label>
              <input/>
           </div>

           <div className="form-group">
              <label for="email">Due:</label>
              <input/>
           </div>

           <div className="form-group">
              <label for="Account">Note:</label>
              <textarea cols="43" rows="5"/>
            </div>

          

            <button type="submit" >Add Deposit</button>
   
         
         </div>
      </div>
    );
  };