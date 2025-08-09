import Button from "@/components/common/Button";
import MovieCard from "@/components/common/MovieCard";
import Loading from "@/components/common/Loading";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { MoviesProps } from "@/interfaces";

const Home: React.FC = () => {
  const router = useRouter();
  const [movies, setMovies] = useState<MoviesProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const res = await axios.post("/api/fetch-movies", {
          year: undefined,
          page: 1,
        });
        setMovies(res.data.movies);
      } catch (err) {
        setMovies([]);
      }
      setLoading(false);
    };
    fetchMovies();
  }, []);

  return (
    <div className="bg-[#171D22] text-white min-h-screen">
      <section
        className="h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://themebeyond.com/html/movflx/img/bg/breadcrumb_bg.jpg")',
        }}
      >
        <div className="bg-black bg-opacity-60 rounded-xl p-10 flex flex-col justify-center items-center text-center shadow-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Discover Your Next Favorite{" "}
            <span className="text-[#E2D609]">Movie</span>
          </h1>
          <p className="text-lg md:text-2xl mb-6 max-w-2xl">
            Explore the latest blockbuster movies, critically acclaimed films,
            and your personal favorites – all in one place.
          </p>
          <Button
            title="Browse Movies"
            action={() => router.push("/movies", undefined, { shallow: false })}
          />
        </div>
      </section>

      <section className="py-16 px-4 md:px-16 lg:px-32 bg-[#121018]">
        <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-center">
          Featured Movies
        </h2>
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array.isArray(movies) && movies.length > 0 ? (
              movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  title={movie.titleText?.text || "No Title"}
                  posterImage={movie.primaryImage?.url || "/file.svg"}
                  releaseYear={movie.releaseYear?.year || "N/A"}
                />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-400 text-xl">
                No movies found.
              </div>
            )}
          </div>
        )}
      </section>

      <section className="py-16 px-8 md:px-44 bg-[#171D22] text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-8">
          Join CineSeek Now!
        </h2>
        <p className="text-lg md:text-2xl mb-12">
          Sign up today to get access to the latest movies, exclusive content,
          and personalized movie recommendations.
        </p>
        <Button title="Get Started" />
      </section>
    </div>
  );
};

export default Home;
