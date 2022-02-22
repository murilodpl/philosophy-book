import Slider from "react-slick";

import aestheticsSvg from '../svgs/Aesthetics.svg'
import epistemologySvg from '../svgs/Epistemology.svg'
import ethicsSvg from '../svgs/Ethics.svg'
import logicSvg from '../svgs/Logic.svg'
import metaphysicsSvg from '../svgs/Metaphysics.svg'
import politicalSvg from '../svgs/Political.svg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LiteratureSlider() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            }
        ]
    };
    return (
        <div className="pt-12">
            <h2 className="text-primary font-bold text-2xl my-4">Some Literature Topics:</h2>

            <Slider {...settings}>
                <div>
                    <a href="https://en.wikipedia.org/wiki/Category:Aesthetics_literature" rel="noopener" target="_blank">
                        <h3 className="text-primary font-bold text-lg mb-3">Aesthetics</h3>
                        <img className="m-auto" src={aestheticsSvg} loading="lazy" width="150px" height="150px" alt="Aesthetics" />
                    </a>
                </div>
                <div>
                    <a href="https://en.wikipedia.org/wiki/Category:Epistemology_literature" rel="noopener" target="_blank">
                        <h3 className="text-primary font-bold text-lg mb-3">Epistemology</h3>
                        <img className="m-auto" src={epistemologySvg} loading="lazy" width="150px" height="150px" alt="Epistemology" />
                    </a>
                </div>
                <div>
                    <a href="https://en.wikipedia.org/wiki/Category:Ethics_literature" rel="noopener" target="_blank">
                        <h3 className="text-primary font-bold text-lg mb-3">Ethics</h3>
                        <img className="m-auto" src={ethicsSvg} loading="lazy" width="150px" height="150px" alt="Ethics" />
                    </a>
                </div>
                <div>
                    <a href="https://en.wikipedia.org/wiki/Category:Logic_literature" rel="noopener" target="_blank">
                        <h3 className="text-primary font-bold text-lg mb-3">Logic</h3>
                        <img className="m-auto" src={logicSvg} loading="lazy" width="150px" height="150px" alt="Logic" />
                    </a>
                </div>
                <div>
                    <a href="https://en.wikipedia.org/wiki/Category:Metaphysics_literature" rel="noopener" target="_blank">
                        <h3 className="text-primary font-bold text-lg mb-3">Metaphysics</h3>
                        <img className="m-auto" src={metaphysicsSvg} loading="lazy" width="150px" height="150px" alt="Metaphysics" />
                    </a>
                </div>
                <div>
                    <a href="https://en.wikipedia.org/wiki/Category:Political_philosophy_literature" rel="noopener" target="_blank">
                        <h3 className="text-primary font-bold text-lg mb-3">Political Philosophy</h3>
                        <img className="m-auto" src={politicalSvg} loading="lazy" width="150px" height="150px" alt="Political Philosophy" />
                    </a>
                </div>
            </Slider>
        </div>
    );
}