import React from "react";

const CheckoutPage = ({ selectedPlans, removeFromCheckout }) => {
    const totalPrice = selectedPlans.reduce((total, plan) => total + plan.price, 0);

    return (
        <div className="container mx-auto py-10">
            <h2 className="text-center text-2xl font-bold my-10">Checkout</h2>
            {selectedPlans.length > 0 ? (
                <div className="bg-white border rounded-xl shadow-lg p-6">
                    <div className="border-b pb-3">
                        <div className="flex justify-between font-bold">
                            <span>Item Name</span>
                            <span>Price</span>
                        </div>
                    </div>
                    {selectedPlans.map((plan) => (
                        <div key={plan.id} className="border-b py-3 flex justify-between items-center">
                            <span>{plan.name}</span>
                            <span className="flex items-center">
                                ${plan.price.toFixed(2)}
                                <button onClick={() => removeFromCheckout(plan.id)} className="ml-3 text-red-500">
                                    ✖
                                </button>
                            </span>
                        </div>
                    ))}
                    <div className="flex justify-between font-bold mt-4">
                        <span>Total:</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <button className="bg-green-500 text-white w-full mt-4 py-2 rounded hover:bg-green-700 transition">
                        Save Cart
                    </button>
                </div>
            ) : (
                <p className="text-center text-gray-500">No items in checkout</p>
            )}
        </div>
    );
};

export default CheckoutPage;
