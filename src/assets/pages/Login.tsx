import ButtonClick from "../component/ui/ButtonClick"
import Head from "../component/ui/Head"
import FieldInput from "../component/ui/InputField"
import useScrollTop from "../hooks/useScrollTop"

const Login = () => {
    useScrollTop();
    return (
        <section className="sectionPage flex justify-center items-center p-2">
            <div className="container">

                <div className="form max-w-lg mx-auto rounded-lg p-5 bg-white/50 shadow-lg border border-white backdrop-blur-lg relative z-10">
                    <Head h1="Login" textStyle="sm:text-3xl" other="my-8" />
                    <form>
                        <div className="mb-3">
                            <FieldInput type="email" label="email" padding="p-2" placeHolder="enter your email address" />
                        </div>
                        <div className="mb-3">
                            <FieldInput type="password" label="password" padding="p-2" placeHolder="password" />
                        </div>
                        <ButtonClick children={'Submit'}  ClassName="bg-gray-800 hover:bg-gray-950 transition-all duration-100 text-gray-200"/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login