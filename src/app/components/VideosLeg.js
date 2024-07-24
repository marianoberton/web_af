const Videos = ({ videosData }) => (
    <div className="mt-10">
      <h2 className="text-4xl font-bold mb-5 text-center">Exposiciones en la Cámara de Diputados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videosData.map((video, index) => (
          <div key={index} className="w-full relative" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              title={`Exposición del ${video.date}`}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default Videos;
  