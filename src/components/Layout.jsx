import Navbar from "./Navbar";

export default function Layout({ children }) {

    return (
        <section className="md:mx-4 h-full flex">
            <Navbar />
            {children}
        </section>
    )
}