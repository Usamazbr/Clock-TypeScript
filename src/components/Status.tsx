type StatusProps = {
    status: string
}

const Status = (props: StatusProps) => {
    let message

    if(props.status === 'loading')
        message = 'Loading...'
    else if (props.status === 'success')
        message = 'Data fetched successfully'
    else if (props.status === 'error')
        message = 'Error fetching data'
        
    return ( 
        <div className={`flex flex-col mx-auto m-2 p-2 font-semibold border border-black rounded-lg ${({'loading':"text-yellow-500 border-yellow-500",'success':"text-green-500 border-green-500",'error':"text-red-500 border-red-500"})[props.status]}`}>
            <h2>Status - {message}</h2>
        </div>
     );
}
 
export default Status;