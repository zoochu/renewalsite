
function init(){
    const elUl = document.querySelector('.third-1page-1 ul');
    const popup = document.querySelector('.popup');
    let xhr,res,tagList='';

    xhr = new XMLHttpRequest();
    xhr.open('get','./data/data_gallery.json');
    xhr.send(null);
    xhr.onload = function(){

        res = JSON.parse(xhr.responseText);
        // console.log(res)
        res.renewal.forEach(function(v,i){
            tagList += ` <li><img src="${v.photo}">
            <h5>${v.name} </h5></li>`;
        });
        elUl.innerHTML = tagList;
        const elLi = document.querySelectorAll('li');
        
        for(let i=0; i<elLi.length; i++){
            elLi[i].addEventListener('click',function(){
                popup.style='display:flex';
                dataChange(i);
            });
        }
        function dataChange(i){
            v.name = res.renewal[i].v.name; 
            v.date = res.renewal[i].v.date; 
            v.detail = res.renewal[i].v.detail;
            v.link = res.renewal[i].v.link;
            v.photo = res.renewal[i].v.photo;

            tagList = `<li>${v.name}[${v.detail}]더보기</li>`;
            popup.innerHTML = tagList;
        }

        popup.addEventListener('click',function(){
            this.style = 'display:none';
        })

    }


}
window.onload = init;