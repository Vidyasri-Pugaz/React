import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

function Layout(){
    return(
        <>
        <Header />
        <section>
            <Outlet />
        </section>
        <Footer />
        </>
    );
}

export default Layout;              