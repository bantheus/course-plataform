type PostData<T> = {
  url: string;
  method?: "POST" | "PATCH" | "PUT" | "DELETE";
  values: T;
};

export const postData = async <T>({ url, method, values }: PostData<T>) => {
  try {
    const response = await fetch(url, {
      method: method || "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      const responseData = await response.json();
      return { success: true, data: responseData };
    } else {
      const errorData = await response.json();
      return { success: false, error: errorData };
    }
  } catch (error) {
    return { success: false, error: "Something went wrong" };
  }
};
