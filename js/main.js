var pageCount=1;
var blogCount=0;
$(document).ready(function() {
    $.ajax({
        url: "/rest/blog/blogMeta"
    }).then(function(data) {
       $('.blogMeta-pageCount').append(data.pageCount);
       $('.blogMeta-blogCount').append(data.blogCount);

       $('#pagination').materializePagination({
        align: 'center',
        lastPage:  data.pageCount,
        firstPage:  1,
        urlParameter: 'page',
        useUrlParameter: true,
        onClickCallback: pageCallback
    }); 
    });
});

function pageCallback(requestedPage) {
    console.log('Requested page is '+ requestedPage);
};