import Link from "next/link"

function Navbar() {
    return(
        <div className="mt-10 pb-32 bg-dark">
            <h1 className="inline text-slate-100 text-[28px]"><a href="/">Cloudops Club</a></h1>
            <ul className="inline">
                <li className="float-right mx-8 p-2 border rounded-md bg-slate-100 hover:bg-slate-200 hover:scale-105"><a href="/Core_Committee" className="text-black">Core Committee</a></li>
                <li className="float-right mx-8 p-2 border rounded-md bg-slate-100 hover:bg-slate-200 hover:scale-105"><a href="/Blog" className="text-black">Blog Page</a></li>
            </ul>
        </div>
    );
}

export default Navbar;