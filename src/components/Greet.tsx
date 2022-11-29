type GreetProps = {
    name: string
    msgcount: number
    isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {

    return ( 
        <div>
            <h2 className="m-2 text-6xl text-blue-500 font-semibold">
                {`This is ${props.name} Time`}
            </h2>
        </div>
     );
}
 
export default Greet;