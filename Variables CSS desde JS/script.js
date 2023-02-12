 const style = document.documentElement.style

 const handelChangeFontFamily = () =>{
    value = document.getElementsByTagName('select')[0].value
    style.setProperty('--font-family', value)
 }

 const handleSwitchTheme = () => {
    if(style.getPropertyValue('--background')==='#f3f3f3'){
        style.setProperty('--background', '#444');
        style.setProperty('--color', '#f3f3f3');
    } 
    else{
        style.setProperty('--background', '#f3f3f3');
        style.setProperty('--color', '#444');
    }
 }
