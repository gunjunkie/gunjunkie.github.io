function rescrapeAll(){
    var colors = ["orange","gray","red","yellow","blue","green","purple"];
    for (i = 0; i < 7; i++){
        for (j = 0; j < 7; j++){
            $.post('https://graph.facebook.com', {
                id: 'http://www.gunjunkie.io/'+colors[i]+colors[j]+'.html',
                scrape: true
            }, function(response) {
                console.log(response);
            });
    }
}
}

rescrapeAll();
