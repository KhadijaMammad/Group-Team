import { BASE_URL } from "./constant.js";

async function getData() {
    const res = await axios.get(BASE_URL)
     console.log(res.data);
    drawCard(res.data);
  }
  getData();

  const watchesCard = document.querySelector(".row-watch")

  function drawCard(watches){
    watchesCard.innerHTML = "";
    watches.forEach((watch)=>{
        watchesCard.innerHTML +=`
            <div class="col-12 col-md-6 col-lg-4 allwatches">
                <div  class="card" style="width: 95%">
                    <div class="watches-cards">
                        <div class="watch-data my-3">
                        <i class="fa-regular fa-heart fav"></i>
                            <img src="${watch.image}" class="popular-img">
                            <button class="btn btn-danger add-card">Add to Card</button>
                        </div>
                    </div>
                </div>
                
                      <h4>${watch.title}</h4>
                        <p>$ ${watch.price}</p>
             </div>
    
        `;
    });
  }