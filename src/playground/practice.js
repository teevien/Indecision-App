const MonthList = () => {
    const months = []
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

    return months.map((index, month) => (
        <li>
            {month}
            <img src={require('../images/months/' + month + '.jpg')}
                alt={month}
                style="max-height: 100px" />
        </li>
    ))
}

ReactDOM.render(<MonthList />, document.getElementById('app'));