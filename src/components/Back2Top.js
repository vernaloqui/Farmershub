function Back2Top(){
    const scrollUp = function(){
        // When the user scrolls down 20px from the top of the document, show the button
       window.onscroll = function() {scrollFunction()};
       
       topFunction();
   }
   const scrollFunction = function() {
       let backTop = document.getElementById("scrollUp");
       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
           backTop.style.display = "block";
       } else {
           backTop.style.display = "none";
       }
   }
   
       // When the user clicks on the button, scroll to the top of the document
   const topFunction = function() {
       document.body.scrollTop = 0; // For Safari
       document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
   }
    
    return(
        <button id="scrollUp" onClick={scrollUp}>
            <i className="bi bi-arrow-up"></i>
        </button>
    )
}
export default Back2Top;