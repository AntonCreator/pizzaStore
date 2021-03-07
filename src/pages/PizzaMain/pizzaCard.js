import pizzaData from "../../api/pizzaData";

<div class="card col-sm-6 col-lg-3">
                <img class="card-img-top" src={pizza.image} />
                <div class="card-body">
                  <h4 class="card-title">{pizza.name}</h4>
                  <p class="card-text">
                  <button className = "btn btn-warning">
                   Add a cart 🛒
                  </button>
                 <Link to = {`/pizzas/${pizza.id}`}>
                 <button className = "btn btn-success">See more</button>
                 </Link>
                  </p>
                </div>
</div>    