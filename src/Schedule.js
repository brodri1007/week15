


function Schedule({appointments}){

    return (
        <div>
            <h4 className="pt-4">Scheduled Appointments</h4>
            {appointments.map((app, index) => {
                return (
                    <p>{index} {app.email} {app.date}</p>
                )
            })}
        </div>
    )


}

export default Schedule;