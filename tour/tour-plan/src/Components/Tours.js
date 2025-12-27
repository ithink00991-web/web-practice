function Tours ({tours}) {
   return (
        <div className='container'>
            <div>
                <h2 className="title">Plan With Love</h2>
            </div>

            <div className="cardsContainer">
            {
                tours.map ((tour) => {
                    return <Card {...tour}></Card>

                })
            }
            </div>
        </div>
    )
}


export default Tours;