class Tabs {
    constructor(element, container) {
        this._element = element;
        this._container = container
        this.init();    
    }


    init() {
        // Don't act if current cliecked element is active
        if (this._element.parentNode.matches('.active')) {
            return;
        }
       const sibling = this.getSiblings();
       const tapPanel = this.getTabPanelSiblings();

       for (let i = 0; i < sibling.length; i++) {

        if (sibling[i].matches('.active')) {
            sibling[i].classList.remove('active');
            
            const preElemId = sibling[i].childNodes[1].getAttribute('href').slice(1);

            for (let index = 0; index < tapPanel.length; index++) {
                if (tapPanel[index].id === preElemId) {
                    tapPanel[index].classList.remove('active');
                    
                }
                
            }    
            
        }


        this._element.parentNode.classList.add('active');

        const currElemId = this._element.getAttribute('href').slice(1);



        for (let index = 0; index < tapPanel.length; index++) {
            if (tapPanel[index].id === currElemId) {
                tapPanel[index].classList.add('active');
                
            }
            
        }   
             
       
       }
       
    }

    getSiblings() {
        return this._element.parentNode.parentNode.querySelectorAll('li');
    }


    getTabPanelSiblings() {
        return this._container.querySelector('.tab-content')
        .querySelectorAll('.tab-pane');
    }

}



document.body.addEventListener('click', function (e) {

    if (e.target.parentNode.nodeType === Node.ELEMENT_NODE &&
        e.target.parentNode.nodeName === 'LI' &&
         e.target.parentNode.parentNode.classList.contains('nav-tab') ) {
             e.preventDefault();
             new Tabs(e.target, e.target.parentNode.parentNode.parentNode);
    }   
});




