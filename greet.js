function greetUser(){
    const hasVisitedBefore = document.cookie.includes('visitedBefore=true');
    if(hasVisitedBefore){
        alert("Welcome back to Shows and animes to watch");
    } else {
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 7);
        document.cookie = `visitedBefore=true; expires=${expiryDate.toUTCString()}; path=/`;
        alert("Welcome to shows and animes to watch");
    }
}
greetUser()