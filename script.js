let images = document.querySelector(".images").children,
buttons = document.getElementsByTagName("button")

let get_keys = []
for(let keys of images)
{
    (get_keys.push(keys))
}
images[0].style.display = 'block'

let current = 1;
let prev = 0


for(let btns of buttons){
    btns.addEventListener('click',function(e)
    {
        if(e.target.id === 'right'){
        
        get_keys[prev++].style.display = 'none'  

        get_keys[current++].style.display = 'block'
        if(current === images.length)
            (current = 0)
           
        
        if(prev === images.length)
            (prev = 0)
            
            console.log(prev,current)

        }else if(e.target.id === 'left'){
            (prev--,current--)
        
            if(prev < 0)
                (prev = images.length-1)
                
            

            if(current < 0)
                (current = images.length-1);
            
        
            get_keys[prev].style.display = 'block'
            get_keys[current].style.display = 'none'
           
        }
    })
}
