import "../app.css"
import ComponentD from "./componentD"
export default function ComponentC(props){
    return (
         <div className="m-5 p-5 border">Hello sudarshan
            <ComponentD user={props.user}/>
         </div>
    )
}