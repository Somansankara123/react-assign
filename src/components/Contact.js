const Contact =()=>{
    return(
        <div>
        <h1 className="m-4 font-bold text-3xl p-4">Contact</h1>
        <form>
            <input type="text"
               className="border border-black p-2 m-2"
               placeholder="name"
            >
            </input>
            <input
             type="text " className="border border-black p-2 m-2" placeholder="message"
            
            />
            <button className="bg- bg-green-400 rounded-lg"> submitt</button>
        </form>
        </div>
    )
}
export default Contact;