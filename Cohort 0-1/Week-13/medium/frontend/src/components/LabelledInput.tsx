import { ChangeEvent, useState } from "react";
import passOpenEye from '../assets/passOpenEye.svg'
import passClosedEye from '../assets/passClosedEye.svg'

export interface LabelledInputType {
    label:string;
    placeholder:string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}
export const LebelledInput = ({label, placeholder, onChange, type}:LabelledInputType) =>{
    const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return <div className="pt-2 relative">
    <label htmlFor="first_name" 
    className="block mb-2 text-sm font-bold text-gray-600">{label}
    </label>
    <input 
    onChange={onChange} 
    type={type === "password" && !showPassword ? "password" : "text"}
    id="first_name" 
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
    rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    placeholder={placeholder} 
    required />
   {type === "password" && (
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex i
                    tems-center text-sm leading-5"
                    style={{ top: '75%', transform: 'translateY(-50%)' }}
                >
                    {/* Icon for eye and eye-off (You can replace with an actual icon library like FontAwesome or Heroicons) */}
                    <img
                        src={showPassword ? passOpenEye : passClosedEye}
                        alt={showPassword ? "Hide password" : "Show password"}
                        className="h-5 w-5"
                    />
                </button>
            )}
</div>
}