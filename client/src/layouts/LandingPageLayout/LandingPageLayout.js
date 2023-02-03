// Components
import { NavBar } from "./components/NavBar"
import { Footer } from "./components/Footer"

export const LandingPageLayout = ({children}) => {
    return (
        <>
            <NavBar />
                {children}
            <Footer />
        </>
    )

}