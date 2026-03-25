import { useContext, createContext } from "react";

const themeContext = createContext(null);

export default function myApp() {
  return (
    <themeContext value="dark">
      <Form />
    </themeContext>
  );
}

function Form() {
  return (
    <Panel title="welcome">
      <Button>Signup</Button>
      <Button>Login</Button>
    </Panel>
  );
}


function Panel({title,children}){
    const theme=useContext(themeContext)
    const className='panel-'+theme
    return(
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}


function Button({children}){
    const theme=useContext(themeContext)
    const className='button-'+theme

    return (
        <button className={className}>{children}</button>
    )
}