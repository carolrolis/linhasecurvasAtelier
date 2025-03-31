import React, {
  useRef,
  useState,
  useEffect,
  ReactNode,
  MouseEvent,
} from "react";

interface HomeCarouselProps {
  children: ReactNode;
  allowDrag?: boolean;
}

const HomeCarousel: React.FC<HomeCarouselProps> = ({
  children,
  allowDrag = true,
}) => {
  // Carousel container - initially null.
  const containerRef = useRef<HTMLDivElement>(null);
  // Check if the carousel is currently being dragged.
  const isDraggingRef = useRef<boolean>(false);
  // Initial mouse and scroll positions when dragging starts.
  const dragStartPosition = useRef({ x: 0, y: 0, scrollLeft: 0 });
  // Show a arrow only when there is anything left to be scrolled.
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!allowDrag) return;
    else isDraggingRef.current = true;

    if (containerRef.current) {
      // Stores initial mouse position(x, y) and the container rolling(scrollLeft).
      dragStartPosition.current = {
        x: e.pageX,
        y: e.pageY,
        scrollLeft: containerRef.current.scrollLeft,
      };
    }
  };

  // Update scroll based on mouse movement.
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    // e.preventDefault();
    const dx = e.pageX - dragStartPosition.current.x;
    containerRef.current.scrollLeft = dragStartPosition.current.scrollLeft - dx;

    containerRef.current.scrollBy({
      left: dx > 0 ? -150 : 150,
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
      containerRef.current.scrollBy({
        left: -containerRef.current.clientWidth * 0.5,
        behavior: "smooth",
      });
    }
  };

  // Right arrow click.
  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.clientWidth * 0.5,
        behavior: "smooth",
      });
    }
  };

  // Container and Cell styles
  const containerClasses = "w-full overflow-x-auto no-scrollbar";
  const cellClasses =
    "flex-shrink-0 w-62 scroll-snap-center bg-white rounded-lg shadow-lg overflow-hidden";

  return (
    <div className="relative w-full px-2">
      <div
        ref={containerRef}
        className={`${containerClasses} flex gap-4 py-6 px-4`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {React.Children.map(children, (child) => (
          <div
            className={`${cellClasses} cursor-pointer border-3 border-white hover:scale-105 hover:border-gold transition-transform duration-300`}
          >
            {child}
          </div>
        ))}
      </div>

      {showLeftArrow && (
        <button
          onClick={handlePrevious}
          title="Left"
          className="group z-2 hidden sm:block cursor-pointer absolute left-2 top-1/2 transform -translate-y-1/2"
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="group-hover:fill-gray-200"
              d="M9 13L6 10ZM6 10L9 7ZM6 10H14ZM1 10C1 14.9706 5.0294 19 10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.0294 1 1 5.02944 1 10Z"
              fill="#FAF3E5"
            />
            <path
              d="M9 13L6 10M6 10L9 7M6 10H14M1 10C1 14.9706 5.0294 19 10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.0294 1 1 5.02944 1 10Z"
              stroke="#2C3E50"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      )}

      {showRightArrow && (
        <button
          onClick={handleNext}
          title="Right"
          className="group z-2 hidden sm:block cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="group-hover:fill-gray-200"
              d="M11 13L14 10ZM14 10L11 7ZM14 10H6ZM19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
              fill="#FAF3E5"
            />
            <path
              d="M11 13L14 10M14 10L11 7M14 10H6M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
              stroke="#2C3E50"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default HomeCarousel;
