import React, {
  useRef,
  useState,
  useEffect,
  ReactNode,
  MouseEvent,
} from "react";
import RightArrowIcon from "./svgs/rightArrow";
import LeftArrowIcon from "./svgs/leftArrow";

interface HomeCarouselProps {
  children: ReactNode;
  allowDrag?: boolean;
  oneAtATime?: boolean;
}

const HomeCarousel: React.FC<HomeCarouselProps> = ({
  children,
  allowDrag = true,
  oneAtATime = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null); // Carousel container - initially null
  const isDraggingRef = useRef<boolean>(false); // Check if the carousel is currently being dragged - initially false
  const draggedRef = useRef<boolean>(false); // See if whether the user clicked or dragged - initially false
  const dragStartPosition = useRef({ x: 0, scrollLeft: 0 }); // Initial mouse and scroll positions when dragging starts - initially 0
  const [showLeftArrow, setShowLeftArrow] = useState(false); // State to show a arrow only when there is anything left to be scrolled
  const [showRightArrow, setShowRightArrow] = useState(false);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!allowDrag) return;
    isDraggingRef.current = true;
    draggedRef.current = false;

    if (containerRef.current) {
      // Stores initial mouse position(x, y) and the container rolling(scrollLeft)
      dragStartPosition.current = {
        x: e.pageX,
        scrollLeft: containerRef.current.scrollLeft,
      };
    }
  };

  // Update scroll based on mouse movement.
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    const dx = e.pageX - dragStartPosition.current.x;

    if (Math.abs(dx) > 10) {
      draggedRef.current = true;
    }

    containerRef.current.scrollLeft = dragStartPosition.current.scrollLeft - dx;
    containerRef.current.scrollBy({
      // Adjustment effect
      left: dx > 0 ? -300 : 300,
      behavior: "smooth",
    });

    containerRef.current.style.scrollSnapType = "";
  };

  // Mouse stops dragging.
  const handleMouseUp = () => {
    if (!allowDrag || !containerRef.current) return;
    isDraggingRef.current = false;
    containerRef.current.style.scrollSnapType = "";
  };

  // Scroll event listener.
  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  // Left arrow click.
  const handlePrevious = () => {
    if (containerRef.current) {
      if (oneAtATime) {
        containerRef.current.scrollBy({
          left: -containerRef.current.clientWidth,
          behavior: "smooth",
        });
      } else {
        containerRef.current.scrollBy({
          left: -containerRef.current.clientWidth,
          behavior: "smooth",
        });
      }
    }
  };

  // Right arrow click.
  const handleNext = () => {
    if (containerRef.current) {
      if (oneAtATime) {
        containerRef.current.scrollBy({
          left: containerRef.current.clientWidth,
          behavior: "smooth",
        });
      } else {
        containerRef.current.scrollBy({
          left: containerRef.current.clientWidth,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className={`${oneAtATime ? "w-70" : "w-full px-2"} relative`}>
      <div
        ref={containerRef}
        className={`${
          oneAtATime ? "w-70 gap-0" : "w-full gap-4 px-4"
        } overflow-x-auto no-scrollbar flex py-6 snap-x snap-mandatory`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const element = child as React.ReactElement<any>;
            if (element.props["title"] === "Ver mais") {
              return child;
            }
          }

          return (
            <div
              className={`flex-shrink-0 ${
                oneAtATime
                  ? "w-70"
                  : "w-62 2xl:min-w-80 shadow-lg hover:scale-105 hover:border-gold active:scale-105 active:border-gold cursor-pointer border-3 border-white"
              } 
              scroll-snap-center bg-white rounded-lg overflow-hidden 
              transition-transform duration-300`}
              onClickCapture={(e) => {
                if (draggedRef.current) {
                  e.stopPropagation();
                  e.preventDefault();
                }
              }}
            >
              {child}
            </div>
          );
        })}
      </div>

      {showLeftArrow && (
        <button
          onClick={handlePrevious}
          title="Left"
          className="group z-2 cursor-pointer absolute left-2 top-1/2
          transform -translate-y-1/2 transition-transform duration-300"
        >
          <LeftArrowIcon />
        </button>
      )}

      {showRightArrow && (
        <button
          onClick={handleNext}
          title="Right"
          className="group z-2 cursor-pointer absolute right-2 top-1/2
          transform -translate-y-1/2 transition-transform duration-300"
        >
          <RightArrowIcon />
        </button>
      )}
    </div>
  );
};

export default HomeCarousel;
