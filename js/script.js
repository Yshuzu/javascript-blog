
        'use strict';

    /* document.getElementById('test-button').addEventListener('click', function(){
        const links = document.querySelectorAll('.titles a');
        console.log('links:', links);
        }); 
    */

const titleClickHandler = function(event){
event.preventDefault();
const clickedElement = this;
        // console.log(event)
console.log('Link was clicked!');
    
    /* [DONE] remove class 'active' from all article links  */
const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
}  

    /* [DONE] add class 'active' to the clicked link */
    clickedElement.classList.add('active')
    // console.log('clickedElement:', clickedElement);

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts article.active');

    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }    

    /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    // console.log(articleSelector)

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    // console.log(targetArticle)  

    /* [DONE] add class 'active' to the correct article */
    targetArticle.classList.add('active');    
}

const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

const generateTitleLinks = function () {
    console.log('Function generateTitleLinks works');
    
    /* [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    
    /* [DONE] find all the articles and save them to variable: articles */
    const articles = document.querySelectorAll(optArticleSelector);

    let html = '';

        for (let article of articles) {
            /* get the article id */
            const articleId = article.getAttribute('id');

            /* find the title element */
            const articleTitle = article.querySelector(optTitleSelector).innerHTML;

            /* get the title from the title element */

            /* create HTML of the link */
            const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
            console.log(linkHTML)
            /* insert link into html variable */
            html = html + linkHTML;
        }

    /* create HTML of the link */
    titleList.innerHTML = html;
    
    /* Add event listeners to all links */
    const links = document.querySelectorAll('.titles a');
    for(let link of links){
        link.addEventListener('click', titleClickHandler);
    }
}

     generateTitleLinks();
