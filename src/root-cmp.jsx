import { AppHeader } from "./cmps/app-header"
import { AppFooter } from "./cmps/app-footer"
import { HomePage} from "./pages/home-page"

export function RootCmp() {

    return (
        <div className="app-container base-layout">
            <AppHeader />
            <main className="">
                <HomePage />
            </main>
            <AppFooter />
        </div>
    )
}