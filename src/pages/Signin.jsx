
const Signin = () => {
    return (

        <form className=" w-screen h-screen text-xl font-mono 
        flex justify-center items-center flex-col
        ">
            <div className="flex justify-center items-center flex-col 
            border-2 rounded-lg p-16">
                <div className="mb-4">
                    <label htmlFor="email">Email</label><br />
                    <input id="email" type="text" placeholder="enter email"
                        className="border-2 rounded p-1 mt-2 
                        placeholder:italic placeholder:text-slate-400" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password">Password</label><br />
                    <input id="password" type="password" placeholder="enter password"
                        className="border-2 rounded p-1 mt-2
                        placeholder:italic placeholder:text-slate-400" />
                </div>
                <button type="submit"
                    className="p-3 text-white rounded-3xl bg-cyan-500 hover:bg-cyan-600">Sign In</button>
            </div>
        </form>


    )
}

export default Signin