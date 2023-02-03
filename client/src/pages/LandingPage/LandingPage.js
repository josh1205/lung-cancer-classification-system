import { LandingPageLayout } from "../../layouts/LandingPageLayout/LandingPageLayout";
import { Banner } from "./components/Banner";
import { Impact } from "./components/Impact";
import { Projects } from "./components/Projects";

export const LandingPage = () => {
    return (
        <LandingPageLayout>
            <Banner />
            <Impact />
            <Projects />
        </LandingPageLayout>
    )

}