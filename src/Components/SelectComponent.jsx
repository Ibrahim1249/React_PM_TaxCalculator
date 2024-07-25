function SelectComponent({setCountryCurrency}) {
  return (
    <>
      <div className="select-container">
        <div className="first-select">
          <label for="financialYear">Financial year</label>
          <select name="financialYear" id="financialYear">
            <option value="FY 2023-24">FY 2023-24</option>
          </select>
        </div>
        <div className="second-select">
          <label for="country">Country</label>
          <select name="country" id="country" onChange={(e)=>{setCountryCurrency(e.target.value)}}>
            <option value="$">Australia</option>
            <option value="₹">India</option>
            <option value="$">UK</option>
          </select>
        </div>
      </div>
    
    </>
  );
}

export default SelectComponent;
