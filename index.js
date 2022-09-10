let inputin = document.querySelector('.inputin')
let btn = document.querySelector('.btn')
let show = document.querySelector('.pawer')
let btnDlt = document.querySelector('.DltBtn')
let arr=[]

// let i = 1
// let week = 1
// let month =1


btn.addEventListener('click',function(event){
    
    if(inputin.value !==''){
        let li = document.createElement('li')
        let lirobo = document.createElement('li')
        let a = inputin.value
        show.append(li)
        show.append(lirobo)
        // li.textContent = a
        a= a.toLowerCase()
        event.preventDefault()
        inputin.value=''
        // if(a == 'привет') {
        //     li.textContent = `Вы : ${a} `
        //     lirobo.textContent = `Bot : О Привет`
            
        // }else{
        //     lirobo.textContent = `Bot : Я вас не понимаю`
        // }
        
        switch(a){
            case 'привет':
                li.textContent = `Вы : ${a + "?"} `
                lirobo.textContent = `Bot : О Привет`
                break;
            case 'как дела?':
                li.textContent = `Вы : ${a} `
                lirobo.textContent = `Bot : Отчилно)`
                break;

            
            case 'как тебя зовут?':
                li.textContent = `Вы : ${a} `
                lirobo.textContent = `Bot : GTP-980`
                break;
            case 'тупая':
                li.textContent = `Вы : ${a} `
                lirobo.textContent = `Bot : Сам тупой`
                break;
            case 'тебе сколько лет?':
                li.textContent = `Вы : ${a} `
                lirobo.textContent = `Bot : 0`
                break;
                case 'сколько тебе лет?':
                    li.textContent = `Вы : ${a} `
                    lirobo.textContent = `Bot : 0`
                    break;
            case 'сколько вам лет?':
                li.textContent = `Вы : ${a} `
                lirobo.textContent = `Bot : 0`
                break;
            case 'кто тебя создал?':
                li.textContent = `Вы : ${a} `
                lirobo.textContent = `Bot : Султан`
                break;
            case 'ты робот?':
                li.textContent = `Вы : ${a} `
                lirobo.textContent = `Bot : Я человек))`
                break;
            case 'как настроение?':
                li.textContent = `Вы : ${a} `
                lirobo.textContent = `Bot : отлично, я теперь существую !!!!`
                break;
            case 'кто ты?':
                li.textContent = `Вы : ${a}`
                lirobo.textContent = `Bot : Меня завут GTP-980 меня создал разработчик по имени Султан в 10.09.2022`
                break;
            case 'чем ты занимаешься?':
                li.textContent= `Вы : ${a}`
                lirobo.textContent = `Bot : Я пока что только отвечаю на ваши вопросы но в будушем думаю меня улучшят(`
            default :
                li.textContent = `Вы : ${a} `
                lirobo.textContent = `Bot : Я вас не понимаю`
        }
       
        
        // if(week == 5){
        //     week = 1
        //     month++
    
        // }else if(i == 8){
        //     i = 1
        //     week++
        // }
        
        
        
        
        
        
        
    }
    
    
})
btnDlt.addEventListener('click',function(){
    show.innerHTML =""

})
    
