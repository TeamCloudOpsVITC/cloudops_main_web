import Link from "next/link"

function Navbar() {
    return(
        <div className="mt-10 pb-16 bg-dark">
            <h1 className="inline text-slate-100 text-[28px]"><a href="/">Cloudops Club</a></h1>
            <ul className="inline">
            <a href="/Core_Committee" className="text-black"><li className="float-right mx-8 p-2 border rounded-md bg-slate-100 hover:bg-slate-200 hover:scale-105">Core Committee</li></a>
            <a href="/Blog" className="text-black"><li className="float-right mx-8 p-2 border rounded-md bg-slate-100 hover:bg-slate-200 hover:scale-105">Blog Page</li></a>
            <a href="/event_page" className="text-black"><li className="float-right mx-8 p-2 border rounded-md bg-slate-100 hover:bg-slate-200 hover:scale-105">Events</li></a>
            </ul>
        </div>
    );
}

export default Navbar;