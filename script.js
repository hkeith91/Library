function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function(){
        console.log(`${title} by ${author}, ${pages} pages, ${isRead}`);
    }

    const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not yet read.")

    console.log(theHobbit.info());

}