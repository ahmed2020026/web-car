interface HeadPropsType {
    h1: string,
    p?: string | null,
    textStyle?:string,
    other?:string
}

const Head = ({ h1, p,textStyle='sm:text-5xl',other }: HeadPropsType) => {
    return (
        <div className="text-center max-w-2xl mx-auto" data-aos={'fade-down'}>
            <h2 className={`font-semibold text-3xl ${textStyle} text-gray-900 leading-tight ${other}`}>
                {h1}
            </h2>

            {p && (
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                    {p}
                </p>
            )}
        </div>
    )
}

export default Head