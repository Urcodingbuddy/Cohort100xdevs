import { TypeAnimation } from 'react-type-animation';
export const Quote = () => {
    return (
        <div className="bg-slate-200 h-screen flex justify-center items-center">
            <div className="flex flex-col max-w-lg text-left m-5 gap-5">
                {/* Parent container for both TypeAnimation and static text */}
                <div className="relative pb-5">
                    {/* Typing Animation */}
                    <div className="text-3xl font-bold font-mono h-32">
                        <TypeAnimation
                        className='w-100'
                            sequence={[
                                'The Customer Support I received was exceptional, The support team went above and beyond to address my concerns.',
                            ]}
                            wrapper="p"
                            cursor={true}
                            repeat={0} // This prevents looping/backspacing
                        />
                    </div>
                </div>
                <div className='w-100'>
                    <div className="max-w-md text-xl font-semibold text-left mt-4">
                        Julies Winfield
                    </div>
                    <div className="max-w-md text-sm font-semibold text-slate-500">
                        CEO | Acme corp
                    </div>
                </div>
            </div>
        </div>
    )
}



// import { useState, useEffect } from 'react';
// import { TypeAnimation } from 'react-type-animation';

// export const Quote = () => {
//     const [animationComplete, setAnimationComplete] = useState(false);

//     useEffect(() => {
//         // Set timeout to match the length of your typing animation
//         const timer = setTimeout(() => {
//             setAnimationComplete(true);
//         }, 8500); // Adjust this duration to match the length of your typing animation

//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         <div className="bg-slate-200 h-screen flex justify-center items-center bg-red">
//             <div className="flex flex-col max-w-lg text-left gap-5 border-black">
//                 <div className="relative">
//                     {/* Typing Animation */}
//                     <div className="text-3xl font-bold font-mono h-32">
//                         <TypeAnimation
//                             sequence={[
//                                 'The Customer Support I received was exceptional, The support team went above and beyond to address my concerns.',
//                             ]}
//                             wrapper="p"
//                             cursor={true}
//                             repeat={0} // Prevent looping/backspacing
//                         />
//                     </div>
//                 </div>
//                 <div>
//                     {/* Conditionally render static text */}
//                     <div className={`max-w-md ${animationComplete ? 'block' : 'hidden'} text-xl font-semibold text-left mt-4`}>

//                         <TypeAnimation
//                             sequence={[
//                                 'Julies Winfield',
//                             ]}
//                             wrapper="p"
//                             cursor={false}
//                             repeat={0} // Prevent looping/backspacing
//                         />
//                     </div>
//                     <div className={`max-w-md ${animationComplete ? 'block' : 'hidden'} text-sm font-semibold text-slate-500`}>

//                         <TypeAnimation
//                             sequence={[
//                                 'CEO | Acme corp',
//                             ]}
//                             wrapper="p"
//                             cursor={false}
//                             repeat={0} // Prevent looping/backspacing
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
