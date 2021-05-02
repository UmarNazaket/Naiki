



const getDonations = () => {
    fetch('https://naiki-b125a-default-rtdb.firebaseio.com/donation.json').then(response => response.json())
        .then(data => {
            renderDonationCards(data)
        })
}

function renderDonationCards(donations) {
    let data = '';
    donations.forEach((donation, idx) => {
        data += `	<div class="col-lg-4 col-md-4 col-sm-6">
                            <div class="fh5co-blog ">
                                <a ><img class="img-responsive" src="${donation.image}" alt=""></a>
                                <div class="blog-text">
                                    <div class="prod-title">
                                        <h3><a href="" #><b>${donation.name}</b></a></h3>
                                        <span class="posted_by">Posted by ${donation.postedBy}</span>
                                        <span class="comment">${donation.postedOn}</span>
                                        <p>${donation.description}</p>
                                    </div>
                                </div>
                            </div>
                            </div>`

    })
    document.getElementById("donationData").innerHTML = data

}