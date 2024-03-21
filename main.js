//acess token
//refresh token jwt
//fecthpost
//drag,drop
let list = document.querySelector('.list')
let buttonadd = document.querySelector('.buttonadd')
let boxinput = document.querySelector('.boxinput')
let datalist = []
let header = document.querySelectorAll('.headertext1')
let bienheader = 0
function init()
{
console.log(JSON.parse(localStorage.getItem('value')))
if(JSON.parse(localStorage.getItem('value'))!=null)
{
    datalist =JSON.parse(localStorage.getItem('value'))
}
renderreload()
}
init()
buttonadd.addEventListener('click',()=>{
    if(boxinput.value!=null)
    {
        let task = {
            title : boxinput.value,
            condition : 'undone'
        }
        datalist.push(task)
        render(datalist)
        localStorage.setItem('value',JSON.stringify(datalist))
    }
})
function render(data){
    let dataa = data.map((value)=>{
        return    `<div class="data">
        <div>${value.title}</div>
        <div class="data-icon">
            <i class="fa-solid fa-trash"></i>
            <i class="fa-solid fa-pen-to-square"></i>
        </div>
    </div>`
    })
    let datapush = dataa.join('')
    list.innerHTML= datapush
    addeventtrash()
    addeventboxdata()
    addevenfixtext()
    let boxdata = document.querySelectorAll('.data')
    for(let i= 0;i<boxdata.length;i++)
    {
        if(datalist[i].condition == 'done')
        {
            boxdata[i].style.borderColor = `green`
            console.log('xong')
        }
        else {
            boxdata[i].style.borderColor =`rgb(210, 73, 48)`
        }
    }
}
function renderreload(){
    let datareload = localStorage.getItem('value')
    if(datareload!=null)
    {
    render(JSON.parse(datareload))
    }
}
function addeventtrash(){
    let boxdata = document.querySelectorAll('.data')
    let trash = document.querySelectorAll('.fa-trash')
    for(let i = 0 ;i<trash.length;i++)
    {
        trash[i].addEventListener('click',()=>{
        boxdata[i].remove()
        datalist.splice(i,1)
        localStorage.setItem('value',JSON.stringify(datalist))
        render(datalist)
        })
    }
}
function addeventboxdata(){
    let boxdata = document.querySelectorAll('.data')
    for(let i =0;i<boxdata.length;i++)
    {
        boxdata[i].addEventListener('click',()=>{
            if(datalist[i].condition == 'done')
            {
                datalist[i].condition = 'undone'
                boxdata[i].style.borderColor =`rgb(210, 73, 48)`
                
            }
            else{
                datalist[i].condition = 'done'
                boxdata[i].style.borderColor =`green`
            }
            localStorage.setItem('value',JSON.stringify(datalist))
        })
    }
}
header[0].addEventListener('click',()=>{
    if(bienheader!=0)
    {
        header[bienheader].classList.remove('box')
    bienheader = 0;
    header[bienheader].classList.add('box')
    list.innerHTML =''
    render(datalist)
    
    let boxdata = document.querySelectorAll('.data')
    for(let i= 0;i<boxdata.length;i++)
    {
        if(datalist[i].condition == 'done')
        {
            boxdata[i].style.borderColor = `green`
            console.log('xong')
        }
        else {
            boxdata[i].style.borderColor =`rgb(210, 73, 48)`
        }
    }
    }
})

header[1].addEventListener('click',()=>{
    if(bienheader!=1)
    {
    header[bienheader].classList.remove('box')
    bienheader = 1;
    header[bienheader].classList.add('box')
    list.innerHTML =''
    let done = datalist.filter((value)=>{
        return value.condition=='done'
    })
    
    render(done)
    let boxdata = document.querySelectorAll('.data')
    for(let i= 0;i<boxdata.length;i++)
    {
        
        boxdata[i].style.borderColor =`green`
    }
} 
})
header[2].addEventListener('click',()=>{
    if(bienheader!=2)
    {
    header[bienheader].classList.remove('box')
    bienheader = 2;
    header[bienheader].classList.add('box')
    list.innerHTML =''
    let undone = datalist.filter((value)=>{
        return value.condition=='undone'
    })
    render(undone)
    let boxdata = document.querySelectorAll('.data')
    for(let i= 0;i<boxdata.length;i++)
    {
        
        boxdata[i].style.borderColor =`rgb(210, 73, 48)`
    }
    }
})
function addevenfixtext()
{
    let boxdata = document.querySelectorAll('.data')
    let fixdata = document.querySelectorAll('.fa-pen-to-square')
    
    for(let i =0;i<boxdata.length;i++)
    {
        fixdata[i].addEventListener('click',()=>{
            buttonadd.removeEventListener("click", handleClick);
            console.log("chiu")
            boxdata.removeEventListener("click", handleClick);
        buttonadd.addEventListener('click',()=>{
            datalist[i].title = boxinput.value
            render(datalist)
        })   
        })
    }
}
function handleClick(event) {

    event.preventDefault();
    console.log("Sự kiện click đã bị hủy.");
}