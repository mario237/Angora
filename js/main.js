var headerElement = document.getElementById('homeSection');
var topNavbar = document.getElementById('topNav');
var navItems = document.querySelectorAll('.nav-menu ul li a');
var navLogo = document.getElementById('navLogo');
var allSections = document.querySelectorAll('section');
var navbar = document.querySelector('nav');


function elementInViewport(el) {
    var top = el.offsetTop;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
    }
  
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      (top + height) > window.pageYOffset
    );
}



function toggleActiveState(){
    
    navbar.classList.toggle('sticky' , window.scrollY > 0);

    if(elementInViewport(headerElement)){
        removeAllActiveClasses();
        addActiveClass('homeSection');
    }else{
        var scrollPosition = document.documentElement.scrollTop;

        allSections.forEach(section => {
            if (
                scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
                scrollPosition <
                section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
            ) {
                var currId = section.attributes.id.value;
                removeAllActiveClasses();
                addActiveClass(currId);
            }
        })
    }

   
    
}

function removeAllActiveClasses() {
    document.querySelectorAll('.nav-menu ul li a').forEach(link => {

        link.classList.remove('active');

    })
}

function addActiveClass(id) {
    var selectedLink = `.nav-menu ul li a[href="#${id}"]`;
    document.querySelector(selectedLink).classList.add("active");
}
  
  window.addEventListener('scroll' , toggleActiveState);

  
  function scrollToTop() {
    var position = document.body.scrollTop = 0;
    window.scroll({
        top: position,
        behavior: "smooth"
    })

}

