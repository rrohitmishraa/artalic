import { useState } from "react";

export default function Masonry(props) {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleClick = (file) => {
    setSelectedMedia(file); // Set the clicked media
  };

  const closeModal = () => {
    setSelectedMedia(null); // Close the modal by clearing the selected media
  };

  return (
    <div>
      {/* Masonry Grid */}
      <div
        className={`px-[18px] ${selectedMedia ? "blur-lg" : ""}`}
        style={{ columns: props.columnCount, columnGap: props.gap }}
      >
        {props.images.map((file, i) => {
          const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(file);
          const isVideo = /\.(mp4|webm|ogg|avi|mov)$/i.test(file);

          return (
            <div
              key={i}
              className="rounded-[8px] mb-[18px] cursor-pointer"
              onClick={() => handleClick(file)}
            >
              {isImage ? (
                <img
                  loading="lazy"
                  src={file}
                  alt=""
                  className="rounded-[8px]"
                />
              ) : isVideo ? (
                <video
                  preload="none"
                  className="rounded-[8px]"
                  width="100%"
                  controls
                >
                  <source src={file} type="video/mp4" />
                </video>
              ) : (
                <p>Unsupported file format</p>
              )}
            </div>
          );
        })}
      </div>

      {/* Modal for enlarged view */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Display enlarged image or video */}
            {/\.(jpg|jpeg|png|gif|webp)$/i.test(selectedMedia) ? (
              <img
                src={selectedMedia}
                alt="Enlarged media"
                className="max-w-[90vw] max-h-[90vh]"
              />
            ) : /\.(mp4|webm|ogg|avi|mov)$/i.test(selectedMedia) ? (
              <video
                src={selectedMedia}
                controls
                autoPlay
                className="max-w-[90vw] max-h-[90vh]"
              />
            ) : (
              <p className="text-white">Unsupported media format</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
