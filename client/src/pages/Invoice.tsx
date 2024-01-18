import React, { useState } from 'react';

function Invoice() {
    const [step, setStep] = useState(1);

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

    return (
        <>
            <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                {/* Stepper UI */}
                <li className={`flex md:w-full items-center text-${step === 1 ? "blue-600" : "gray-500"} dark:text-${step === 1 ? "blue-500" : "gray-400"}`}>
                    <span className="flex items-center">
                        Personal Info
                    </span>
                </li>
                <li className={`flex md:w-full items-center text-${step === 2 ? "blue-600" : "gray-500"} dark:text-${step === 2 ? "blue-500" : "gray-400"}`}>
                    <span className="flex items-center">
                        Account Info
                    </span>
                </li>
                <li className={`flex items-center text-${step === 3 ? "blue-600" : "gray-500"} dark:text-${step === 3 ? "blue-500" : "gray-400"}`}>
                    <span className="flex items-center">
                        Confirmation
                    </span>
                </li>
            </ol>

            {step === 1 && (
                <div>
                    {/* Payment Form */}
                    <h2>Pay for Your Charter Trip Here</h2>
                    <form>
                        {/* Your form fields go here */}
                        <button type="button" onClick={goToNextStep}>Next</button>
                    </form>
                </div>
            )}

            {step === 2 && (
                <div>
                    {/* Checkout Form */}
                    <h2>Checkout</h2>
                    <form>
                        {/* Your checkout form fields go here */}
                        <button type="button" onClick={goToPreviousStep}>Back</button>
                        <button type="button" onClick={goToNextStep}>Confirm</button>
                    </form>
                </div>
            )}

            {step === 3 && (
                <div>
                    {/* Confirmation Message */}
                    <p>Thank you for your order!</p>
                    <button type="button" onClick={() => setStep(1)}>New Order</button>
                </div>
            )}
        </>
    );
}

export default Invoice;
