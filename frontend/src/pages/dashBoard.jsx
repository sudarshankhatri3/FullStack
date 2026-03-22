import React from "react";



export default function DashBoard(){
    return (
        <>
          <aside>
            <div>
                <h3>Sovereign Store</h3>
                <p>Premium Curator</p>
            </div>
            <div>
                <div>
                    <img src="./dashboard.png" alt="dashboard icon" />
                    <a href="#dashboard">Dashboard</a>
                </div>
                <div>
                    <img src="./products.png" alt="product icon" />
                    <a href="Products">Products</a>
                </div>
                <div>
                    <img src="./orders.png" alt="order icon" />
                    <a href="order">Orders</a>
                </div>
                <div>
                    <img src="./customer.png" alt="customer" />
                    <a href="customer">Customers</a>
                </div>
                <div>
                    <img src="./setting.png" alt="setting icon" />
                    <a href="setting">Setting</a>
                </div>
            </div>
          </aside>
        </>
    )
}