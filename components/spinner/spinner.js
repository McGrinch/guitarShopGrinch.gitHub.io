class Spinner{
    handlerClear(){
        ROOT_SPINNER.innerHTML='';
    }

    render(){
        const html=`
            <div class='spinner-container'>
                <img class='spinner__img' src='components/spinner/img/spinner.svg'/>
            </div>
        `;

        ROOT_SPINNER.innerHTML=html;
    }
}

const spinnerPage=new Spinner;
spinnerPage.handlerClear();
render();


