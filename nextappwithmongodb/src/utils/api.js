const BASE_URL = "/api/products"; // Next.js API route

// ✅ Create a Product (POST)
export async function createProduct(productData) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  if (!res.ok) {
    throw new Error("Failed to create product");
  }

  return res.json();
}

// ✅ Get All Products (GET)
export async function getProducts() {
  const res = await fetch(BASE_URL, {
    method: "GET",
    cache: "no-store", // prevent caching in Next.js
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

// ✅ Get Single Product by ID (GET)
export async function getProductById(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

// ✅ Update Product by ID (PUT)
export async function updateProduct(id, productData) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  if (!res.ok) {
    throw new Error("Failed to update product");
  }

  return res.json();
}

// ✅ Delete Product by ID (DELETE)
export async function deleteProduct(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete product");
  }

  return res.json();
}
