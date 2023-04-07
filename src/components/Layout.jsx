import Navbar from "./Navbar";

export default function Layout({ children }) {

    return (
        <section className="mx-4 min-h-screen flex">
            <Navbar />
            {children}
        </section>
    )
}