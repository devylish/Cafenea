const SubmitReviewbtn = document.getElementById("review__submit_buton");
const Name = document.getElementById("review_name");
const Rating = document.getElementById("review_rate");
const Message = document.getElementById("review_message");


SubmitReviewbtn.addEventListener("click", SubmitReview);

function SubmitReview(){
    let Reviews =  JSON.parse(localStorage.getItem("reviews"));
    
    let review = {name:Name.value,rating:Rating.value,message:Message.value}
    console.log(Reviews);
    if(Reviews == null){
        Reviews = [review];
    }
    else{
        Reviews.push(review);
    }

    localStorage.setItem("reviews",JSON.stringify(Reviews))
    

    //localStorage.setItem("review",JSON.stringify(review))
    //console.log(Name.value);
    window.location.href = "index.html";
}

