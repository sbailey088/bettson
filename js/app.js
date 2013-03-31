
/*
 * use zepto function, since there the zepto library attached
 */
function move(){

//use normal JS if ie9
    if(document.documentMode==9){
        sidebar = document.getElementById("sidebar");
        article = document.getElementById("article");
    
        if (sidebar.className=='left')
        {
            sidebar.style.cssFloat='right';
            article.style.cssFloat='left';
            sidebar.className='right';
        }else{
            
            sidebar.style.cssFloat='left';
            article.style.cssFloat='right';
            sidebar.className='left';
        }
        //else use zepto js library
    }else
    {
        sidebar = $('#sidebar');
        article = $('#article');
    
        if (sidebar.css('float')=='left')
        {
            sidebar.css('float','right');
            article.css('float','left');
        }else{
            sidebar.css('float','left');
            article.css('float','right');
       
        }
    }
  
                        
}
