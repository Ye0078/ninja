

function format(t){
    var s = new Date('2018-03-18'), 
    st = s.getTime(),
    n = Date.now(),
    d = (n - st) / (60 * 60 * 1000 * 24), // 天数
    d1 = parseInt((n - st) / (60 * 60 * 1000 * 24)),
    h =  d - d1,
    h1 = parseInt(h * 24), // 小时
    m = h * 24 - h1,
    m1 = parseInt(m * 60) > 10 ? parseInt(m * 60) : '0'+parseInt(m * 60), // 分钟
    ss = m * 60 - m1,
    ss1 = parseInt(ss * 60) > 10 ? parseInt(ss * 60) : '0'+parseInt(ss * 60) //秒

  switch(t){
    case 'date':
      return d1
    case 'hour':
      return (Number(h1) + 8) > 10 ? Number(h1) + 8 : '0' + (Number(h1) + 8)
    case 'min':
      return m1;
    case 'second':
      return ss1;
  }
}

var HelloMessage = React.createClass({
  getInitialState: function() {
    return {date: '', 
            colors: ['#FFC125', '#EE5C42', '#7A67EE', '	#5CACEE', '#00F5FF', '#00688B'], currentColor: '#b8bec5'};
  },
  renderDate(){
      return format('date') + ' 天 ' + format('hour') + ' 小时 ' + format('min') + ' 分 ' + format('second') + ' 秒'
  },
  componentDidMount(){
     // console.log('123123');
    var that = this;
    var timer = setInterval(function(){
      that.setState({
        date: that.renderDate(),
        currentColor: that.state.colors[Math.floor(Math.random() * 5)]
      })
    }, 1000)
  },
  render: function() {
    return (<div>
        <h1></h1>
        <h2 style={{color: this.state.currentColor}}>{this.state.date}</h2></div>)
  }
});

ReactDOM.render(<HelloMessage/>, document.getElementById('app'))
