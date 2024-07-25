import Accordion from "./AccordionComponent";
import { FAQ_DATA }from "./QNA"

function FAQ({}) {

  return (
    <>
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
         {FAQ_DATA && FAQ_DATA.map((data,index)=>{
            return <Accordion data={data} key={index}/>
         })}
      </div>
    </>
  );
}

export default FAQ;
