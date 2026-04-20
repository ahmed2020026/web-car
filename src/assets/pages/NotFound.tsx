import { Link } from "react-router-dom";
import useScrollTop from "../hooks/useScrollTop";

const NotFound = () => {
    useScrollTop()
    return (
        <section className="sectionPage flex items-center justify-center p-4">
            <div className="text-center max-w-md">

                {/* رقم 404 */}
                <h1 className="text-7xl font-semiBold text-gray-800">404</h1>

                {/* العنوان */}
                <h2 className="text-2xl font-semibold mt-3 text-gray-700">
                    Page Not Found
                </h2>

                {/* زر الرجوع */}
                <Link
                    to="/"
                    className="inline-block mt-6 px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
                >
                    Go Back Home
                </Link>

            </div>
        </section>
    );
};

export default NotFound;