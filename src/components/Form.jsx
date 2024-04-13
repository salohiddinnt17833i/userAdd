import { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Form() {
    const nameRef = useRef(null)
    const ageRef = useRef(null)
    const emailRef = useRef(null)
    const [users, setUsers] = useState([])
    const store = useSelector(store => store.user)
    const dispatch = useDispatch()

    function handleSave(e) {
        e.preventDefault()
        const name = nameRef.current.value.trim()
        const age = parseInt(ageRef.current.value)
        const email = emailRef.current.value.trim()

        // Basic validation
        if (!name || !age || !email) {
            alert("Please fill out all fields.")
            return
        }
        if (age <= 0) {
            alert("Please enter a valid age.")
            return
        }

        const data = {
            name: name,
            age: age,
            email: email,
            id: Date.now()
        }
        setUsers([...users, data])
        dispatch({ type: "addUser", payload: data })
    }

    return (
        <>
            <div className='max-w-2xl text-white m-auto rounded-md p-4 bg-slate-800'>
                <form onSubmit={handleSave} className='flex gap-3 flex-col'>
                    <input ref={nameRef} className='w-full rounded bg-transparent border p-1 text-white outline-none border-purple-600' type="text" placeholder='Your Name' />
                    <input ref={ageRef} className='w-full rounded bg-transparent border p-1 text-white outline-none border-purple-600' type="number" placeholder='Your age' />
                    <input ref={emailRef} className='w-full rounded bg-transparent border p-1 text-white outline-none border-purple-600' type="email" placeholder='Your Email' />
                    <button className='w-full rounded p-1 text-white outline-none bg-purple-600 transition-all duration-200 hover:bg-purple-800' type="submit">Save</button>
                </form>
                <table className='text-left'>
                    <thead>
                        <tr>
                            <th className='p-2'>ID</th>
                            <th className='p-2'>Name</th>
                            <th className='p-2'>Age</th>
                            <th className='p-2'>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.map((ele, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td className='p-2'>{ind + 1}</td>
                                        <td className='p-2'>{ele.name}</td>
                                        <td className='p-2'>{ele.age}</td>
                                        <td className='p-2'>{ele.email}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Form
