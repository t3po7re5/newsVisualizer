var newsItem = {title:"Test News Item", longitude:100, latitude:100, description:"This is a description of the test news item"};
console.log(newsItem.title);


function getScript(url, callback) {
   var script = document.createElement('script');
   script.type = 'text/javascript';
   script.src = url;

   script.onreadystatechange = callback;
   script.onload = callback;

   document.getElementsByTagName('head')[0].appendChild(script);
}