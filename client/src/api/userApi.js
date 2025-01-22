const userUrl = import.meta.env.VITE_USER_URL;

export const fetchUsers = async () => {
  const response = await fetch(userUrl);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
};
