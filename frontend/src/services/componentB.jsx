import "../app.css"
import ComponentC from "./componentC"

export default function ComponentB(props){
    return (
         <div className="m-20 p-20 border">Hello sudarshan
          <ComponentC user={props.user}/>
                    
         </div>
    )
}