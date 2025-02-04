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
  //console.log('Link was clicked!');
    
  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }  

  /* [DONE] add class 'active' to the clicked link */
  clickedElement.classList.add('active');
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
};

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author';

function generateTitleLinks(customSelector = ''){
  console.log('Function generateTitleLinks works');
  console.log('customSelector:', customSelector); 
  /* [DONE] remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
    
  /* [DONE] find all the articles and save them to variable: articles */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  console.log('Combined selector:', optArticleSelector + customSelector);
  let html = '';

  for (let article of articles) {
    /* get the article id */
    const articleId = article.getAttribute('id');

    /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* get the title from the title element */

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    //console.log(linkHTML);
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

function generateTags(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for (let article of articles) { 
  /* find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    //console.log(articleTags)
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    //console.log(articleTagsArray);
    /* START LOOP: for each tag */
    for(let tag of articleTagsArray) {
      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      /* add generated code to html variable */
      html = html + linkHTML;
      /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    tagsWrapper.innerHTML = html;
  /* END LOOP: for every article: */
  }
}

function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
    
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
    
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
    
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
    
  /* find all tag links with class active */
  const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
    
  /* START LOOP: for each active tag link */
  for(let activeTagLink of activeTagLinks){
    /* remove class active */
    activeTagLink.classList.remove('active');
    /* END LOOP: for each active tag link */
  }
    
  /* find all tag links with "href" attribute equal to the "href" constant */
  const tagLinks = document.querySelectorAll('a[href="' + href + '"]');
    
  /* START LOOP: for each found tag link */
  for(let tagLink of tagLinks){
    /* add class active */
    tagLink.classList.add('active');
    /* END LOOP: for each found tag link */
  }
    
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}
  
function addClickListenersToTags(){
  /* find all links to tags */
  const tagLinks = document.querySelectorAll('a[href^="#tag-"]');
    
  /* START LOOP: for each link */
  for(let tagLink of tagLinks){
    /* add tagClickHandler as event listener for that link */
    tagLink.addEventListener('click', tagClickHandler);
    /* END LOOP: for each link */
  }
}

function generateAuthors() {
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  
  /* START LOOP: for every article: */
  for (let article of articles) {
    /* find author wrapper */
    const authorWrapper = article.querySelector(optArticleAuthorSelector);
      
    /* get author from data-author attribute */
    const articleAuthor = article.getAttribute('data-author');
      
    /* generate HTML of the link */
    const linkHTML = '<a href="#author-' + articleAuthor + '">' + articleAuthor + '</a>';
      
    /* insert HTML into the author wrapper */
    authorWrapper.innerHTML = linkHTML;
    /* END LOOP: for every article: */
  }
}
  
function authorClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
    
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
    
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
    
  /* make a new constant "author" and extract author from the "href" constant */
  const author = href.replace('#author-', '');
    
  /* find all author links with class active */
  const activeAuthorLinks = document.querySelectorAll('a.active[href^="#author-"]');
    
  /* START LOOP: for each active author link */
  for(let activeAuthorLink of activeAuthorLinks){
    /* remove class active */
    activeAuthorLink.classList.remove('active');
    /* END LOOP: for each active author link */
  }
    
  /* find all author links with "href" attribute equal to the "href" constant */
  const authorLinks = document.querySelectorAll('a[href="' + href + '"]');
    
  /* START LOOP: for each found author link */
  for(let authorLink of authorLinks){
    /* add class active */
    authorLink.classList.add('active');
    /* END LOOP: for each found author link */
  }
    
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-author="' + author + '"]');
}
  
function addClickListenersToAuthors(){
  /* find all links to authors */
  const authorLinks = document.querySelectorAll('a[href^="#author-"]');
    
  /* START LOOP: for each link */
  for(let authorLink of authorLinks){
    /* add authorClickHandler as event listener for that link */
    authorLink.addEventListener('click', authorClickHandler);
    /* END LOOP: for each link */
  }
}
  

generateTitleLinks();
  
generateTags();

generateAuthors();

addClickListenersToTags();

addClickListenersToAuthors();