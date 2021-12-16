import React from "react";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { Popover, Transition, Dialog } from "@headlessui/react";

export default function FilmCard({ film }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const [filmDetail, setFilmDetail] = useState(false);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  };
  const addLike = () => {
    fetch(
      `https://pti-final-project-be.herokuapp.com/${film.id}/like`,
      requestOptions
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setFilmDetail(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };
  const addDislike = () => {
    fetch(
      `https://pti-final-project-be.herokuapp.com/${film.id}/dislike`,
      requestOptions
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setFilmDetail(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };
  const deleteFilm = () => {
    closeModal();
    fetch(`https://pti-final-project-be.herokuapp.com/${film.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  return (
    <div className="w-60 h-96 rounded-md shadow-lg transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110">
      <button className="h-full w-full" onClick={openModal}>
        <div className="w-full h-3/4">
          <img
            className="object-cover h-full w-full rounded-md"
            src={film.imageUrl}
          ></img>
        </div>
        <div className="w-full h-1/4">
          <div className="w-full h-3/5 text-center pt-3 font-semibold font-roboto">
            {film.title}
          </div>
          <div className="w-full h-2/5 flex justify-between px-5">
            <p>{film.genre}</p>
            <p>{film.released_year}</p>
          </div>
        </div>
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center bg-gray-200 bg-opacity-50">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="image-film w-full h-56 flex items-center justify-center mb-5">
                  <div className="w-36 h-full">
                    <img
                      className="object-cover h-full w-full"
                      src={film.imageUrl}
                    ></img>
                  </div>
                </div>
                <Dialog.Title
                  as="h3"
                  className="text-lg  leading-6 text-gray-900 font-bold"
                >
                  {film.title}
                </Dialog.Title>
                <div className="mt-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div>Genre</div>
                    <div>{film.genre}</div>
                    <div>Tahun Rilis</div>
                    <div>{film.released_year}</div>
                    <div>Likes</div>
                    <div>{filmDetail ? filmDetail.like : film.like}</div>
                    <div>Dislikes</div>
                    <div>{filmDetail ? filmDetail.dislike : film.dislike}</div>
                  </div>
                </div>

                <div className="mt-4 flex justify-center gap-4">
                  <a
                    href={film.trailerUrl}
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    Trailer
                  </a>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-500 border border-transparent rounded-md hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={addLike}
                  >
                    Likes
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-yellow-500 border border-transparent rounded-md hover:bg-yellow-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={addDislike}
                  >
                    Dislikes
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 border border-transparent rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={deleteFilm}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
