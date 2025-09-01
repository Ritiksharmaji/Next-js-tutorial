"use client";
import { useEffect, useState } from "react";
import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "@/utils/api";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    color: "",
    description: "",
    price: 0,
    category: "",
  });
  const [editId, setEditId] = useState(null);

  // Fetch products on mount
  useEffect(() => {
    async function fetchData() {
      const data = await getProducts();
      setProducts(data);
    }
    fetchData();
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
  };

  // Create / Update product
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        const res = await updateProduct(editId, formData);
        alert(res.message);
      } else {
        const res = await createProduct(formData);
        alert(res.message);
      }
      setFormData({
        name: "",
        company: "",
        color: "",
        description: "",
        price: 0,
        category: "",
      });
      setEditId(null);
      const updated = await getProducts();
      setProducts(updated);
    } catch (error) {
      alert(error.message);
    }
  };

//  Edit product
  const handleEdit = (product) => {
    setFormData(product);
    setEditId(product._id);
  };

  // Delete product
  const handleDelete = async (id) => {
    const res = await deleteProduct(id);
    alert(res.message);
    const updated = await getProducts();
    setProducts(updated);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📦 Product Manager</h1>

      {/* Product Form */}
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="text"
          name="color"
          placeholder="Color"
          value={formData.color}
          onChange={handleChange}
        />
        <textarea
          style={styles.textarea}
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />
        <button style={styles.button} type="submit">
          {editId ? "✏️ Update Product" : "➕ Add Product"}
        </button>
      </form>

      {/* Product List */}
      <ul style={styles.list}>
        {products.map((p) => (
          <li key={p._id} style={styles.listItem}>
            <strong>{p.name}</strong> - ${p.price} <em>({p.category})</em>
            <div>
              <button style={styles.editBtn} onClick={() => handleEdit(p)}>
                ✏️ Edit
              </button>
              <button style={styles.deleteBtn} onClick={() => handleDelete(p._id)}>
                🗑 Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ✅ Internal CSS
const styles = {
  container: {
    maxWidth: "700px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "30px",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    background: "#f9f9f9",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  textarea: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    resize: "vertical",
  },
  button: {
    padding: "10px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    background: "#fff",
  },
  editBtn: {
    marginRight: "10px",
    padding: "6px 12px",
    background: "#ffc107",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  deleteBtn: {
    padding: "6px 12px",
    background: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
