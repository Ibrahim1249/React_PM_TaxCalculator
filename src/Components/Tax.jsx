import SelectComponent from "./SelectComponent"
import SVG_Tax from "./SVG_Tax"
import ViewComponent from "./ViewComponent"

function Tax({countryCurrency , setCountryCurrency}) {
  return (
    <>
      <div className="tax">
      <div className="tax-container">
         <div className="main-container">
             <h1>Free Crypto Tax Calculator Australia</h1>
             <SelectComponent setCountryCurrency={setCountryCurrency}/>
             <hr />
             <ViewComponent countryCurrency={countryCurrency} />
         </div>
      </div>
       <SVG_Tax />
      </div>
    </>
  )
}

export default Tax