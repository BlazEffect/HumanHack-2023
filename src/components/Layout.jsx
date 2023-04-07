import Navbar from "./Navbar";

export default function Layout({ children }) {

    return (
        <section className="xs:mx-4 xs:min-h-screen flex">
            <Navbar />
            {children}
        </section>
    )
}