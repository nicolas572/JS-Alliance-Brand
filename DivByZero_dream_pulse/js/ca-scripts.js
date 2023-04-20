var customerName = "Alliance  ";


function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;
    
    let header = document.getElementById('tm-header')
    header.textContent = customerName;

    let introHeader = document.getElementById('introheader')
    introHeader.textContent = customerName;

};

function toggleColors() {
    let el = document.querySelectorAll('.tm-white-rect');

    for (i = 0; i < el.length; ++i) {
        el[i].classList.add('tm-blue-rect');
        el[i].classList.remove('tm-white-rect');
    }

};

function hideElement() {
    let socialLink = document.querySelector('.tm-social-links');
    socialLink.style.visibility = "none";
};

 function addText() {

    let intro = document.getElementById('intropara1')
    intro.textContent = "Alliance was founded in 1931 by Albert Daniels.";

    let intro2 = document.getElementById('intropara2')
    intro2.textContent = "The company is a leader in P.C. Manufacturing";

     let aboutPara1 = document.getElementById('aboutpara1');
    aboutPara1.textContent = "We deliver the best service this side of creation."

    let aboutPara2 = document.getElementById('aboutpara2');
    aboutPara2.textContent = "Our motto is satisfaction guaranteed.";

    let addresspara = document.getElementById('addresspara');
    addresspara.innerText = "800-555-5555"

}; 



