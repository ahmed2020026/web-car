import { useState } from "react"
import Head from "../component/ui/Head"
import FieldInput from "../component/ui/InputField"
import InputSelect from "../component/ui/InputSelect"
import ButtonClick from "../component/ui/ButtonClick"
import { Search } from "lucide-react"
import { assets } from "../SYSTEM/assets"

const Hero = () => {
    const [date, setDate] = useState('');
    return (
        <>
            <div className="container relative">
                <div>
                    <Head h1="Luxury cars on Rent" />
                </div>
                <div className="max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-3 items-start shadow-md p-4 bg-white mx-auto mt-10 rounded-2xl">

                    {/* Select */}
                    <div className="w-full">
                        <InputSelect
                            father="Pickup Location"
                            children={['New York', 'Los Angeles', 'Houston', 'Chicago']}
                        />
                    </div>

                    {/* Date */}
                    <div className="w-full">
                        <FieldInput
                            type="date"
                            label="Pick-up Date"
                            onchange={(e) => setDate(e.target.value)}
                        />
                        <p className={`${date ? 'text-gray-600' : 'text-gray-400'} px-3 py-1.5 text-sm`}>
                            {date || 'Please Enter Date'}
                        </p>
                    </div>

                    {/* Button */}
                    <div className="">
                        <ButtonClick ClassName="w-full block bg-gray-800 hover:bg-gray-950 text-white">
                            <Search />
                            Search
                        </ButtonClick>
                    </div>

                </div>

                <div className="w-full flex justify-center py-10 md:py-5">
                    <img
                        src={assets.main_car}
                        alt="main car"
                        className="w-full max-w-3xl object-contain"
                    />
                </div>
            </div>
        </>
    )
}

export default Hero