import { REVIEWS } from "../constants";

const Reviews = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2" id="reviews">
      <div className="my-20 ">
        <h2 className="  text-xl lg:text-3xl tracking-tight text-center uppercase mb-12">
          Reviews
        </h2>
        <p className="max-w-2xl text-lg mb-12 text-center mx-auto">
          {REVIEWS.text}
        </p>
        <div className="flex flex-wrap justify-center">
          {REVIEWS.reviews.map((review, index) => (
            <div
              key={index}
              className="max-w-xs  mt-12 flex justify-center flex-col items-center  mx-2 p-12 bg-white rounded-2xl shadow-md  "
            >
              <p>{review.review}</p>
              <div className="flex items-center mt-4">
                <img
                  src={review.image}
                  alt="review image"
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div className="flex flex-col justify-center">
                  <p className=" text-xl font-bold">{review.name}</p>
                  <p className="text-sm text-neutral-500">{review.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
