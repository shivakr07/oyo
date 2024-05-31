
const Header2 = () => {
    const List = [
        {
            name: 'Banglore'
        },
        {
            name: 'Kolkata'
        },
        {
            name: 'Delhi'
        },
        {
            name: 'Mumbai'
        },
        {
            name: 'Hyderabad'
        },

    ]
    return (
        <div>
            <div className="flex  px-10 py-2 bg-gray-200 justify-between">
                {
                    List.map((e) => {
                        return (
                            <span key={e.name}>{e.name}</span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Header2
