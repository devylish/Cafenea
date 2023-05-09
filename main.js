const review_name_el = document.getElementById("review_name");
const review_rating_el = document.getElementById("review_rating");
const review_message_el = document.getElementById("review_message");
const reviews_table = document.getElementById("reviews_table");

function getReviews () {      
    const Reviews = JSON.parse(localStorage.getItem("reviews"))

    Reviews.forEach(review => {
        console.log(review);
        let ReviewDiv = document.createElement('div');
        ReviewDiv.className = 'revclient';
        
        let ReviewName = document.createElement('h3');
        ReviewName.innerHTML =  review.name;
        ReviewDiv.appendChild(ReviewName)

        
        let ReviewRating = document.createElement('p');
        ReviewRating.innerHTML ="rating: " +  review.rating;
        ReviewDiv.appendChild(ReviewRating)

        
        let ReviewMessage = document.createElement('p');
        ReviewMessage.innerHTML = review.message;
        ReviewDiv.appendChild(ReviewMessage)
    

        reviews_table.appendChild(ReviewDiv);

    });
}

getReviews();


const review_sterg_el = document.getElementById("reviews_sterg");
review_sterg_el.addEventListener("click", StergReview);

function StergReview(){
    console.log('TEST');
    localStorage.removeItem("reviews")
    reviews_table.innerHTML = "";
}



