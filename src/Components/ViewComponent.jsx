import React, { useEffect } from "react";
import { useState } from "react";
import { IoCheckmarkSharp } from 'react-icons/io5';
function ViewComponent({countryCurrency }) {
  const [shortTerm, setShortTerm] = useState(false);
  const [taxRates , setTaxRates] = useState("0%");
  const [purchasePrice , setPurchasePrice] = useState(0);
  const [salePrice , setSalePrice] = useState(0);
  const [expensePrice , setExpensePrice] = useState(0);
  const [annualIncome , setAnnualIncome] = useState(0);
  const [capitalGains , setCapitalGains] = useState(0);
  const [discountCapitalGains, setDiscountCapitalGains] = useState(0);
  const [netGains, setNetGains] = useState();
  const [tax, setTax] = useState();



  const handleTaxRate = (value)=>{
   setAnnualIncome(value)
   if(value === "0"){
     setTaxRates("0%");
   }else if(value === "19"){
    setTaxRates(`Nil + 19% of excess over ${countryCurrency}18,200`)
   }else if(value === "32.5"){
      setTaxRates(`${countryCurrency}5,092 + 32.5% of excess over ${countryCurrency}45,000`)
   }else if(value === "37"){
    setTaxRates(`${countryCurrency}29,467 + 37% of excess over ${countryCurrency}120,000`)
   }else if(value === "45"){
    setTaxRates(`${countryCurrency}51,667 + 45% of excess over ${countryCurrency}180,000`)
   }

  }

  const getPurchasePrice = (e) => {
    let value = e.target.value;
    if(value < 1){
        value = 0;
    }
    setPurchasePrice(value);
  }
  const getSalesPrice = (e)=> {
    let value = e.target.value;
    if(value < 1){
        value = 0;
    }
    setSalePrice(value);
  }
  const getExpenses = (e)=> {
    let value = e.target.value;
    if(value < 1){
        value = 0;
    }
    setExpensePrice(value);
  }

  useEffect(()=>{
    let gain = salePrice - purchasePrice - expensePrice;
    setCapitalGains(gain);
    let discount;
    if (gain > 0) {
      discount = (gain * 50) / 100;
      setDiscountCapitalGains(discount);
    }
    if (!shortTerm) {
      let netGain = gain - discount;
      setNetGains(netGain);
    } else {
      setNetGains(gain);
    }

    let tax = (gain * parseFloat(annualIncome)) / 100;
    setTax(tax);

  },[salePrice , annualIncome , expensePrice , purchasePrice , shortTerm])



  return (
    <>
      <div className="view-container">

        <div className="left">
          <div className="left-div">
            <label>Enter purchase price of Crypto</label>
            <div className="input-div">
              <span>{countryCurrency}</span>
              <input
                class="currency-input"
                type="number"
                name="purchase"
                id="purchase"
                placeholder="Enter Amount"
                value={purchasePrice}
                onChange={getPurchasePrice}
              />
            </div>
          </div>
          <div className="left-div">
            <label>Enter your Expenses</label>
            <div className="input-div">
              <span>{countryCurrency}</span>
              <input
                class="currency-input"
                type="number"
                name="purchase"
                id="purchase"
                placeholder="Enter Amount"
                value={expensePrice}
                onChange={getExpenses}
              />
            </div>
          </div>
          <div className="left-div">
            <label>Select Your Annual Income</label>
            <div className="input-div-3">
              {/* <span></span> */}
              <select id="annualIncome" onChange={(e)=>{handleTaxRate(e.target.value)}}>
                <option value="0">0 - $ 18,200</option>
                <option value="19">$ 18,201 - $ 45,000</option>
                <option value="32.5">$ 45,001 - $ 120,000</option>
                <option value="37">$ 120,001 - $ 180,000</option>
                <option value="45">$ 180,001+</option>
              </select>
            </div>
          </div>
          <div className={shortTerm ? `hidden` : `left-div`}>
            <label>Capital gains amount</label>
            <div className="input-div">
              <span>{countryCurrency}</span>
              <input
                class="currency-input"
                type="number"
                name="purchase"
                id="purchase"
                placeholder="Enter Amount"
                readOnly
                value={capitalGains}
              />
            </div>
          </div>
          <div class="result-box">
            <p class="result-title">Net Capital gains tax amount</p>
            <p class="result-value">{countryCurrency} {netGains}</p>
          </div>
        </div>

        <div className="right">
          <div className="right-div">
            <label>Enter sale price of Crypto</label>
            <div className="input-div">
              <span>{countryCurrency}</span>
              <input
                class="currency-input"
                type="number"
                name="purchase"
                id="purchase"
                placeholder="Enter Amount"
                value={salePrice}
                onChange={getSalesPrice}
              />
            </div>
          </div>
          <div className="right-div">
            <label>Investment Type</label>
            <div className="button-container">
              <div className="button-wrapper">
                <button
                  className={`investment-button ${shortTerm ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setShortTerm(true);
                  }}
                >
                  Short Term{" "}
                  <IoCheckmarkSharp
                    className={`checkmark ${shortTerm ? "visible" : "hidden"}`}
                  />
                </button>
                <span className="duration-text">&lt;12 months</span>
              </div>
              <div className="button-wrapper">
                <button
                  className={`investment-button ${!shortTerm ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setShortTerm(false);
                  }}
                >
                  Long Term{" "}
                  <IoCheckmarkSharp
                    className={`checkmark ${!shortTerm ? "visible" : "hidden"}`}
                  />
                </button>
                <span className="duration-text">&gt;12 months</span>
              </div>
            </div>
          </div>

          <div className="right-div-2">
            <label>Tax Rate</label>
             <span>{taxRates}</span>
          </div>

          <div className={shortTerm ? `hidden` : `right-div`}>
            <label>Discount for long term gains</label>
            <div className="input-div">
              <span>{countryCurrency}</span>
              <input
                class="currency-input"
                type="number"
                name="purchase"
                id="purchase"
                placeholder="Enter Amount"
                readOnly
                value={discountCapitalGains}
              />
            </div>
          </div>

          <div class="right-result-box">
            <p class="result-title">The tax you need to pay*</p>
            <p class="right-result-value">{`${countryCurrency} ${tax}`}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewComponent;
