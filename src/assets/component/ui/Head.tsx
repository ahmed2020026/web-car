interface HeadPropsType {
    h1: string,
    p?: string | null
}
const Head = ({ h1, p }: HeadPropsType) => {
    return (
        <>
            <div>
                <h1 className="font-semibold text-4xl sm:text-5xl text-center mt-13">{h1}</h1>
                {p && <p>{p}</p>}
            </div>
        </>
    )
}

export default Head