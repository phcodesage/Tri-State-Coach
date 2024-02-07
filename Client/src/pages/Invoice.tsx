import{ useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Bushero from '../assets/Regency_Buses_Coach_Bus_Fleet_Charter-p-1080.png';
import Navbar from '../components/Navbar';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm'

const stripePromise = loadStripe('pk_test_51OaMmnHFYyVMKiryTaCSRaF697lsoem17nQxPFykX7a90NzUGYubpTsNAPckvFmtR1JFkmKh9SbPZeHsAD7jj4Jx00wQikePXw');



function Invoice() {
    interface FormData {
        invoiceNumber: string;
        notes: string;
        stopSelection: string;
        studentName: string;
        studentEmail: string;
        studentPhone: string;
        parentName: string;
        parentEmail: string;
        parentPhone: string; // Add the missing property
        destination: string;
        pickupLocation: string;
        // Add more form fields as needed
      }
    const [isAgreed, setIsAgreed] = useState(false);
    const [step, setStep] = useState(1);
    const [amount, setAmount] = useState(1)
    const [clientSecret, setClientSecret] = useState('');
    const [formData, setFormData] = useState<FormData>({
        invoiceNumber: '',
        notes: '',
        stopSelection: 'default',
        studentName: '',
        studentEmail: '',
        studentPhone: '',
        parentName: '',
        parentEmail: '',
        destination: '',
        pickupLocation: '',
        parentPhone: ''
        // Add more form fields as needed
    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur" // This will trigger validation on blur
    });
    const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const goToNextStep = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    };

    const onFormSubmit = (data:any) => {
        console.log(data);
        goToNextStep();
    };

    const handleAmountChange = (e:any) => {
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

    useEffect(() => {
        // Fetch the client secret from your backend
        fetch('http://3.138.43.172/create-payment-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount }) // send amount in cents
        })
        .then(response => response.json())
        .then(data => {
          console.log('Client Secret received:', data.clientSecret); // Check the client secret
          setClientSecret(data.clientSecret);
        })
        .catch(error => console.error('Error:', error));
      }, [amount]);

    return (
        <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <div className="flex flex-col justify-center h-screen">
            
                <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white text-center">
                                Pay for Your Charter Trip Here
                            </h2>
                {step === 1 && (
                    <div className="flex items-center justify-center px-4 py-6">
                        
                        <div className="w-full max-w-4xl bg-white border rounded-lg shadow dark:bg-gray-800">
                            
                            <img className="rounded-t-lg w-full h-auto" src={Bushero} alt="" />
                            <div>
                                <h2 className="mb-4 text-2xl font-bold leading-none tracking-tight dark:text-white text-center">
                                    How much would you like to pay today?
                                </h2>
                                <div className="flex flex-col items-center justify-center my-4 gap-y-2">
                                    <div className="flex items-center justify-center rounded-md gap-x-2 border">
                                        <button onClick={decrementAmount} className="p-1 md:p-2">
                                        <svg width="24px" height="24px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>minus-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" > <g id="Icon-Set"  transform="translate(-516.000000, -1087.000000)" fill="#000000"> <path d="M532,1117 C524.268,1117 518,1110.73 518,1103 C518,1095.27 524.268,1089 532,1089 C539.732,1089 546,1095.27 546,1103 C546,1110.73 539.732,1117 532,1117 L532,1117 Z M532,1087 C523.163,1087 516,1094.16 516,1103 C516,1111.84 523.163,1119 532,1119 C540.837,1119 548,1111.84 548,1103 C548,1094.16 540.837,1087 532,1087 L532,1087 Z M538,1102 L526,1102 C525.447,1102 525,1102.45 525,1103 C525,1103.55 525.447,1104 526,1104 L538,1104 C538.553,1104 539,1103.55 539,1103 C539,1102.45 538.553,1102 538,1102 L538,1102 Z" id="minus-circle" > </path> </g> </g> </g></svg>
                                        </button>
                                        <input
                                            type="text"
                                            id="quantity"
                                            name="quantity"
                                            className="text-center border-0 font-extrabold"
                                            value={`$${amount}`}
                                            onChange={handleAmountChange}
                                            placeholder="$"
                                        />
                                        <button onClick={incrementAmount} className="p-2">
                                            {/* Plus SVG */}
                                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Add_Plus_Circle"> <path id="Vector" d="M8 12H12M12 12H16M12 12V16M12 12V8M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
                                        </button>
                                    </div>
                                    <div className='w-full flex justify-center'>
                                    <button
                                        className="block w-32 rounded-md bg-rose-700 px-3.5 py-2.5 text-center text-m font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                                        onClick={goToNextStep}
                                    >
                                        Proceed
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {step === 2 && (
    <div className="checkout-form px-4 py-6">
        <h2 className="text-4xl font-bold text-gray py-4">Charter Details</h2>
        <form onSubmit={handleSubmit(onFormSubmit)}className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">

            {/* Student Info Section */}
            <div>
                <h4 className="text-xl font-semibold text-gray mb-2">Student Info</h4>
                <input 
                {...register("studentName", { required: true })}
                    type="text" 
                    name="studentName" 
                    className="block w-full rounded-md border-0 px-3.5 py-2 mb-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800" 
                    placeholder="Student Name" 
                    value={formData.studentName} 
                    onChange={handleInputChange} 
                />{errors.studentName && <p className="text-red-600">Student Name is required</p>}
                <input 
                {...register("studentEmail", { required: true })}
                    type="email" 
                    name="studentEmail" 
                    className="block w-full rounded-md border-0 px-3.5 py-2 mb-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800" 
                    placeholder="Student Email" 
                    value={formData.studentEmail} 
                    onChange={handleInputChange} 
                />{errors.studentEmail && <p className="text-red-600">Student Email is required</p>}
                <input 
                {...register("studentPhone", { required: true })}
                    type="tel" 
                    name="studentPhone" 
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800" 
                    placeholder="Student Phone" 
                    value={formData.studentPhone} 
                    onChange={handleInputChange} 
                />{errors.studentPhone && <p className="text-red-600">Student Phone is required</p>}
            </div>

            {/* Parent Info Section */}
            <div>
                <h4 className="text-xl font-semibold text-gray mb-2">Parent Info</h4>
                <input 
                {...register("parentName", { required: true })}
                    type="text" 
                    name="parentName" 
                    className="block w-full rounded-md border-0 px-3.5 py-2 mb-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800" 
                    placeholder="Parent Name" 
                    value={formData.parentName} 
                    onChange={handleInputChange} 
                />{errors.parentName && <p className="text-red-600">Parent Name is required</p>}
                <input 
                    {...register("parentEmail", { required: true })}
                    type="email" 
                    name="parentEmail" 
                    className="block w-full rounded-md border-0 px-3.5 py-2 mb-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800" 
                    placeholder="Parent Email" 
                    value={formData.parentEmail} 
                    onChange={handleInputChange} 
                />{errors.parentEmail && <p className="text-red-600">Student Email is required</p>}
                <input 
                {...register("parentPhone", { required: true })}
                    type="tel" 
                    name="parentPhone" 
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800" 
                    placeholder="Parent Phone" 
                    value={formData.parentPhone} 
                    onChange={handleInputChange} 
                />{errors.parentPhone && <p className="text-red-600">Parent Phone is required</p>}
            </div>
        
            {/* Items in Order and Order Summary */}
            <div className="sm:col-span-2 md:flex md:justify-between">
                <div className="md:w-1/2">
                    <h4 className="text-xl font-semibold text-gray mb-2">Items in Order</h4>
                    <p className="mb-3">Quantity: {amount}</p>
                    <p>${amount}.00 USD</p>
                </div>

                <div className="md:w-1/2 mt-4 md:mt-0">
                    <h4 className="text-xl font-semibold text-gray mb-2">Order Summary</h4>
                    <p className="mb-1">Subtotal: ${amount}.00 USD</p>
                    <p>Total: ${amount}.00 USD</p>
                </div>
            </div>

            
    {/* Agreement Checkbox */}
    <div className="sm:col-span-2">
        <label className="flex items-center space-x-3 mb-3">
            <input 
                type="checkbox" 
                name="agreement" 
                className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-rose-600 checked:border-transparent focus:outline-none" 
                onChange={(e) => setIsAgreed(e.target.checked)}
            />
            <span className="text-gray-700 dark:text-white font-normal">
                By checking this box, I understand that all sales are final, there are no refunds or exchanges, and that tickets are non transferrable. <strong>In order for tickets to be valid, student information MUST be included with the order.</strong>
            </span>
        </label>
    </div>
            {/* Continue Button */}
            <div className="sm:col-span-2 mt-10">
        <button 
            type="submit" 
            className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm ${isAgreed ? 'bg-rose-700 hover:bg-rose-500' : 'bg-gray-400'} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600`}
            disabled={!isAgreed}
        >
            Checkout
        </button>
    </div>

        </form>
    </div>
)}
                {step === 3 && (
                    <div className='flex justify-center my-10'>
                     {clientSecret && (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
        <CheckoutForm />
    </Elements>
)}
                </div>
                )}
                <div className="w-full flex justify-center">
    <ol className="items-center space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
        <li className={`flex items-center ${step === 1 ? "text-rose-600 dark:text-rose-500" : "text-gray-500 dark:text-gray-400"} space-x-2.5 rtl:space-x-reverse`}>
            <span className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${step === 1 ? "bg-rose-700 border-rose-600 text-white" : "border-gray-500"}`}>
                1
            </span>
            <span>
                <h3 className="font-medium leading-tight">User Info</h3>
                <p className="text-sm">Pay Amount</p>
            </span>
        </li>
        <li className={`flex items-center ${step === 2 ? "text-rose-600 dark:text-rose-500" : "text-gray-500 dark:text-gray-400"} space-x-2.5 rtl:space-x-reverse`}>
            <span className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${step === 2 ? "bg-rose-700 border-rose-600 text-white" : "border-gray-500"}`}>
                2
            </span>
            <span>
                <h3 className="font-medium leading-tight">Company Info</h3>
                <p className="text-sm">Charter Details</p>
            </span>
        </li>
        <li className={`flex items-center ${step === 3 ? "text-rose-600 dark:text-rose-500" : "text-gray-500 dark:text-gray-400"} space-x-2.5 rtl:space-x-reverse`}>
            <span className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${step === 3 ? "bg-rose-700 border-rose-600 text-white" : "border-gray-500"}`}>
                3
            </span>
            <span>
                <h3 className="font-medium leading-tight">Payment Info</h3>
                <p className="text-sm">Payment</p>
            </span>
        </li>
    </ol>
</div>

            </div>
            
        </div>
    );
}

export default Invoice;
