import React, { useState } from 'react';
import Bushero from '../assets/Regency_Buses_Coach_Bus_Fleet_Charter-p-1080.png';
import Navbar from '../Components/Navbar';

function Invoice() {
    const [step, setStep] = useState(1);
    const [amount, setAmount] = useState(1)
    const [formData, setFormData] = useState({
        invoiceNumber: '',
        notes: '',
        stopSelection: 'default',
        studentName: '',
        studentEmail: '',
        studentPhone: '',
        // Add more form fields as needed
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const goToNextStep = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    };

    const goToPreviousStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        goToNextStep();
    };

    const handleAmountChange = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, ''); // Remove any non-numeric characters
        setAmount(Number(value));
    };
    

    const incrementAmount = () => {
        setAmount(amount + 1);
    };
    
    const decrementAmount = () => {
        if (amount > 1) { // Prevent the amount from going below 1
            setAmount(amount - 1);
        }
    };

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white text-center">
                                Pay for Your Charter Trip Here
                            </h2>
                {step === 1 && (
                    <div className="flex-grow flex items-center justify-center px-4 py-6">
                        
                        <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            
                            <img className="rounded-t-lg w-full h-auto" src={Bushero} alt="" />
                            <div>
                                <label htmlFor="quantity" className="field-label-11">
                                    How much would you like to pay today?
                                </label>
                                <div className="flex items-center justify-center gap-x-6 mt-4">
                                    <div className="flex items-center border border-gray-300 rounded-md">
                                        <button onClick={decrementAmount} className="p-2">
                                        <svg width="64px" height="64px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>minus-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-516.000000, -1087.000000)" fill="#000000"> <path d="M532,1117 C524.268,1117 518,1110.73 518,1103 C518,1095.27 524.268,1089 532,1089 C539.732,1089 546,1095.27 546,1103 C546,1110.73 539.732,1117 532,1117 L532,1117 Z M532,1087 C523.163,1087 516,1094.16 516,1103 C516,1111.84 523.163,1119 532,1119 C540.837,1119 548,1111.84 548,1103 C548,1094.16 540.837,1087 532,1087 L532,1087 Z M538,1102 L526,1102 C525.447,1102 525,1102.45 525,1103 C525,1103.55 525.447,1104 526,1104 L538,1104 C538.553,1104 539,1103.55 539,1103 C539,1102.45 538.553,1102 538,1102 L538,1102 Z" id="minus-circle" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
                                        </button>
                                        <input
                                            type="text"
                                            id="quantity"
                                            name="quantity"
                                            className="text-center border-0"
                                            value={`$${amount}`}
                                            onChange={handleAmountChange}
                                            placeholder="$"
                                        />
                                        <button onClick={incrementAmount} className="p-2">
                                            {/* Plus SVG */}
                                            <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Add_Plus_Circle"> <path id="Vector" d="M8 12H12M12 12H16M12 12V16M12 12V8M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                                        </button>
                                    </div>
                                    <button
                                        className="w-commerce-commercebuynowbutton buy_button_checkout"
                                        onClick={goToNextStep}
                                    >
                                        Proceed
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {step === 2 && (
                    <div className="checkout-form">
                        <h2>Checkout</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="charter-info">
                                <h4>Charter Info</h4>
                                <input
                                    type="text"
                                    placeholder="Enter Invoice number..."
                                    name="invoiceNumber"
                                    value={formData.invoiceNumber}
                                    onChange={handleInputChange}
                                />
                                <textarea
                                    placeholder="Enter notes..."
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                            <div className="your-stop">
                                <h4>Your Stop</h4>
                                <select
                                    name="stopSelection"
                                    value={formData.stopSelection}
                                    onChange={handleInputChange}
                                >
                                    <option value="default">-Please Pick Your Stop-</option>
                                    {/* Add more options dynamically here */}
                                </select>
                            </div>
                            <div className="student-form">
                                <h4>Student Info</h4>
                                <input
                                    type="text"
                                    placeholder="Student Name"
                                    name="studentName"
                                    value={formData.studentName}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="email"
                                    placeholder="Student Email"
                                    name="studentEmail"
                                    value={formData.studentEmail}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="tel"
                                    placeholder="Student Phone"
                                    name="studentPhone"
                                    value={formData.studentPhone}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <button type="button" onClick={goToPreviousStep}>Back</button>
                            <button type="submit">Confirm</button>
                        </form>
                    </div>
                )}
                {step === 3 && (
                    <div>
                        <p>Thank you for your order!</p>
                        <button type="button" onClick={() => setStep(1)}>New Order</button>
                    </div>
                )}
            </div>
        </>
    );
}

export default Invoice;
