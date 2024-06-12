import Button from "./Button";

const Card = ({ id, img, course }) => {
  // Reusable Card Component for below
  return (
    <div
      id={id}
      className="h-52 w-52 p-[0.2rem] items-center bg-conic-gradient
               rounded-xl overflow-hidden lg:h-60 lg:w-60"
    >
      <div
        className="flex flex-col p-4 items-center justify-between w-full h-full 
      bg-gradient-to-r from-ks-primary to-teal-800 text-ks-white rounded-xl hover:bg-gradient-to-l"
      >
        <img src={img} className="h-20 w-20 lg:h-24 lg:w-24 " alt="icon" />
        <h6 className="h6  font-code font-semibold text-ks-white">{course}</h6>
        <Button href="courses" primary>
          Apply
        </Button>
      </div>
    </div>
  );
};

export default Card;
