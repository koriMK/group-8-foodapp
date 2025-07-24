import { useState } from "react"

function Checkout() {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        paymentMethod: ''
    })

    const [orders, setOrders] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setOrders(prev => [...prev, formData])
        setFormData({
            name: '',
            address: '',
            paymentMethod: ''
        })
    }

    return (
        <div style={{
            backgroundColor: '#FFDA03',
            padding: '40px',
            borderRadius: '30px',
            color: 'red',
            width: '95vw',
        }}>

            <h1>YOUR ORDER IS ALREADY ON IT'S WAY...</h1>

            <h3>JUST FILL THE FOLLOWING :</h3>

            <form onSubmit={handleSubmit}>
                <section style={{
                    backgroundColor: '#CBA135',
                    padding: '40px',
                    borderRadius: '10px',
                }}>
                    <label>Name: </label>
                    <input type="text" name="name" placeholder="Name" style={{ width: '300px' }} value={formData.name} onChange={handleChange} />
                    <br />

                    <label>Address: </label>
                    <input type="text" name="address" placeholder="Where to deliver" style={{ width: '286px' }} value={formData.address} onChange={handleChange} />
                    <br />

                    <label>Payment method: </label>
                    <input type="text" name="paymentMethod" placeholder="eg: M-PESA, CashApp" style={{ width: '220px' }} value={formData.paymentMethod} onChange={handleChange} />
                    <br />
                </section>
                <button style={{
                    backgroundColor: 'green',
                    fontWeight: '900',
                    marginLeft: '30%',
                    width: '250px',
                    margin: '20px',
                }}>ORDER UP !!!</button>
            </form>

            {orders.length > 0 && (
                <div>
                    {orders.map((order, idx) => (
                        <div key={idx} style={{
                            backgroundColor: '#CBA135',
                            padding: '20px',
                            borderRadius: '10px',
                            margin: '20px',
                            color: 'black'
                        }}>
                            <h3>Your Order is on the way</h3>
                            <p><strong>Name: </strong>{order.name}</p>
                            <p><strong>Address: </strong>{order.address}</p>
                            <p><strong>Payment Method: </strong>{order.paymentMethod}</p>
                        </div>
                    ))}
                </div>
            )}
        </div >
    )
}

export default Checkout