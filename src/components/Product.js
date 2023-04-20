import { useEffect, useState } from "react";

const ProductCollection = () => {
	//state hook
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchProduct = () => {
		fetch("https://api.escuelajs.co/api/v1/products")
			.then((res) => res.json())
			.then((res) => {
				setProducts(res);
				setLoading(false);
			});
	};

	useEffect(() => {
		fetchProduct();
	}, []);

	return loading ? (
		<>
			<WaitingData />
			<WaitingData />
			<WaitingData />
		</>
	) : (
	<div className="container">
				<div className="row mt-5">
	{products.map((product) =>(
		<div className="col-12 col-sm-12 col-md-4 col-lg-3">
			<div class="card" style={{width: 300}}>
		<img src={product.images} class="card-img-top" alt="..."/>
		<div class="card-body">
		  <p class="card-text">{product.title}</p>
		</div>
	  </div>
		</div>
	))}
		</div>
	</div>
	);
};

function WaitingData() {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-4 col-lg-4 ">
						<div class="card" aria-hidden="true">
							<img src="..." class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title placeholder-glow">
									<span class="placeholder col-6"></span>
								</h5>
								<p class="card-text placeholder-glow">
									<span class="placeholder col-7"></span>
									<span class="placeholder col-4"></span>
									<span class="placeholder col-4"></span>
									<span class="placeholder col-6"></span>
									<span class="placeholder col-8"></span>
								</p>
								<a class="btn btn-primary disabled placeholder col-6"></a>
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-12 col-md-4 col-lg-4 ">
						<div class="card" aria-hidden="true">
							<img src="..." class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title placeholder-glow">
									<span class="placeholder col-6"></span>
								</h5>
								<p class="card-text placeholder-glow">
									<span class="placeholder col-7"></span>
									<span class="placeholder col-4"></span>
									<span class="placeholder col-4"></span>
									<span class="placeholder col-6"></span>
									<span class="placeholder col-8"></span>
								</p>
								<a class="btn btn-primary disabled placeholder col-6"></a>
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-12 col-md-4 col-lg-4 ">
						<div class="card" aria-hidden="true">
							<img src="..." class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title placeholder-glow">
									<span class="placeholder col-6"></span>
								</h5>
								<p class="card-text placeholder-glow">
									<span class="placeholder col-7"></span>
									<span class="placeholder col-4"></span>
									<span class="placeholder col-4"></span>
									<span class="placeholder col-6"></span>
									<span class="placeholder col-8"></span>
								</p>
								<a class="btn btn-primary disabled placeholder col-6"></a>
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-12 col-md-4 col-lg-4 ">
						<div class="card" aria-hidden="true">
							<img src="..." class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title placeholder-glow">
									<span class="placeholder col-6"></span>
								</h5>
								<p class="card-text placeholder-glow">
									<span class="placeholder col-7"></span>
									<span class="placeholder col-4"></span>
									<span class="placeholder col-4"></span>
									<span class="placeholder col-6"></span>
									<span class="placeholder col-8"></span>
								</p>
								<a class="btn btn-primary disabled placeholder col-6"></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductCollection;
