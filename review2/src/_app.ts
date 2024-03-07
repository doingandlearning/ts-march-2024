interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
}

interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const fetchFromAPI = async <T>(
  category: string = "users",
  id?: number
): Promise<Array<T> | string> => {
  let param: string = "";
  if (0 >= id && id < 10) {
    param += id;
  }
  const api = `https://jsonplaceholder.typicode.com/${category}/${param}`;
  try {
    const response = await fetch(api);
    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
  } finally {
    const images = document.getElementById("images");
    if (images) {
      images.innerHTML = "";
    }
  }
};

const listOfUsers = (users: User[]): string => {
  const names = users
    .map((user) => `<li>${user.name} ${user.email} ${user.website}</li>`)
    .join("\n");
  return `<ul>${names}</ul>`;
};

const getListOfPhotos = (photos: Photo[]): string => {
  console.log(photos[9]);
  const images = photos
    .map((photo) => `<li><img src="${photo.url}" /></li>`)
    .join("\n");
  return `<ul>${images}</ul>`;
};

async function displayUsers() {
  const output = document.getElementById("output");
  const data = await fetchFromAPI<User>();
  if (typeof data !== "string" && output) {
    output.innerHTML = listOfUsers(data);
  }
}

async function displayPhotos() {
  const images = document.getElementById("images");
  if (images) {
    images.innerHTML = "<p>Loading...</p>";
    const photos = await fetchFromAPI<Photo>("photos");
    if (typeof photos !== "string") {
      images.innerHTML = getListOfPhotos(photos);
    }
  }
}

displayUsers();
displayPhotos();
