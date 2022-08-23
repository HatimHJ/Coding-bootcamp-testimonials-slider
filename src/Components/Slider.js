import { data } from "../data";

import next from "../images/icon-next.svg";
import prev from "../images/icon-prev.svg";
import { useEffect, useState } from "react";

function Slider() {
	const [index, setIndex] = useState(0);
	// function
	const prevHandler = () => {
		if (index === 0) setIndex(data.length - 1);
		else setIndex((prev) => (prev -= 1));
	};
	const nextHandler = () => {
		if (index < data.length - 1) setIndex((prev) => (prev += 1));
		else setIndex(0);
	};

	// return
	return (
		<div className="slider">
			<div className="container">
				<div className="slider-holder py-6 ">
					<div className="img-btns mb-6">
						<div className="image">
							<img src={data[index].img} alt={data[index].img} />
						</div>
						<div className="btns">
							<button className="btn prev" onClick={() => prevHandler()}>
								<img src={prev} alt="" />
							</button>
							<button className="btn next" onClick={() => nextHandler()}>
								<img src={next} alt="" />
							</button>
						</div>
					</div>
					<div className="text-name text-center">
						<p className="testimonial">{`${data[index].testimonial}`}</p>
						<div className="name-title">
							<p className="name">{data[index].name}</p>
							<p className="title">{data[index].title}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Slider;
