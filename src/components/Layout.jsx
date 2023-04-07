import Navbar from "./Navbar";

export default function Layout({ children }) {

    return (
        <section className="md:mx-4 h-full flex flex-col">
            <Navbar />
            <div className="mt-[20px]">{children}</div>
        </section>
    )
}