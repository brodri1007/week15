


function Schedule({appointments}){
    // alert(JSON.stringify(props.data))
    // const data = JSON.stringify(props.data)
    return (
        <div>
            <h4 className="pt-4">Scheduled Appointments</h4>
            {appointments?.map((app, index) => {
                return (
                    <p>{index} {app.appointment.email} </p>
                )
            })}
        </div>
    )


}

export default Schedule;