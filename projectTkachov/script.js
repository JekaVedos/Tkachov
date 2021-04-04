var $tabs = function (target) {
   var
      _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
      _eventTabsShow,
      _showTab = function (tabsLinkTarget) {
         var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
         tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
         tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
         tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
         // если следующая вкладка равна активной, то завершаем работу
         if (tabsLinkTarget === tabsLinkActive) {
            return;
         }
         // удаляем классы у текущих активных элементов
         if (tabsLinkActive !== null) {
            tabsLinkActive.classList.remove('tabs__link_active');
         }
         if (tabsPaneShow !== null) {
            tabsPaneShow.classList.remove('tabs__pane_show');
         }
         // добавляем классы к элементам (в завимости от выбранной вкладки)
         tabsLinkTarget.classList.add('tabs__link_active');
         tabsPaneTarget.classList.add('tabs__pane_show');
         document.dispatchEvent(_eventTabsShow);
      },
      _switchTabTo = function (tabsLinkIndex) {
         var tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
         if (tabsLinks.length > 0) {
            if (tabsLinkIndex > tabsLinks.length) {
               tabsLinkIndex = tabsLinks.length;
            } else if (tabsLinkIndex < 1) {
               tabsLinkIndex = 1;
            }
            _showTab(tabsLinks[tabsLinkIndex - 1]);
         }
      };

   _eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

   _elemTabs.addEventListener('click', function (e) {
      var tabsLinkTarget = e.target;
      // завершаем выполнение функции, если кликнули не по ссылке
      if (!tabsLinkTarget.classList.contains('tabs__link')) {
         return;
      }
      // отменяем стандартное действие
      e.preventDefault();
      _showTab(tabsLinkTarget);
   });

   return {
      showTab: function (target) {
         _showTab(target);
      },
      switchTabTo: function (index) {
         _switchTabTo(index);
      }
   }

};

$tabs('.tabs');


      //      


function scrollTo(element) {
   window.scroll({
      left: 0,
      top: element.offsetTop,
      behavior: 'smooth'
   })
}

var upbtn = document.querySelector('#up-button');
var header = document.querySelector('#header');

upbtn.addEventListener('click', () => {
   scrollTo(header);
})


function scrollTo(element) {
   window.scroll({
      left: 0,
      top: element.offsetTop,
      behavior: 'smooth'
   })
}

var contactbtn = document.querySelector('#contactbtn');
var contact = document.querySelector('#contact');

contactbtn.addEventListener('click', () => {
   scrollTo(contact);
})


function scrollTo(element) {
   window.scroll({
      left: 0,
      top: element.offsetTop,
      behavior: 'smooth'
   })
}

var gallerybtn = document.querySelector('#gallerybtn');
var gallery = document.querySelector('#gallery');

gallerybtn.addEventListener('click', () => {
   scrollTo(gallery);
})

// 


function scrollTo(element) {
   window.scroll({
      left: 0,
      top: element.offsetTop,
      behavior: 'smooth'
   })
}

var gallerybtnsidebar = document.querySelector('#gallerybtnsidebar');
// var gallery = document.querySelector('#gallery');

gallerybtnsidebar.addEventListener('click', () => {
   scrollTo(gallery);
})

function scrollTo(element) {
   window.scroll({
      left: 0,
      top: element.offsetTop,
      behavior: 'smooth'
   })
}

var contactbtnsidebar = document.querySelector('#contactbtnsidebar');
var gallery = document.querySelector('#gallery');

contactbtnsidebar.addEventListener('click', () => {
   scrollTo(contact);
})







///    




function openNav() {
   document.getElementById("mySidebar").style.width = "250px";
   document.getElementById("main").style.display = "none";
}

function closeNav() {
   document.getElementById("mySidebar").style.width = "0";
   document.getElementById("main").style.display = "block";
}