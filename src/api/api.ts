const BASE_URL = `https://fakestoreapi.com`;

const getResponse = async (res: Response) => {
    if (res.ok) {
        return res.json();
    } else {
        const errorText = await res.text();
        throw new Error(`Ошибка: ${res.status} - ${errorText}`);
    }
};

const getUsers = (limit: number) => {
    const url = new URL(`${BASE_URL}/users`);
    url.searchParams.append("limit", limit.toString());
    return fetch(url.toString()).then(getResponse);
};

export { getUsers };
