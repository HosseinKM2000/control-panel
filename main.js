'use strict'

const register = document.getElementById('register-user');
const comment = document.getElementById('comment-user');
const shop = document.getElementById('shop-user');
const accept = document.getElementById('accept-user')
const online = document.getElementById('online')

const registerChart = new Chart(register , {

        type: 'line',
        data:{    
            labels:['','','','','','',''],    
            datasets: [{
            label: 'نمودار ارزیابی',
            data: [0,100,400,500,800,900,1000],
            fill: false,
            color:'red',
            backgroundColor:'#ffff',
            borderColor: '#ffff',
            tension: 0.1,
          }]},

})


const  commentChart = new Chart(comment,{

    type:'bar',
    data:{    
        labels:['','','','','','',''],    
        datasets: [{
        label: 'نمودار ارزیابی',
        data: [50,100,400,1000,300,900,200],
        fill: false,
        color:'red',
        backgroundColor:['white','#20c997','purple','yellow','orange','#0dcaf0','#fb00ff'],
        borderColor: '#ffff',
        tension: 0.1,
      }]},
})



const  shopChart = new Chart(shop,{

    type: 'doughnut',
    data:{    
        labels:['','','',''],    
        datasets: [{
        label: 'نمودار ارزیابی',
        data: [20,50,20,10],
        fill: false,
        color:'red',
        backgroundColor:['#fb00ff','red','#0dcaf0','orange'],
        borderColor: 'black',
        tension: 0.1,
      }]},
})


const  acceptChart = new Chart(accept,{
    type: 'bubble',
    data: {   datasets: [{
        label: 'First Dataset',
        data: [{
          x: 40,
          y: 25,
          r: 10
        },{
            x: 20,
            y: 30,
            r: 10
          }, 
        
        {
          x: 30,
          y: 20,
          r: 10
        }],
        backgroundColor: ['grey','pink','orange']
      }]
  },
    options: {}  
})


const register2Chart = new Chart(online, {

    type: 'line',
    data:{    
        labels:['شنبه','یکشبنه','دو شنبه','سه شنبه','چهارشنبه','پنجشنبه','شنبه','یکشبنه','دو شنبه','سه شنبه','چهارشنبه','پنجشنبه','',],    
        datasets: [{
        label: 'نمودار ارزیابی',
        data: [0,100,200,100,400,500,200,500,400,700,200,100,100],
        fill: true,
        color:'red',
        backgroundColor:'rgba(0,0,0,.3)',
        borderColor: 'grey',
        pointBackgroundColor:'black',
        tension: 0.1,
      }]},

})



 

 