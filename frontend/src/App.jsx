import HeaderTemplate from "./components/header";
import Header from "./components/navigation";
import SignPage from "./pages/signup";
import LoginPage from "./pages/login";
import ListCategory from "./components/listCategory";

export default function DataHandler(){
    return(
        <>
          <HeaderTemplate/>
          <Header/>
          <SignPage/>
          <LoginPage/>
          <listCategory/>
          {/* <SignPage/>
          <LoginPage/> */}

        </>
    )

}
