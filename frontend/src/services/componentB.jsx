import "../app.css"
import ComponentC from "./componentC"

export default function ComponentB(props){
    return (
         <div className="m-5 p-5 border">Hello sudarshan
          <ComponentC user={props.user}/>
                    
         </div>
    )
}