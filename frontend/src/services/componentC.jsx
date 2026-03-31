import "../app.css"
import ComponentD from "./componentD"
export default function ComponentC(props){
    return (
         <div className="m-20 p-20 border">Hello sudarshan
            <ComponentD user={props.user}/>
         </div>
    )
}