const movies ={
    TITLE: "abc",
    TAGS: [1,2,5,7],
    showMovie(){
        this.TAGS.forEach(function (element){
            console.log(element,this.TITLE);
        }.bind(this)
        );
    },
};

movies.showMovie();

