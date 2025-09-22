const Page = () => {
    return (
        <>
            <h1>customer</h1>
            <svg width={800} height={800} style={{background:'black'}}>
                <rect stroke="red" strokeWidth={4} width={100} height={100} x={30} y={30} fill="black"></rect>
                <circle cx={210} cy={80} r={50} stroke="red" strokeWidth={4} fill="black"></circle>
                <polygon points="150,100 200,150 100,150" stroke="red" strokeWidth={4} fill="black"></polygon>
                <text x={100} y={350} fill="red" fontSize={70}>
                    오징어게임
                </text>
            </svg>
        </>
    )
}

export default Page;