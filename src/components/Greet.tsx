type GreetProps = {
    name: string
    msgcount: number
    isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {

    return ( 
        <div className="flex flex-row ml-16 relative">
            <div className="flex flex-row absolute top-0 left-0 font-semibold font-mono rounded-lg">
            <h2 className="m-2 text-4xl text-blue-500 rounded-lg">
                {`${props.name} Time`}
            </h2>
            <h2 className="m-1 pt-2 text-3xl text-blue-400 rounded-lg">
                {`now`}
            </h2></div>
        </div>
     );
}
 
export default Greet;