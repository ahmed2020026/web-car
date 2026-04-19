import ButtonClick from "../component/ui/ButtonClick"
import Head from "../component/ui/Head"
import FieldInput from "../component/ui/InputField"

const Dea = () => {
    return (
        <div className="container mb-10">
            <Head h1="Never Miss a Deal!" textStyle="sm:text-4xl" other="mt-20" p={"Subscribe to get the latest offers, new arrivals, and exclusive discounts"}/>
            <div className="max-w-3xl mx-auto relative flex mt-10">
                <div className="flex-1">
                    <FieldInput type="email" label="email" placeHolder="Enter Your Email" padding="p-2.5"/>
                </div>
                <ButtonClick children={"Subscribe"} ClassName="bg-gray-800 hover:bg-gray-950 text-white py-2.5"/>
            </div>
        </div>
    )
}

export default Dea