function solve() {
    return function (selector, tabs) {
        // you solution here

        var selectorSubStr = selector.substring(1, selector.length);

        var selectorElement = document.getElementById(selectorSubStr);

        var ulTabs = document.createElement('ul');
        ulTabs.className = 'tabs-nav';
        selectorElement.appendChild(ulTabs);

        var ulContent = document.createElement('ul');
        ulContent.className = 'tabs-content';
        selectorElement.appendChild(ulContent);

        var liTabTemplate = document.createElement('li');
        var tabALinkTemplate = document.createElement('a');
        tabALinkTemplate.className = 'tab-link';

        var liContentTemplate = document.createElement('li');
        liContentTemplate.className = 'tab-content';
        var contentPTemplate = document.createElement('p');
        var contentBtnTemplate = document.createElement('button');
        contentBtnTemplate.className = 'btn-edit';
        contentBtnTemplate.innerHTML = 'Edit';

        for (var i = 0; i < tabs.length; i++) {

            tabALinkTemplate.innerHTML = tabs[i].title;
            liTabTemplate.appendChild(tabALinkTemplate);

            var liTabClone = liTabTemplate.cloneNode(true);

            ulTabs.appendChild(liTabClone);

            contentPTemplate.innerHTML = tabs[i].content;
            liContentTemplate.appendChild(contentPTemplate);
            liContentTemplate.appendChild(contentBtnTemplate);

            var liContentClone = liContentTemplate.cloneNode(true);

            ulContent.appendChild(liContentClone);

            if (i == 0) {
                liContentClone.className = 'tab-content visible';
                
            }

            liTabClone.firstChild.addEventListener('click', function (event) {

                var contentLis = document.getElementsByClassName('tab-content');

                for (var j = 0; j < tabs.length; j++) {
                    if (event.target.innerHTML == tabs[j].title) {
                        
                        
                        for (var k = 0; k < contentLis.length; k++) {
                            if (contentLis[k].firstChild.innerHTML == tabs[j].content && event.target.innerHTML == tabs[j].title && j == k) {
                                    contentLis[k].className = 'tab-content visible';
                            }
                            else {
                                contentLis[k].className = 'tab-content';
                            }
                        }
                        
                    }
                }
            });



            liContentClone.childNodes[1].addEventListener('click', function (event) {

            var textAreaTemplate = document.createElement('textarea');

            var textAreaTemplateClone = textAreaTemplate.cloneNode(true);

            textAreaTemplateClone.className = 'edit-content';

            textAreaTemplateClone.value = event.target.parentNode.firstChild.innerHTML;

                if (event.target.innerHTML == 'Edit') {
                    event.target.innerHTML = 'Save';   
                    
                    event.target.parentNode.appendChild(textAreaTemplateClone);
                }
                else {

                    for (var i = 0; i < tabs.length; i++) {
                        if (tabs[i].content == event.target.parentNode.firstChild.innerHTML) {
                            tabs[i].content = event.target.parentNode.childNodes[2].value;
                            break;
                        }
                    }
                    event.target.parentNode.firstChild.innerHTML = event.target.parentNode.childNodes[2].value;
                    
                    event.target.innerHTML = 'Edit';
                    event.target.parentNode.childNodes[2].remove();
                }
            });
        }
    }
}

// submit the above!

if (typeof module !== 'undefined') {
    module.exports = solve;
}