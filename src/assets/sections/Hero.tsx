import { useState } from "react"
import Head from "../component/ui/Head"
import FieldInput from "../component/ui/InputField"
import InputSelect from "../component/ui/InputSelect"
import ButtonClick from "../component/ui/ButtonClick"
import { Search } from "lucide-react"
import { assets } from "../SYSTEM/assets"

const Hero = () => {
    const [date, setDate] = useState('')

    return (
            <div className="max-w-6xl mx-auto text-center space-y-8">

                {/* Head */}
                <Head
                    h1="Luxury cars on Rent"
                    p="Experience the best rental deals with premium cars at affordable prices."
                />

                {/* Form */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white shadow-lg p-4 rounded-2xl">

                    {/* Select */}
                    <InputSelect
                        father="Pickup Location"
                        children={['New York', 'Los Angeles', 'Houston', 'Chicago']}
                    />

                    {/* Date */}
                    <div>
                        <FieldInput
                            type="date"
                            label="Pick-up Date"
                            onchange={(e) => setDate(e.target.value)}
                        />
                        <p className={`${date ? 'text-gray-600' : 'text-gray-400'} text-left px-3 py-1 text-sm`}>
                            {date || 'Please Enter Date'}
                        </p>
                    </div>

                    {/* Button */}
                    <ButtonClick ClassName="w-full bg-gray-900 hover:bg-black text-white flex items-center justify-center gap-2">
                        <Search size={18} />
                        Search
                    </ButtonClick>

                </div>

                {/* Image */}
                <div className="flex justify-center">
                    <img
                        src={assets.main_car}
                        alt="main car"
                        className="w-full max-w-4xl object-contain"
                    />
                </div>

            </div>
    )
}

export default Hero